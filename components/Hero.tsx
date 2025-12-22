import Image from 'next/image'
import Link from 'next/link'
import { techStack } from '@/lib/data'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="font-mono text-lg text-text-secondary mb-4">
              // software developer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I&apos;m <span className="gradient-text">Tyler Gray</span>
            </h1>
            <p className="text-lg text-text-secondary mb-8 max-w-lg mx-auto lg:mx-0">
              I build fun apps, developer tools, and constantly explore new tech.
              Currently crafting solutions in the .NET and TypeScript ecosystems.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-bg-card border border-border px-4 py-2 rounded-lg font-mono text-sm text-accent-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                href="#projects"
                className="gradient-bg text-bg-primary px-8 py-3 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-cyan/30 transition-all inline-flex items-center gap-2"
              >
                View Projects →
              </Link>
              <Link
                href="https://github.com/tylergraydev"
                target="_blank"
                className="border-2 border-border px-8 py-3 rounded-lg font-semibold hover:border-accent-cyan hover:text-accent-cyan transition-all"
              >
                GitHub
              </Link>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center items-center order-first lg:order-last">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-cyan/15 rounded-full blur-3xl" />
              
              {/* Animated border frame */}
              <div className="absolute -inset-3 border-[3px] border-transparent rounded-2xl animate-rotate-border" 
                style={{
                  background: 'linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, var(--gradient-1) border-box'
                }}
              />
              
              {/* Avatar image */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/avatar.png"
                  alt="Tyler Gray Avatar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute top-[20%] -right-12 bg-bg-card border border-border px-4 py-2 rounded-lg font-mono text-sm text-text-secondary animate-float hidden lg:block">
                7+ years
              </div>
              <div className="absolute bottom-[20%] -left-8 bg-bg-card border border-border px-4 py-2 rounded-lg font-mono text-sm text-text-secondary animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
                {'{ code }'}
              </div>
              <div className="absolute top-[60%] -right-16 bg-bg-card border border-border px-4 py-2 rounded-lg font-mono text-sm text-text-secondary animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
                🚀 shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
