'use client'

import { supabase } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SetupProfilePage() {
	const router = useRouter();
	const [loading, setLoading] = useState(true)
	const [fullname, setFullname] = useState('')
	const [username, setUsername] = useState('')
	const [bio, setBio] = useState('')

	// Cek apakah profil udah ada atau belum
	useEffect(() => {
		const getProfile = async () => {
			const {
				data: { user },
				error: useError,
			} = await supabase.auth.getUser()

			if (useError || !user) {
				router.push('/auth/login')
				return
			}

			const { data } = await supabase
				.from('profiles')
				.select('*')
				.eq('id', user.id)
				.single()

			if (data) {
				router.push('/dashboard')
			}

			setLoading(false)
		};

		getProfile();
	}, [router]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)

		const {
			data: { user },
		} = await supabase.auth.getUser()

		if (!user) {
			router.push('/auth/login')
			return
		}

		const { error } = await supabase.from('profiles').insert([
			{
				id: user.id,
				full_name: fullname,
				username,
				bio,
				email: user.email,
			},
		])

		if (error) {
			alert('Gagal menyimpan profil: ' + error.message)
		} else {
			router.push('/dashboard')
		}

		setLoading(false)
	};

	if (loading) return <p className='p-4'>Loading...</p>

	return (
		<div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow'>
			<h1 className='text-xl mb-4'>Setup Profil</h1>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<input 
					type='text'
					placeholder='Nama Lengkap' 
					value={fullname}
					onChange={(e) => setFullname(e.target.value)}
					className='w-full p-2 border rounded'
					required
				/>
				<input 
					type='text'
					placeholder='Username' 
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className='w-full p-2 border rounded'
					required
				/>
				<textarea 
					placeholder='Bio'
					value={bio}
					onChange={(e) => setBio(e.target.value)}
					className='w-full p-2 border rounded'
				/>
				<button
					type='submit'
					disabled={loading}
					className='w-full text-white py-2 rounded-full'
				>
					{loading ? 'Saving...' : 'Save & Continue'}
				</button>
			</form>
		</div>
	);
}