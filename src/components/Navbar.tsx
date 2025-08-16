'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
	return (
		<div className="sticky top-0 flex w-full justify-center">
			<nav className="navbar flex rounded-full items-center justify-between max-w-fit z-50">
				<div className="navbar-start justify-center items-center p-4">
					<Link href="#">
						<Image src="/home-filled.svg" alt="Logo" width={30} height={30} className="object-contain" />					
					</Link>
				</div>
				<div className="justify-center items-center">
					<ul className="flex mx-1 space-x-1">
						<li className="p-2 rounded-full">
							<Link href="#">
								<Image src="/about-filled.svg" alt="About" 
								width={30} height={30} 
								className="object-contain hover:scale-150" />
							</Link>
						</li>
						<li className="p-2 rounded-full">
							<Link href="#">
								<Image src="/pricing-filled.svg" alt="Pricing" 
								width={30} height={30} 
								className="object-contain hover:scale-150" />
							</Link>
						</li>
						<li className="p-2 rounded-full">
							<Link href="#">
								<Image src="/contact-filled.svg" alt="Contact" 
								width={30} height={30} 
								className="object-contain hover:scale-150" />
							</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-end justify-center items-center">
					<Link href="/login">
						<button 
						className="px-6 py-3 m-1.5 text-white text-lg rounded-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-darkest)]">
						Log In
						</button>
					</Link>
				</div>
			</nav>
		</div>
	)
}