import React from 'react';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import {NavWrapper, NavbarContainer, ImgWrapper, LogoLink, LinkItem, ButtonContainer, LinkItem2, HamburguerWrapper, HeaderElements, AligningElements} from './styles'
import { useRouter } from 'next/router'
import datas from './routes.json';
import LogoSVG from './LogoSVG'
import { FiMenu, FiX } from 'react-icons/fi';


const Navbar=({scrollToSlide}) => {
	const [active, setActive] = useState(false);
	const router = useRouter();

	const handleClick = () => {
		setActive(!active);
	};

	const reset = () => {
		scrollToSlide(0);
		setActive(false);
	};
	const some = () => {
		return null;
	};

	const handleS=(event) =>{
		const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
		const body = document.body;
		const html = document.documentElement;
		const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
		const windowBottom = windowHeight + window.pageYOffset;
		const navb = document.getElementById('navbar')
		const hamb = document.getElementById('hamb')
		const home = document.getElementById('home')
		const study = document.getElementById('study')
		const contact = document.getElementById('contact')
		const abaut = document.getElementById('abaut')
		const blog = document.getElementById('blog')


		if (windowBottom >= docHeight) {
			navb.classList.replace('bg-white','bar-vanished')
			hamb.classList.replace('text-primary','text-white')
			home.classList.replace('text-primary','text-white')
			contact.classList.replace('text-primary','text-white')
			abaut.classList.replace('text-primary','text-white')
			study.classList.replace('text-primary','text-white')
			blog.classList.replace('text-primary','text-white')
		} else {
			navb.classList.replace('bar-vanished', 'bg-white')
			hamb.classList.replace('text-white', 'text-primary')
			home.classList.replace('text-white', 'text-primary')
			contact.classList.replace('text-white', 'text-primary')
			abaut.classList.replace('text-white', 'text-primary')
			study.classList.replace('text-white', 'text-primary')
			blog.classList.replace('text-white', 'text-primary')
		}
	  };

	  useEffect(() => {
		window.addEventListener('scroll', handleS);
		return () => window.removeEventListener('scroll', handleS);
	  }, []);


	return (
		<NavbarContainer  id='navbar'>
			<nav className='container max-w-7xl mx-auto px-4 sm:px-6 p-3'>
				<NavWrapper>
						<ImgWrapper onClick={router.pathname=="/" ? reset : some} >
							<Link href='/'>
								<LogoLink>
									<LogoSVG />
								</LogoLink>
							</Link>
						</ImgWrapper>
						<div className="hidden md:block items-center">
							<ul className="list-none flex">
								{
									React.Children.toArray(
										datas.map(data => (
											<Link href={data.link}><LinkItem id={data.id} onClick={router.pathname == data.link ? reset : some} className={router.pathname == data.link ? "text-secondary2": "text-primary"}>{data.name}</LinkItem></Link> 
										))
									)
								}
							</ul>
						</div>
						<ButtonContainer className="md:hidden">
							<button className="mr-2 justify-end" onClick={setActive}>
								<FiMenu className="w-9 h-9 text-primary" id="hamb"/>
							</button>
						</ButtonContainer>
				</NavWrapper>
				<HamburguerWrapper className={`${active ? 'h-full' : 'hidden h-0'} cont-aside`}>
					<HeaderElements>
						<AligningElements>
							<button onClick= {handleClick} >
								<FiX className="w-9 h-9 text-white" />
							</button>
						</AligningElements>
					</HeaderElements>
					<div className="md:hidden">
						<ul className="list-none flex flex-col items-center">
							{
								React.Children.toArray(
									datas.map(data => (
										<Link href={data.link}><LinkItem2 id={data.id} onClick={router.pathname == data.link ? reset : some} className={router.pathname == data.link ? "text-secondary2": "text-white"}>{data.name}</LinkItem2></Link>
									))
								)
							}
						</ul>
					</div>
				</HamburguerWrapper>
			</nav>
		</NavbarContainer>
	)
}

export default Navbar
