import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://tylergradev.com'

  // Get all blog posts
  const posts = await getAllPosts()
  const publishedPosts = posts.filter(p => p.published)

  // Generate blog post URLs
  const blogPostUrls = publishedPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogPostUrls,
  ]
}
