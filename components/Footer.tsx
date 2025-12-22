export function Footer() {
  return (
    <footer className="py-8 px-8 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} Tyler Gray. All rights reserved.
        </p>
        <p className="font-mono text-xs text-accent-cyan mt-2">
          Built with ☕ and curiosity
        </p>
      </div>
    </footer>
  )
}
