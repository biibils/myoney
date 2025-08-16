import './globals.css'
import { orbitron, urbanist, kodeMono } from '@/lib/fonts'
import { Metadata } from 'next'
import type { Viewport } from 'next'

export const viewport: Viewport = {
	width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Your Wealth Partner",
  description: "Track your wealth by using this app",
  keywords: "financial tracker, financial planner, dashboard, islamic finance",
  authors: [{ name: "Billy Sutawijaya" }],
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${urbanist.variable} ${kodeMono.variable}`} suppressHydrationWarning>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}