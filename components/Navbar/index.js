
import Link from 'next/link'
import * as ROUTES from './routes'
import { useState } from 'react';
import {NavContainer, ImgWrapper, LogoLink, LinkItem, ButtonContainer, LinkItem2, HamburguerWrapper, HeaderElements, AligningElements} from './styles'



function Navbar() {
	const [active, setActive] = useState(false);
	

	const handleClick = () => {
		setActive(!active);
	};	

	return (	

		<nav className='flex items-center flex-wrap bg-white p-3'>
			<div className="container max-w-7xl mx-auto px-4 sm:px-6">
				<NavContainer>
					
						<ImgWrapper>
							<Link href='/'>
								<LogoLink>
									<img src="/images/logo.png" alt="logo" width="160" height="50" />								
								</LogoLink>
							</Link>
						</ImgWrapper>
						<div className="hidden md:block items-center">
							<Link href={ROUTES.HOME.link}><LinkItem>{ROUTES.HOME.name}</LinkItem></Link>
							<Link href={ROUTES.STUDYCASES.link}><LinkItem>{ROUTES.STUDYCASES.name}</LinkItem></Link>
							<Link href={ROUTES.ABOUT.link}><LinkItem>{ROUTES.ABOUT.name}</LinkItem></Link>
							<Link href={ROUTES.CONTACT.link}><LinkItem>{ROUTES.CONTACT.name}</LinkItem></Link>
							<Link href={ROUTES.BLOG.link}><LinkItem>{ROUTES.BLOG.name}</LinkItem></Link>
							
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
						
				</NavContainer>
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
						<div className="md:hidden flex flex-col relative  items-center">
							<Link href={ROUTES.HOME.link}><LinkItem2>{ROUTES.HOME.name}</LinkItem2></Link>
							<Link href={ROUTES.STUDYCASES.link}><LinkItem2 className="pt-9">{ROUTES.STUDYCASES.name}</LinkItem2></Link>
							<Link href={ROUTES.ABOUT.link}><LinkItem2 className="pt-9">{ROUTES.ABOUT.name}</LinkItem2></Link>
							<Link href={ROUTES.CONTACT.link}><LinkItem2 className="pt-9">{ROUTES.CONTACT.name}</LinkItem2></Link>
							<Link href={ROUTES.BLOG.link}><LinkItem2 className="pt-9 ">{ROUTES.BLOG.name}</LinkItem2></Link>	
						</div>
					
				</HamburguerWrapper>
			</div>
		</nav>

	)
	
	
}

export default Navbar
