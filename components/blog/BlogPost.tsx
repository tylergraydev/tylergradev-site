import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { BlogPost as BlogPostType } from '@/lib/blog-data'

interface Props {
  post: BlogPostType
}

export function BlogPost({ post }: Props) {
  return (
    <article className="min-h-screen pt-24 bg-bg-primary">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-8 pb-12">
        <div className="flex items-center gap-4 mb-6">
          {post.icon && (
            <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center text-3xl">
              {post.icon}
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
          </div>
        </div>

        <p className="text-text-secondary text-xl mb-6">
          {post.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-6 text-text-muted">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            {post.readingTime}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="bg-bg-card px-3 py-1.5 rounded-md font-mono text-xs text-accent-purple hover:bg-accent-purple hover:text-bg-primary transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-8 pb-24">
        <div className="prose prose-invert prose-cyan max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  )
}
