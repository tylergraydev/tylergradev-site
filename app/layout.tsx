import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://tylergradev.com'),
  title: 'Tyler Gray | Software Developer',
  description:
    'Software developer with 7+ years of experience building fun apps and developer tools in the .NET and TypeScript ecosystems.',
  keywords: ['software developer', 'TypeScript', '.NET', 'React', 'Svelte', 'developer tools'],
  authors: [{ name: 'Tyler Gray' }],
  openGraph: {
    title: 'Tyler Gray | Software Developer',
    description: 'Building fun apps and developer tools',
    type: 'website',
    url: 'https://tylergradev.com',
  },
  twitter: {
    card: 'summary',
    title: 'Tyler Gray | Software Developer',
    description: 'Building fun apps and developer tools',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tyler Gray',
  url: 'https://tylergradev.com',
  jobTitle: 'Software Developer',
  sameAs: [
    'https://github.com/tylergraydev',
    'https://www.linkedin.com/in/tyler-gray-043b8116/',
    'https://ko-fi.com/tylergraydev',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <div className="grid-bg" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
