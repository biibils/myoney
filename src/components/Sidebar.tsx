'use client'
import Loader from '@/components/Loader'
import { useState, useEffect } from 'react'

export default function Sidebar() {
	const [status, setStatus] = useState('loading')

	useEffect(() => {
		setTimeout(() => {
			setStatus('loaded')
		}, 1500)
	}, [])

	if (status === 'loading') {
		return (
			<Loader />
		)
	}

	return (
		<div className="fixed bottom-4 left-4 z-50">
			<button className="rounded-md bg-blue-600 px-3 py-2 text-white shadow-lg hover:bg-blue-700 focus:ring focus:outline-none sm:hidden">☰</button>
			
			<div className="mt-2 hidden w-48 space-y-2 rounded-lg bg-blue-800 p-4 shadow-lg sm:fixed sm:top-2 sm:bottom-2 sm:left-4 sm:block sm:max-h-[calc(100vh-2rem)] sm:w-56 sm:rounded-xl sm:shadow-xl">
				<a href="#" className="block text-gray-200 hover:text-white">🏠 Home</a>
				<a href="#" className="block text-gray-200 hover:text-white">👤 Profile</a>
				<a href="#" className="block text-gray-200 hover:text-white">⚙️ Settings</a>
				<a href="#" className="block text-red-500 hover:text-white">🚪 Logout</a>
			</div>
		</div>
	)
}