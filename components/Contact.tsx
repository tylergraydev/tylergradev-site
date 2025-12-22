import Link from 'next/link'
import { Github, Mail, Linkedin, Coffee } from 'lucide-react'
import { socialLinks } from '@/lib/data'

const contactItems = [
  { href: socialLinks.github, icon: Github, label: 'GitHub' },
  { href: socialLinks.email, icon: Mail, label: 'Email' },
  { href: socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: socialLinks.kofi, icon: Coffee, label: 'Ko-fi' },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto mb-8">
          Feel free to reach out for collaborations or just a chat
        </p>

        {/* Contact Links */}
        <div className="flex justify-center gap-6">
          {contactItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              className="w-14 h-14 bg-bg-card border border-border rounded-2xl flex items-center justify-center text-text-secondary hover:bg-accent-cyan hover:text-bg-primary hover:-translate-y-1 hover:border-accent-cyan transition-all"
              aria-label={item.label}
            >
              <item.icon size={24} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
