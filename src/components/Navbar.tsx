'use client'
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
	return (
		<div className="fixed flex w-full justify-center">
			<nav className="navbar flex rounded-full items-center justify-between max-w-fit top-4 z-50">
				<div className="navbar-start justify-center items-center m-0.5 p-4">
					<Link href="#">
						<Image src="/home-filled.svg" alt="Logo"width={30} height={30} className="object-contain" />					
					</Link>
				</div>
				<div className="justify-center items-center">
					<ul className="flex space-x-1">
						<li className="p-2 rounded-full">
							<Link href="#">
								<Image src="/about-filled.svg" alt="About" width={30} height={30} className="object-contain" />
							</Link>
						</li>
						<li className="p-2 rounded-full">
							<Link href="#">
								<Image src="/pricing-filled.svg" alt="Pricing" width={30} height={30} className="object-contain" />
							</Link>
						</li>
						<li className="p-2 rounded-full">
							<Link href="#">
								<Image src="/contact-filled.svg" alt="Contact" width={30} height={30} className="object-contain" />
							</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-end justify-center items-center">
					<button className="text-white rounded-full m-1 px-8 py-4">
					Masuk
					</button>
				</div>
			</nav>
		</div>
	)
}