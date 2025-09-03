import '../globals.css'
import { createClient } from '@/utils/supabase/server'
import { orbitron, urbanist, kodeMono } from '@/lib/fonts'
import Sidebar from '@/components/Sidebar'
import { redirect } from 'next/navigation'

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

	if (!user) {
		redirect('/login')
	}

  return (
		<div className={`${orbitron.variable} ${urbanist.variable} ${kodeMono.variable}`} suppressHydrationWarning>
			<main className="relative flex flex-col p-2 sm:flex-row bg-[var(--color-background)]">
				{children}
				<Sidebar />
			</main>
		</div>
	)
}