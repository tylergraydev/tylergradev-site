# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Build static export to out/ folder
npm run lint     # Run ESLint
npm start        # Start production server (requires build first)
```

## Architecture

This is a Next.js 14 personal portfolio site using the App Router with static export (`output: 'export'` in next.config.js).

### Theming System

The site supports 6 color themes via CSS custom properties:
- Theme definitions in `lib/themes.ts` (ThemeName type, theme metadata)
- CSS variables in `app/globals.css` using `[data-theme="..."]` selectors
- Theme state managed by `ThemeProvider` (React Context, persists to localStorage)
- Tailwind maps to CSS variables in `tailwind.config.ts` (e.g., `bg-bg-primary` → `var(--bg-primary)`)

To add a new theme: add to `lib/themes.ts`, add CSS variables block in `globals.css`, update `ThemePicker.tsx` swatch.

### Data Layer

All portfolio content lives in `lib/data.ts`:
- `projects` array with Project interface
- `hobbies`, `techStack`, `skills`, `socialLinks`

### Path Aliases

Uses `@/*` alias mapping to project root (configured in tsconfig.json).
