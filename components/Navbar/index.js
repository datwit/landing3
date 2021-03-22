
import Image from 'next/image'
import Link from 'next/link'
import * as ROUTES from './routes'
import { useState } from 'react';



function Navbar() {
	const [active, setActive] = useState(false);
	

	const handleClick = () => {
		setActive(!active);
	};	

	return (	

		<nav className='flex items-center flex-wrap bg-white p-3'>
			<div className="container max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between h-16">
					
						<div className="flex-shrink-0">
							<Link href='/'>
								<a className='inline-flex items-center'>
									<Image src="/images/logo.png" alt="logo" width="160" height="50" />								
								</a>
							</Link>
						</div>
						<div className="hidden md:block items-center">
							<Link href={ROUTES.HOME.link}><a className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:text-secondary1">{ROUTES.HOME.name}</a></Link>
							<Link href={ROUTES.STUDYCASES.link}><a className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1  focus:text-secondary1">{ROUTES.STUDYCASES.name}</a></Link>
							<Link href={ROUTES.ABOUT.link}><a className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1  focus:text-secondary1">{ROUTES.ABOUT.name}</a></Link>
							<Link href={ROUTES.CONTACT.link}><a className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1  focus:text-secondary1">{ROUTES.CONTACT.name}</a></Link>
							<Link href={ROUTES.BLOG.link}><a className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1  focus:text-secondary1">{ROUTES.BLOG.name}</a></Link>
							
						</div>
						<div className="-mr-2 flex md:hidden">							
							<button className="mr-2 justify-end" onClick={setActive}>
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									className="w-9 h-9 text-primary"									
								>
									<path d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
						</div>
						
				</div>
				<aside id="cont-aside" className={`${active ? 'h-full' : 'hidden h-0'} md:invisible`}>							

						<div className='h-16 absolute top-0 w-full px-10 pt-4'>
							<div className='flex justify-between items-center'>
								<Image src="/images/logo-grande.png" alt="logo" width="180" height="64" />	
								<button className="mr-2 flex justify-end" onClick= {handleClick} >
									<svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>							
						</div>													 
						<div className="md:hidden flex flex-col relative  items-center">
							<Link href={ROUTES.HOME.link}><a className="nav-link ml-5 2xl:ml-8 pb-2 text-xl font-semibold text-white hover:text-secondary1 focus:text-secondary1">{ROUTES.HOME.name}</a></Link>
							<Link href={ROUTES.STUDYCASES.link}><a className="nav-link ml-5 2xl:ml-8 pb-2 pt-9 text-xl font-semibold text-white hover:text-secondary1  focus:text-secondary1">{ROUTES.STUDYCASES.name}</a></Link>
							<Link href={ROUTES.ABOUT.link}><a className="nav-link ml-5 2xl:ml-8 pb-2 pt-9 text-xl font-semibold text-white hover:text-secondary1  focus:text-secondary1">{ROUTES.ABOUT.name}</a></Link>
							<Link href={ROUTES.CONTACT.link}><a className="nav-link ml-5 2xl:ml-8 pb-2 pt-9 text-xl font-semibold text-white hover:text-secondary1  focus:text-secondary1">{ROUTES.CONTACT.name}</a></Link>
							<Link href={ROUTES.BLOG.link}><a className="nav-link ml-5 2xl:ml-8 pb-2 pt-9 text-xl font-semibold text-white hover:text-secondary1  focus:text-secondary1">{ROUTES.BLOG.name}</a></Link>	
						</div>
					
				</aside>
			</div>
		</nav>

	)
	
	
}

export default Navbar
