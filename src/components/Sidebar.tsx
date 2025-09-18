'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false)

	const menu = [
		{ href: '/dashboard', label: 'Dashboard', icon: '/dashboard-l.svg' },
		{ href: '/transaksi', label: 'Transaksi', icon: '/transaction-l.svg' },
		{ href: '/budget', label: 'Budget', icon: '/wallet-l.svg' },
		{ href: '/leaderboard', label: 'Leaderboard', icon: '/leaderboard-l.svg' },
		{ href: '/pengaturan', label: 'Pengaturan', icon: '/settings-l.svg' },
	]

	return (
		<div>
			{/* Button Menu Mobile */}
			<button onClick={() => setIsOpen(!isOpen)} className="fixed rounded-xl shadow-xl/20 bottom-0 right-0 z-50 p-2 m-6 bg-[var(--color-background)] sm:hidden">
				{isOpen ? (
					<div>Menu</div>
				) : (
					<div>Close</div>
				)}
			</button>

			{/* Konten Sidebar */}
			<aside className={`flex flex-col fixed top-0 left-0 p-2 h-screen w-fit z-40 items-left shadow-lg transition-transform duration-[1000] ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:bg-[var(--color-background)] sm:shadow-none`}>
				<nav className="flex flex-col p-4 w-full items-left sm:px-2 sm:py-1 sm:bg-[var(--color-background)] sm:h-full sm:rounded-[14px] sm:shadow-[0_0_15px_rgba(0,12,7,0.2)]">
					<div className="w-full pl-2 mb-4 sm:hidden">MYO</div>
					<ul className="space-y-4">
						{menu.map((item) => (
							<li key={item.href} className="menu-mobile relative group flex sm:items-center sm:justify-center">
								<Link href={item.href} className="flex flex-row items-center w-full pl-2 pr-8 py-2 sm:p-2 hover:bg-[var(--color-brand)]/20 rounded-xl">
									<Image src={item.icon} alt={item.label} width={30} height={30} className="mr-4 sm:m-0" />
									
									{/* Teks yg muncul di Expand Sidebar */}
									<span className="font-semibold sm:hidden">{item.label}</span>
								</Link>

								{/* Tolltip Teks untuk Desktop */}
								<span className="absolute left-14 hidden sm:group-hover:flex bg-[var(--color-brand)] text-[var(--color-text-dark)] text-sm px-3 py-1 rounded-full whitespace-nowrap shadow-xl">{item.label}</span>
							</li>
						))}
					</ul>
				</nav>
			</aside>
		</div>
	)
}