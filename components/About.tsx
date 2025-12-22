import { skills } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
          {/* About Text */}
          <div>
            {/* Experience Counter */}
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-6xl md:text-7xl font-bold gradient-text">7+</span>
              <span className="text-text-secondary text-lg">
                years building software
              </span>
            </div>

            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                I&apos;m a software developer who loves building tools that make other
                developers&apos; lives easier. My day-to-day involves working with .NET
                and TypeScript, but I&apos;m always exploring new technologies —
                recently that&apos;s been Svelte, Tauri, and Rust.
              </p>
              <p>
                I believe in shipping useful software, learning in public, and
                having fun along the way. When I&apos;m not coding, you&apos;ll find me
                building Lego sets, tinkering with my homelab, or 3D printing
                something that probably should have been bought at a store.
              </p>
              <p>
                I&apos;m particularly interested in developer tooling, AI-assisted
                development, and building desktop apps with modern web
                technologies.
              </p>
            </div>
          </div>

          {/* Skills Card */}
          <div className="bg-bg-card border border-border rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-accent-orange mb-6">
              Tech Stack
            </h4>

            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h5 className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">
                    {category}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-bg-primary px-3 py-1.5 rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
