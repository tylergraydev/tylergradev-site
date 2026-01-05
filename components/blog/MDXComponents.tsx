import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import Link from 'next/link'
import Image from 'next/image'

export const MDXComponents: MDXComponentsType = {
  h1: (props) => (
    <h1 className="text-4xl font-bold mb-6 mt-12 text-text-primary" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-3xl font-bold mb-4 mt-10 text-text-primary" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-2xl font-bold mb-3 mt-8 text-text-primary" {...props} />
  ),
  p: (props) => (
    <p className="text-text-secondary mb-4 leading-relaxed" {...props} />
  ),
  a: (props) => (
    <Link
      href={props.href || '#'}
      className="text-accent-cyan hover:text-accent-orange underline transition-colors"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-text-secondary" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-text-secondary" {...props} />
  ),
  code: (props) => (
    <code className="bg-bg-card px-1.5 py-0.5 rounded text-accent-cyan font-mono text-sm" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-bg-card border border-border rounded-xl p-4 overflow-x-auto mb-6" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-4 border-accent-cyan bg-bg-card pl-6 py-4 my-6 italic text-text-secondary" {...props} />
  ),
  img: (props) => (
    <Image
      src={props.src || ''}
      alt={props.alt || ''}
      width={800}
      height={400}
      className="rounded-xl my-8"
      unoptimized
    />
  ),
}
