'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false)

	const menu = [
		{ href: '/dashboard', label: 'Dashboard', icon: '/dashboard.svg' },
		{ href: '/transaksi', label: 'Transaksi', icon: '/transaction.svg' },
		{ href: '/budget', label: 'Budget', icon: '/wallet.svg' },
		{ href: '/leaderboard', label: 'Leaderboard', icon: '/leaderboard.svg' },
		{ href: '/pengaturan', label: 'Pengaturan', icon: '/settings.svg' },
	]

	return (
		<div>
			{/* Button Menu Mobile */}
			<button onClick={() => setIsOpen(!isOpen)} className="fixed rounded-xl shadow-xl/20 bottom-0 right-0 z-50 p-2 m-6 bg-[var(--color-background)] sm:hidden">
				{isOpen ? (
					<Image src="/close.svg" alt="Close Menu" width={30} height={30} className=" object-contain hover:scale-125" />
				) : (
					<Image src="/menu.svg" alt="Menu" width={30} height={30} className="object-contain hover:scale-125" />
				)}
			</button>

			{/* Konten Sidebar */}
			<aside className={`flex flex-col fixed top-0 left-0 p-2 h-screen w-fit z-40 items-left shadow-lg transition-transform duration-[1000] ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>

				{/* Menu Mobile */}
				<nav className="flex flex-col p-4 w-full items-left">
					<div className="w-full sm:hidden">MYO</div>
					<ul>
						{menu.map((item) => (
							<li key={item.href} className="menu-mobile relative group flexn items-center justify-center">
								<Link href={item.href} className="flex flex-row items-center pr-8 py-2 transition-colors duration-300 active:bg-[var(--color-brand-click)] active:text-[var(--color-text-dark)] sm:p-2 sm:hover:bg-gray-400 sm:rounded-lg sm:hover:shadow-xl">
									<Image src={item.icon} alt={item.label} width={30} height={30} className="mr-4 sm:m-0" />
									
									{/* Teks yg muncul di Expand Sidebar */}
									<span className="font-semibold sm:hidden">{item.label}</span>
								</Link>

								{/* Tolltip Teks untuk Desktop */}
								<span className="absolute left-14 hidden sm:group-hover:flex bg-[var(--color-background-dark)] text-[var(--color-text-dark)] text-sm px-2 py-1 rounded whitespace-nowrap shadow-xl">{item.label}</span>
							</li>
						))}
					</ul>
				</nav>

				{/* Menu Desktop */}
			</aside>
		</div>
	)
}