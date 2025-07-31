import './globals.css'
import CustomSessionProvider from '@/lib/SessionProvider'
import Navbar from "@/components/Navbar"

export const metadata = {
	title: "Your Wealth Partner",
	description: "Track your wealth by using this app",
	keywords: "financial tracker, financial planner, dashboard, islamic finance",
	author: "Billy Sutawijaya",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</head>
      <body className="bg-[var(--color-background)]">
					<CustomSessionProvider><Navbar /></CustomSessionProvider>
				<main>
					<CustomSessionProvider>{children}</CustomSessionProvider>
				</main>
      </body>
    </html>
  )
}