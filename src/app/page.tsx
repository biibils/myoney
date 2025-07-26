'use client'

import { supabase } from '@/lib/supabase';

export default function LandingPage() {
	const handleLogin = async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
		})

		if (error) {
			console.error('Login error:', error.message)
		} else {

		}
	}
  return (
		<main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">💰 Myoney</h1>
        <p className="mb-6 text-gray-600">
          Tracker keuangan pribadi & bisnis kamu, terintegrasi dengan AI & sedekah.
        </p>
        <button
          onClick={handleLogin}
          className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Sign Up / Login with Google
        </button>
      </div>
    </main>
  );
}
