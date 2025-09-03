'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			{/* Button Menu Mobile */}
			<button onClick={() => setIsOpen(!isOpen)} className="fixed rounded-xl shadow-xl/20 bottom-0 left-0 z-50 p-2 m-6 bg-[var(--color-background)] sm:hidden">
				{isOpen ? (
					<Image src="/close.svg" alt="Close Menu" width={30} height={30} className=" object-contain hover:scale-125" />
				) : (
					<Image src="/menu.svg" alt="Menu" width={30} height={30} className="object-contain hover:scale-125" />
				)}
			</button>

			{/* Konten Sidebar */}
			<aside className={`flex flex-col fixed top-0 left-0 h-screen z-40 items-left transition-all duration-[1000] ${isOpen ? 'max-w-80' : 'max-w-0 overflow-hidden'}`} onClick={() => setIsOpen(false)}>
				<div className="w-full m-4">MyOney</div>
				<div className="flex flex-col px-2 pt-1 pb-2 w-full items-left sm:hidden">
					<ul>
						<li>
							<Link href="/dashboard" className="flex flex-row items-center px-4 py-2">
								<Image src="/dashboard.svg" alt="Dashboard" width={20} height={20} className="mr-4" />
								Dashboard
							</Link>
						</li>
						<li>
							<Link href="/transaksi" className="flex flex-row items-center px-4 py-2">
								<Image src="/dashboard.svg" alt="Dashboard" width={20} height={20} className="mr-4" />
								Transaksi
							</Link>
						</li>
						<li>
							<Link href="/budget" className="flex flex-row items-center px-4 py-2">
								<Image src="/wallet.svg" alt="Budget" width={20} height={20} className="mr-4" />
								Budget
							</Link>
						</li>
						<li>
							<Link href="/leaderboard" className="flex flex-row items-center px-4 py-2">
								<Image src="/dashboard.svg" alt="Dashboard" width={20} height={20} className="mr-4" />
								Leaderboard
							</Link>
						</li>
						<li>
							<Link href="/pengaturan" className="flex flex-row items-center px-4 py-2">
								<Image src="/settings.svg" alt="Dashboard" width={20} height={20} className="mr-4" />
								Pengaturan
							</Link>
						</li>
					</ul>
				</div>
				<div className="w-full m-4">Akun</div>
				<button>Log Out</button>
			</aside>
		</div>
	)
}