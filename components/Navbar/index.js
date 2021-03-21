
import Image from 'next/image'
import Link from 'next/link'
import * as ROUTES from './routes'


function Navbar() {
	

	return (	

		<nav className='flex items-center flex-wrap bg-white p-3 '>
			<div className="container max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between h-16">
					
						<div className="flex-shrink-0">
							<Link href='/'>
								<a className='inline-flex items-center'>
									<Image src="/images/logo.png" alt="logo" width="160" height="50" />								
								</a>
							</Link>
						</div>
						<div className="hidden md:block relative items-center">
							<Link href={ROUTES.HOME.link}><a className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:text-secondary1">{ROUTES.HOME.name}</a></Link>
							<Link href={ROUTES.STUDYCASES.link}><a className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1  focus:text-secondary1">{ROUTES.STUDYCASES.name}</a></Link>
							<Link href={ROUTES.ABOUT.link}><a className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1  focus:text-secondary1">{ROUTES.ABOUT.name}</a></Link>
							<Link href={ROUTES.CONTACT.link}><a className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1  focus:text-secondary1">{ROUTES.CONTACT.name}</a></Link>
							<Link href={ROUTES.BLOG.link}><a className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1  focus:text-secondary1">{ROUTES.BLOG.name}</a></Link>
							
						</div>
						<div className="-mr-2 flex md:hidden">							
							<button className="mr-2">
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
			</div>
		</nav>

	)
	
	
}

export default Navbar
