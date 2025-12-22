'use client'

import { useState, useRef, useEffect } from 'react'
import { Palette } from 'lucide-react'
import { themes } from '@/lib/themes'
import { useTheme } from './ThemeProvider'

export function ThemePicker() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="fixed bottom-8 right-8 z-50" ref={panelRef}>
      {/* Panel */}
      <div
        className={`absolute bottom-16 right-0 bg-bg-card border border-border rounded-2xl p-4 min-w-[200px] shadow-2xl transition-all duration-300 ${
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-2'
        }`}
      >
        <h4 className="text-xs uppercase tracking-wider text-text-muted font-mono mb-3">
          Choose Theme
        </h4>
        <div className="flex flex-col gap-2">
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => setTheme(t.name)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all border ${
                theme === t.name
                  ? 'bg-bg-elevated border-accent-cyan'
                  : 'border-transparent hover:bg-bg-elevated'
              }`}
            >
              <div className="w-6 h-6 rounded-md flex overflow-hidden">
                <span
                  className="flex-1"
                  style={{ backgroundColor: t.colors.primary }}
                />
                <span
                  className="flex-1"
                  style={{ backgroundColor: t.colors.secondary }}
                />
              </div>
              <span className="text-sm text-text-primary">
                {t.label} {t.emoji}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-bg-card border-2 border-border text-text-primary flex items-center justify-center text-xl transition-all hover:border-accent-cyan hover:scale-110 shadow-lg"
        aria-label="Toggle theme picker"
      >
        <Palette size={20} />
      </button>
    </div>
  )
}
