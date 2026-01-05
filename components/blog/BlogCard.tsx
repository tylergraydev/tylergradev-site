import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import type { BlogPostMetadata } from '@/lib/blog-data'

interface Props {
  post: BlogPostMetadata
}

export function BlogCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-accent-cyan hover:shadow-2xl transition-all group"
    >
      {/* Card Header */}
      <div className="p-6 bg-bg-elevated border-b border-border flex items-center gap-4">
        {post.icon && (
          <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-2xl">
            {post.icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold group-hover:text-accent-cyan transition-colors">
            {post.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">
          {post.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-text-muted text-sm mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            {post.readingTime}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="bg-bg-primary px-3 py-1.5 rounded-md font-mono text-xs text-accent-purple"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
