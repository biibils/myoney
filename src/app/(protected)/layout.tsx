import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function ProtectedLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  try {
    const supabase = await createClient()
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      redirect('/')
    }

    return <>{children}</>
  } catch (error) {
    console.error('Auth error:', error)
    redirect('/')
  }
}