export type ThemeName = 'default' | 'vermeer' | 'nord' | 'rose' | 'tokyo' | 'light'

export interface Theme {
  name: ThemeName
  label: string
  emoji?: string
  colors: {
    primary: string
    secondary: string
  }
}

export const themes: Theme[] = [
  {
    name: 'default',
    label: 'Default',
    colors: { primary: '#4fd1c5', secondary: '#9f7aea' },
  },
  {
    name: 'vermeer',
    label: 'Vermeer',
    emoji: '🎨',
    colors: { primary: '#a8e063', secondary: '#f0e130' },
  },
  {
    name: 'nord',
    label: 'Nord',
    colors: { primary: '#88c0d0', secondary: '#81a1c1' },
  },
  {
    name: 'rose',
    label: 'Rosé Pine',
    colors: { primary: '#ebbcba', secondary: '#c4a7e7' },
  },
  {
    name: 'tokyo',
    label: 'Tokyo Night',
    colors: { primary: '#7dcfff', secondary: '#bb9af7' },
  },
  {
    name: 'light',
    label: 'Light',
    colors: { primary: '#0891b2', secondary: '#7c3aed' },
  },
]
