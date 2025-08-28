import '../globals.css'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { orbitron, urbanist, kodeMono } from '@/lib/fonts'

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const {
		data: { user },
	} = await supabase.auth.getUser()

  return (
		<html lang="id" className={`${orbitron.variable} ${urbanist.variable} ${kodeMono.variable}`} suppressHydrationWarning>
			<body>
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}