'use client'

import { useState, useMemo } from 'react'
import { BlogCard } from './BlogCard'
import { SearchBar } from './SearchBar'
import { TagFilter } from './TagFilter'
import type { BlogPostMetadata } from '@/lib/blog-data'

interface Props {
  initialPosts: BlogPostMetadata[]
  allTags: string[]
  showSearch?: boolean
}

export function BlogList({ initialPosts, allTags, showSearch = true }: Props) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const filteredPosts = useMemo(() => {
    let posts = initialPosts

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      posts = posts.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag))
      )
    }

    return posts
  }, [initialPosts, searchQuery, selectedTags])

  return (
    <>
      {showSearch && (
        <div className="mb-12 space-y-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <TagFilter
            allTags={allTags}
            selectedTags={selectedTags}
            onTagToggle={(tag) => {
              setSelectedTags(prev =>
                prev.includes(tag)
                  ? prev.filter(t => t !== tag)
                  : [...prev, tag]
              )
            }}
          />
        </div>
      )}

      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-text-muted text-lg">No posts found</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {filteredPosts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </>
  )
}
