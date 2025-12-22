import Link from 'next/link'
import { ExternalLink, Star } from 'lucide-react'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open Source <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Tools I&apos;ve built to make developers&apos; lives easier
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-accent-cyan hover:shadow-2xl transition-all group"
            >
              {/* Card Header */}
              <div className="p-6 bg-bg-elevated border-b border-border flex items-center gap-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-2xl">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                {project.stars && (
                  <div className="flex items-center gap-1 text-accent-orange text-sm">
                    <Star size={16} fill="currentColor" />
                    {project.stars}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-bg-primary px-3 py-1.5 rounded-md font-mono text-xs text-accent-purple"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Link
                    href={project.links.github}
                    target="_blank"
                    className="text-accent-cyan font-medium flex items-center gap-1 hover:text-accent-orange transition-colors"
                  >
                    View on GitHub
                    <ExternalLink size={16} />
                  </Link>
                  {project.links.npm && (
                    <Link
                      href={project.links.npm}
                      target="_blank"
                      className="text-accent-cyan font-medium flex items-center gap-1 hover:text-accent-orange transition-colors"
                    >
                      npm
                      <ExternalLink size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
