export interface BlogPostMetadata {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  readingTime: string
  published: boolean
  icon?: string
  coverImage?: string
}

export interface BlogPost extends BlogPostMetadata {
  content: JSX.Element
  excerpt: string
}

// Utility functions
export function sortPostsByDate(posts: BlogPostMetadata[]): BlogPostMetadata[] {
  return [...posts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getUniqueTags(posts: BlogPostMetadata[]): string[] {
  const tags = new Set<string>()
  posts.forEach(post => post.tags.forEach(tag => tags.add(tag)))
  return Array.from(tags).sort()
}

export function filterPostsByTag(posts: BlogPostMetadata[], tag: string): BlogPostMetadata[] {
  return posts.filter(post =>
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  )
}

export function filterPublishedPosts(posts: BlogPostMetadata[]): BlogPostMetadata[] {
  const now = new Date()
  return posts.filter(p => p.published && new Date(p.date) <= now)
}
