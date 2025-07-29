import './globals.css'
import CustomSessionProvider from '@/lib/SessionProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomSessionProvider>{children}</CustomSessionProvider>
      </body>
    </html>
  )
}