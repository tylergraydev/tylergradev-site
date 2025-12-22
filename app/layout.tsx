import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Tyler Gray | Software Developer',
  description:
    'Software developer with 7+ years of experience building fun apps and developer tools in the .NET and TypeScript ecosystems.',
  keywords: ['software developer', 'TypeScript', '.NET', 'React', 'Svelte', 'developer tools'],
  authors: [{ name: 'Tyler Gray' }],
  openGraph: {
    title: 'Tyler Gray | Software Developer',
    description: 'Building fun apps and developer tools',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <div className="grid-bg" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
