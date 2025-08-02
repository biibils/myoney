import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/nextauth'
import { redirect } from 'next/navigation'


export default async function Dashboard() {
	const session = await getServerSession(authOptions)

	if (!session) redirect('/')

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>      
    </main>
  )
}