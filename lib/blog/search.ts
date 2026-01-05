import Fuse from 'fuse.js'
import type { BlogPostMetadata } from '@/lib/blog-data'

export function createSearchIndex(posts: BlogPostMetadata[]) {
  return new Fuse(posts, {
    keys: [
      { name: 'title', weight: 2 },
      { name: 'description', weight: 1.5 },
      { name: 'tags', weight: 1 },
      { name: 'author', weight: 0.5 },
    ],
    threshold: 0.3,
    includeScore: true,
  })
}

export function searchPosts(
  posts: BlogPostMetadata[],
  query: string
): BlogPostMetadata[] {
  if (!query) return posts

  const fuse = createSearchIndex(posts)
  const results = fuse.search(query)
  return results.map(result => result.item)
}
