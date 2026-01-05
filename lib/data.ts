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
  {
    title: 'Lyrics Video Generator',
    description:
      'Create synchronized lyrics videos from audio files. Uses WhisperX AI for ~50ms word-level accuracy, features a visual timeline editor for manual adjustments, and supports 99+ languages. Export as MP4 at custom resolutions.',
    icon: '🎵',
    tech: ['Python', 'React', 'Flask', 'WhisperX', 'MoviePy', 'Tailwind'],
    links: {
      github: 'https://github.com/tylergraydev/lyrics-video-generator',
    },
  },
  {
    title: 'TGD Soundboard',
    description:
      'A desktop soundboard for streamers and content creators. Play audio clips with global hotkeys, organize sounds by category, and integrate directly with Streamlabs/OBS via Application Audio Capture — no virtual cables needed.',
    icon: '🔊',
    tech: ['C#', '.NET 8', 'WPF', 'NAudio', 'SQLite'],
    links: {
      github: 'https://github.com/tylergraydev/tgd-sound-board',
    },
  },
  {
    title: 'EZ Key Remapper',
    description:
      'Remap keyboard inputs from specific devices like macro pads without affecting your main keyboard. Features device auto-detection, a GUI for managing mappings, and runs silently in the system tray.',
    icon: '⌨️',
    tech: ['Python', 'PyQt5', 'Interception'],
    links: {
      github: 'https://github.com/tylergraydev/ez-keyremapper',
    },
  },
  {
    title: 'Charleston Coastal Closet',
    description:
      'A business website for an online clothing reseller. Features a mobile-friendly storefront with Stripe payment processing to showcase inventory and handle transactions.',
    icon: '👗',
    tech: ['Next.js', 'React', 'Tailwind', 'Stripe', 'Postgres', 'Vercel'],
    links: {
      github: 'https://github.com/tylergraydev/charleston-nextjs',
      demo: 'https://charlestoncoastalcloset.com',
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

export const techStack = ['.NET', 'TypeScript', 'Angular', 'React', 'Svelete', 'Tailwind', 'Docker', 'Tauri', 'Rust']

export const skills = {
  languages: ['C#', 'TypeScript', 'JavaScript', 'Python', 'Rust', 'SQL'],
  frontend: ['Angular', 'Svelte', 'React', 'Ionic', 'Tailwind', 'HTML/CSS'],
  backend: ['.NET', 'ASP.NET Core', 'Node.js', 'REST APIs', 'OAuth', 'OIDC'],
  tools: ['Tauri', 'Unraid'],
  devops: ['Azure', 'DevOps', 'GitHub Actions', 'Docker', 'Git', 'CI/CD'],
  ai: ['Claude', 'Copilot', 'Ollama', 'MCP', 'RAG', 'Embeddings', 'Vector DBs'],
}

export const socialLinks = {
  github: 'https://github.com/tylergraydev',
  email: 'mailto:iam@tylergray.dev',
  linkedin: 'https://www.linkedin.com/in/tyler-gray-043b8116/',
  kofi: 'https://ko-fi.com/tylergraydev',
}
