"use client";

import Link from "next/link";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 px-8 py-6 bg-bg-primary/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="font-mono text-xl font-bold text-accent-cyan flex items-center gap-2"
        >
          <span className="animate-blink">&gt;</span>
          tylergray.dev
        </Link>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-text-secondary text-sm font-medium hover:text-accent-cyan transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
