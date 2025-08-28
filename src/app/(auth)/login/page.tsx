'use client'

import { login } from './../actions'
import Link from 'next/link'
import Loader from '@/components/Loader'
import { GoogleAuthButton } from '@/components/GoogleAuthButton'
import { useState, useEffect } from 'react'

export default function LoginPage() {
	const [status, setStatus] = useState('loading')

	useEffect(() => {
		setTimeout(() => {
			setStatus('loaded')
		}, 2000)
	}, [])

	if (status === 'loading') {
		return (
				<Loader />
		)
	}

  return (
		<div className="flex flex-col min-h-screen px-16 py-4 items-center justify-center bg-center" style={{ backgroundImage: "url('/background.webp')"}}>
			<div className="card w-sm items-center justify-center p-4 rounded-xl">
				<h3 className="w-full text-center text-lg">ًWelkam Back Orang Kaya Berkah!</h3>
				<form className="flex flex-col w-full space-y-2 p-4">				
      		<label htmlFor="email" className="w-full pl-2 mb-1 text-sm">Email</label>
    			<input 
						id="email"
						name="email"
						type="email" 
						placeholder="Masukkan email kamu" 
						className="w-full p-2 mb-6 rounded-full text-xs bg-gray-200 placeholder-gray-400 shadow-inner focus:ring-1 focus:ring-[var(--color-brand)] outline-none" 
						required />
      	
					<label htmlFor="password" className="w-full pl-2 mb-1 text-sm">Password</label>
      		<input 
						id="password" 
						name="password" 
						type="password" 
						placeholder="Type your password here"
						className="w-full p-2 rounded-full text-xs bg-gray-200 placeholder-gray-400 shadow-inner focus:ring-1 focus:ring-[var(--color-brand)] outline-none"
						required />
					<Link href="/reset-password" className="w-full pr-2 mb-4 text-end text-xs text-[var(--color-brand)]">Lupa password?</Link>
      		<button formAction={login} className="w-full rounded-full px-4 py-2 text-white bg-[var(--color-brand)] hover:bg-[var(--color-brand-darkest)]">Log In</button>
				</form>
				<p className="w-full px-6 mb-4 text-start text-xs">Belum punya akun? <Link href="/signup" className="text-[var(--color-brand)]">Daftar dulu disini!</Link></p>
				<div className="flex flex-col w-full px-4 py-2">
					<GoogleAuthButton />
				</div>
			</div>	
		</div>
  )
}