'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
	const menunav = [
		{ href: '#a', label: 'Tentang', icon: '/about-l.svg' },
		{ href: '#b', label: 'Plans', icon: '/pricing-l.svg' },
		{ href: '#c', label: 'Kontak', icon: '/contact-l.svg' },
	]

	return (
		<div className="sticky top-0 flex w-full justify-center">
			<nav className="landingnav navbar flex rounded-full items-center justify-between max-w-fit z-50">
				<div className="navbar-start justify-center items-center p-4">
					<Link href="/">
						<Image src="/home-l.svg" alt="Logo" width={30} height={30} className="object-contain" />
					</Link>
				</div>
				<div className="justify-center items-center">
					<ul className="flex">
						{menunav.map((item) => (
							<li key={item.href} className="rounded-full group items-center justify-center">
								<Link href={item.href} className="flex flex-col items-center justify-center w-full p-2 hover:bg-[var(--color-background)] rounded-full">
									<Image src={item.icon} alt={item.label} width={30} height={30} />

									<span className="absolute top-14 hidden group-hover:flex bg-[var(--color-background-dark)] text-[var(--color-text-dark)] text-sm px-2 py-1 rounded whitespace-nowrap shadow-xl">{item.label}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="navbar-end justify-center items-center">
					<Link href="/login">
						<button 
						className="px-6 py-3 m-1.5 text-white text-lg rounded-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)]">
						Log In
						</button>
					</Link>
				</div>
			</nav>
		</div>
	)
}