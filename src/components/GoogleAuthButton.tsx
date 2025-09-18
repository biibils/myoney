import { supabase } from '@/utils/supabase/client'
import React from 'react'
import Image from 'next/image'


export const GoogleAuthButton: React.FC = () => {
  const handleGoogleLogin = async () => {
		await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
				queryParams: {
					access_type: 'offline',
					prompt: 'consent',
				},
      },
    })
  }

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center justify-center gap-3 w-full py-2 border border-gray-300 rounded-full bg-white hover:bg-gray-100 transition"
    >
      <Image
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google logo"
				width={20} height={20}
      />
      <span className="text-gray-700 font-medium">Lanjut dengan Google</span>
    </button>
  );
};