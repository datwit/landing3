
import Link from 'next/link'
import * as ROUTES from './routes'
import { useState } from 'react';
import {NavWrapper, ImgWrapper, LogoLink, LinkItem, ButtonContainer, LinkItem2, HamburguerWrapper, HeaderElements, AligningElements} from './styles'
import { useRouter } from 'next/router'


function Navbar() {
	const [active, setActive] = useState(false);
	

	const handleClick = () => {
		setActive(!active);
	};	

	const router = useRouter()

	return (	
		<div className="flex items-center flex-wrap h-20 w-full fixed top-0 bg-fixed bg-white z-10">
			<nav className='container max-w-7xl mx-auto px-4 sm:px-6 p-3'>			
				<NavWrapper>					
						<ImgWrapper>
							<Link href='/'>
								<LogoLink>
									<img src="/images/logo.png" alt="logo" width="160" height="50" />								
								</LogoLink>
							</Link>
						</ImgWrapper>
						<div className="hidden md:block items-center">
							<ul className="list-none flex">
								<LinkItem className={router.pathname=="/" ? "text-secondary2": "text-primary"}><Link href={ROUTES.HOME.link}>{ROUTES.HOME.name}</Link></LinkItem> 
								<LinkItem className={router.pathname=="/studycases" ? "text-secondary2": "text-primary"}><Link href={ROUTES.STUDYCASES.link}>{ROUTES.STUDYCASES.name}</Link></LinkItem>
								<LinkItem className={router.pathname=="/about" ? "text-secondary2": "text-primary"}><Link href={ROUTES.ABOUT.link}>{ROUTES.ABOUT.name}</Link></LinkItem>
								<LinkItem className={router.pathname=="/contact" ? "text-secondary2": "text-primary"}><Link href={ROUTES.CONTACT.link}>{ROUTES.CONTACT.name}</Link></LinkItem>
								<LinkItem className={router.pathname=="/blog" ? "text-secondary2": "text-primary"}><Link href={ROUTES.BLOG.link}>{ROUTES.BLOG.name}</Link></LinkItem>		
							</ul>
						</div>
						<ButtonContainer className="md:hidden">							
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
						</ButtonContainer>						
				</NavWrapper>
				<HamburguerWrapper className={`${active ? 'h-full' : 'hidden h-0'} cont-aside`}>							

					<HeaderElements>
						<AligningElements>
							<img src="/images/logo-grande.png" alt="logo" width="180" height="64" />	
							<button className="mr-2 flex justify-end" onClick= {handleClick} >
								<svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</AligningElements>							
					</HeaderElements>													 
					<div className="md:hidden">
						<ul className="list-none flex flex-col items-center">
							<LinkItem2 className={router.pathname=="/" ? "text-secondary2": "text-white"}><Link href={ROUTES.HOME.link}>{ROUTES.HOME.name}</Link></LinkItem2>
							<LinkItem2 className={router.pathname=="/studycases" ? "text-secondary2" : "text-white pt-9"}><Link href={ROUTES.STUDYCASES.link}>{ROUTES.STUDYCASES.name}</Link></LinkItem2>
							<LinkItem2 className={router.pathname=="/about" ? "text-secondary2 pt-9": "text-white pt-9"}><Link href={ROUTES.ABOUT.link}>{ROUTES.ABOUT.name}</Link></LinkItem2>
							<LinkItem2 className={router.pathname=="/contact" ? "text-secondary2 pt-9": "text-white pt-9"}><Link href={ROUTES.CONTACT.link}>{ROUTES.CONTACT.name}</Link></LinkItem2>
							<LinkItem2 className={router.pathname=="/blog" ? "text-secondary2 pt-9": "text-white pt-9"}><Link href={ROUTES.BLOG.link}>{ROUTES.BLOG.name}</Link></LinkItem2>	
						</ul>							
					</div>					
				</HamburguerWrapper>			
			</nav>
		</div>
	)	
}

export default Navbar
