import { createClient } from '@supabase/supabase-js';
import React from 'react';
import Image from 'next/image';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

interface GoogleAuthButtonProps {
	mode?: 'login' | 'signup';
  redirectPath?: string; // opsional: path tujuan setelah login
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ mode = 'login', redirectPath = '/dashboard' }) => {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}${redirectPath}`
      }
    });

    if (error) console.error(`Google ${mode} error:`, error.message);
  };

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
      <span className="text-gray-700 font-medium">Continue with Google</span>
    </button>
  );
};