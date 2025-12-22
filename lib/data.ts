export interface Project {
  title: string
  description: string
  icon: string
  stars?: number
  tech: string[]
  links: {
    github: string
    npm?: string
    demo?: string
  }
}

export const projects: Project[] = [
  {
    title: 'Claude Code Tool Manager',
    description:
      'A desktop GUI app for managing MCP servers, Skills, and Sub-Agents for Claude Code. No more manually editing scattered JSON files — see everything in one place, enable/disable tools per project, and import configs by pasting JSON or CLI commands.',
    icon: '🔧',
    tech: ['Svelte 5', 'Tauri 2', 'Rust', 'SQLite', 'TypeScript'],
    links: {
      github: 'https://github.com/tylergraydev/claude-code-tool-manager',
    },
  },
  {
    title: 'claude-limitline',
    description:
      "A powerline-style statusline for Claude Code showing real-time usage limits, git info, and model details. Features multiple themes (dark, nord, gruvbox, tokyo-night, rose-pine), 5-hour block tracking, and 7-day rolling usage visualization.",
    icon: '📊',
    stars: 5,
    tech: ['TypeScript', 'Node.js', 'Vitest', 'npm package'],
    links: {
      github: 'https://github.com/tylergraydev/claude-limitline',
      npm: 'https://www.npmjs.com/package/claude-limitline',
    },
  },
]

export interface Hobby {
  icon: string
  title: string
  description: string
}

export const hobbies: Hobby[] = [
  { icon: '🧱', title: 'Legos', description: 'Building brick by brick' },
  { icon: '🎮', title: 'Gaming', description: 'PC & console adventures' },
  { icon: '🖨️', title: '3D Printing', description: 'Making ideas tangible' },
  { icon: '📚', title: 'Comics', description: 'Stories & art combined' },
  { icon: '🖥️', title: 'Homelab', description: 'Unraid & self-hosting' },
]

export const techStack = ['.NET', 'TypeScript', 'Svelte', 'Rust', 'Tauri']

export const skills = {
  languages: ['C#', 'TypeScript', 'JavaScript', 'Rust', 'SQL'],
  frontend: ['Svelte', 'React', 'Tailwind', 'HTML/CSS'],
  backend: ['.NET', 'ASP.NET Core', 'Node.js', 'REST APIs'],
  tools: ['Git', 'Docker', 'Tauri', 'Unraid'],
}

export const socialLinks = {
  github: 'https://github.com/tylergraydev',
  email: 'mailto:hello@tylergray.dev',
  linkedin: 'https://linkedin.com/in/tylergraydev',
}
