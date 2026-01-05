import { compileMDX } from 'next-mdx-remote/rsc'
import { readFile, readdir } from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import type { BlogPost, BlogPostMetadata } from '@/lib/blog-data'
import { MDXComponents } from '@/components/blog/MDXComponents'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

// Get all blog posts metadata (for list pages)
export async function getAllPosts(): Promise<BlogPostMetadata[]> {
  try {
    const files = await readdir(BLOG_DIR)
    const mdxFiles = files.filter(file => file.endsWith('.mdx'))

    const posts = await Promise.all(
      mdxFiles.map(async (file) => {
        const slug = file.replace('.mdx', '')
        const filePath = path.join(BLOG_DIR, file)
        const source = await readFile(filePath, 'utf-8')
        const { data, content } = matter(source)
        const stats = readingTime(content)

        return {
          slug,
          title: data.title,
          description: data.description,
          date: data.date,
          author: data.author || 'Tyler Gray',
          tags: data.tags || [],
          readingTime: stats.text,
          published: data.published ?? true,
          coverImage: data.coverImage,
          icon: data.icon
        } as BlogPostMetadata
      })
    )

    return posts.sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    // Return empty array if directory doesn't exist yet
    return []
  }
}

// Get single post with compiled MDX content
export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
    const source = await readFile(filePath, 'utf-8')
    const { data, content } = matter(source)
    const stats = readingTime(content)

    const { content: mdxContent } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            [rehypePrettyCode, {
              theme: 'nord',
              keepBackground: false,
            }]
          ]
        }
      },
      components: MDXComponents
    })

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author || 'Tyler Gray',
      tags: data.tags || [],
      readingTime: stats.text,
      published: data.published ?? true,
      coverImage: data.coverImage,
      icon: data.icon,
      content: mdxContent,
      excerpt: data.description
    }
  } catch (error) {
    return null
  }
}

// Generate static params for dynamic routes
export async function getBlogSlugs(): Promise<string[]> {
  const posts = await getAllPosts()
  return posts.filter(p => p.published).map(p => p.slug)
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tags = new Set<string>()
  posts.forEach(post => post.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
}
