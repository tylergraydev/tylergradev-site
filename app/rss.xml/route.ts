import { getAllPosts } from '@/lib/blog/mdx'
import { Feed } from 'feed'

export async function GET() {
  const posts = await getAllPosts()
  const publishedPosts = posts.filter(p => p.published)

  const feed = new Feed({
    title: 'Tyler Gray | Blog',
    description: 'Thoughts on software development, tools, and technology',
    id: 'https://tylergradev.com/blog',
    link: 'https://tylergradev.com/blog',
    language: 'en',
    image: 'https://tylergradev.com/avatar.png',
    favicon: 'https://tylergradev.com/favicon.ico',
    copyright: `All rights reserved ${new Date().getFullYear()}, Tyler Gray`,
    feedLinks: {
      rss2: 'https://tylergradev.com/rss.xml',
      atom: 'https://tylergradev.com/atom.xml',
    },
    author: {
      name: 'Tyler Gray',
      email: 'iam@tylergray.dev',
      link: 'https://tylergradev.com',
    },
  })

  publishedPosts.forEach(post => {
    feed.addItem({
      title: post.title,
      id: `https://tylergradev.com/blog/${post.slug}`,
      link: `https://tylergradev.com/blog/${post.slug}`,
      description: post.description,
      content: post.description,
      author: [
        {
          name: post.author,
          email: 'iam@tylergray.dev',
          link: 'https://tylergradev.com',
        },
      ],
      date: new Date(post.date),
      category: post.tags.map(tag => ({ name: tag })),
    })
  })

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
