import { getAllPosts, getAllTags } from '@/lib/blog/mdx'
import { BlogList } from '@/components/blog/BlogList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Tyler Gray',
  description: 'Thoughts on software development, tools, and technology',
  openGraph: {
    title: 'Blog | Tyler Gray',
    description: 'Thoughts on software development, tools, and technology',
  }
}

export default async function BlogPage() {
  const allPosts = await getAllPosts()
  const publishedPosts = allPosts.filter(p => p.published)
  const tags = await getAllTags()

  return (
    <main className="min-h-screen pt-24 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Thoughts on software development, tools, and technology
          </p>
        </div>

        <BlogList initialPosts={publishedPosts} allTags={tags} />
      </div>
    </main>
  )
}
