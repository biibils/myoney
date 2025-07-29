'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function LandingPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return null // atau <LoadingSpinner />
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">💰 Myoney</h1>

        {!session ? (
          <button
            onClick={() => signIn('google')}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Login dengan Google
          </button>
        ) : (
          <>
            <p className="mb-4">Halo, {session.user?.name}</p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-6 py-3 rounded-lg"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </main>
  )
}