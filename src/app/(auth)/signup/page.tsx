'use client'

import { signup } from './../actions'
import Link from 'next/link'
import Loader from '@/components/Loader'
import { GoogleAuthButton } from '@/components/GoogleAuthButton'
import { useState, useEffect } from 'react'

export default function SignupPage() {
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
		<div className="flex flex-col min-h-screen px-16 py-4 items-center justify-center bg-center bg-contain" style={{ backgroundImage: "url('/background.webp')"}}>
			<div className="card w-sm items-center justify-center p-4 rounded-xl">
				<h3 className="w-full text-center text-lg">Mulai Perjalanan menuju Kekayaan yang Berkah sekarang!</h3>
				<form className="flex flex-col w-full space-y-2 p-4">
					<label htmlFor="username" className="w-full pl-2 mb-1 text-sm">Username</label>
					<input 
						id="username"
						name="username"
						type="text"
						placeholder="Masukkan username unik Kamu"
						className="w-full p-2 mb-4 rounded-full text-xs bg-gray-200 placeholder-gray-400 shadow-inner focus:ring-1 focus:ring-[var(--color-brand)] outline-none"
						required />

					<label htmlFor="email" className="w-full pl-2 mb-1 text-sm">Email</label>
					<input 
						id="email"
						name="email"
						type="email" 
						placeholder="Masukkan email kamu" 
						className="w-full p-2 mb-4 rounded-full text-xs bg-gray-200 placeholder-gray-400 shadow-inner focus:ring-1 focus:ring-[var(--color-brand)] outline-none" 
						required />
				
					<label htmlFor="password" className="w-full pl-2 mb-1 text-sm">Password</label>
					<input 
						id="password" 
						name="password" 
						type="password" 
						placeholder="Buatlah password yang unik"
						className="w-full p-2 mb-2 rounded-full text-xs bg-gray-200 placeholder-gray-400 shadow-inner focus:ring-1 focus:ring-[var(--color-brand)] outline-none"
						required />

					<label htmlFor="confirmPassword" className="w-full pl-2 mb-1 text-sm">Konfirmasi Password</label>
					<input
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						placeholder="Tulis ulang password kamu"
						className="w-full p-2 mb-4 rounded-full text-xs bg-gray-200 placeholder-gray-400 shadow-inner focus:ring-1 focus:ring-[var(--color-brand)] outline-none"
						required />
					<button formAction={signup} className="w-full rounded-full px-4 py-2 italic text-white bg-[var(--color-brand)]">Daftar</button>
				</form>
				<p className="w-full px-6 mb-4 text-start text-xs">Udah punya akun? <Link href="/login" className="text-[var(--color-brand)]">Masuk disini aja!</Link></p>
				<div className="flex flex-col w-full px-4 py-2">
					<GoogleAuthButton />
				</div>
			</div>	
		</div>
	)
}