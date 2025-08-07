import './globals.css'
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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--color-background)]">
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}