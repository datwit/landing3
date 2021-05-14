
import Link from 'next/link'
import * as ROUTES from './routes'
import { useState, useEffect } from 'react';
import {NavWrapper, ImgWrapper, LogoLink, LinkItem, ButtonContainer, LinkItem2, HamburguerWrapper, HeaderElements, AligningElements} from './styles'
import { useRouter } from 'next/router'


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
		<nav className='container max-w-7xl mx-auto px-4 sm:px-6 p-3'>			
			<NavWrapper>					
					<ImgWrapper onClick={router.pathname=="/" ? reset : some} >
						<Link href='/'>
							<LogoLink>
								{/* <img src="/images/transp.svg" alt="logo" width="160" height="50" /> */}	
								<svg fill="#1e4158"  xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="160" height="50" version="1.1"
										viewBox="0 0 28658 9051"
										xmlnsXlink="http://www.w3.org/1999/xlink">										
										<g id="Capa_x0020_1">
										<metadata id="CorelCorpID_0Corel-Layer"/>
										<g id="_2137727599312">
										<path className="fil0" d="M14005 6952c-268,0 -510,-63 -726,-188 -215,-126 -385,-297 -511,-514 -126,-217 -188,-462 -188,-734 0,-272 57,-515 173,-730 115,-216 273,-386 472,-512 200,-125 425,-188 677,-188 203,0 391,42 563,126 172,85 317,199 434,344l0 -1395c0,-79 25,-143 74,-191 50,-48 113,-72 189,-72 79,0 143,24 191,72 48,48 72,112 72,191l0 2355c0,272 -62,517 -188,734 -126,217 -295,388 -509,514 -213,125 -454,188 -723,188zm0 -465c176,0 332,-42 470,-126 138,-85 246,-201 325,-349 80,-148 119,-313 119,-496 0,-186 -39,-351 -119,-495 -79,-145 -187,-260 -325,-344 -138,-84 -294,-126 -470,-126 -172,0 -328,42 -467,126 -140,84 -250,199 -331,344 -81,144 -121,309 -121,495 0,183 40,348 121,496 81,148 191,264 331,349 139,84 295,126 467,126zm3528 465c-252,0 -477,-63 -677,-188 -200,-126 -357,-296 -473,-512 -115,-215 -173,-458 -173,-730 0,-272 63,-517 189,-734 126,-217 296,-388 511,-514 215,-125 457,-188 726,-188 268,0 510,63 723,188 213,126 383,297 509,514 125,217 188,462 188,734l-201 0c0,272 -58,515 -173,730 -116,216 -273,386 -473,512 -199,125 -425,188 -676,188zm103 -465c176,0 332,-42 470,-126 138,-85 246,-200 325,-346 79,-147 119,-311 119,-493 0,-186 -40,-352 -119,-499 -79,-146 -187,-262 -325,-346 -138,-84 -294,-126 -470,-126 -172,0 -328,42 -467,126 -140,84 -250,200 -331,346 -81,147 -121,313 -121,499 0,182 40,346 121,493 81,146 191,261 331,346 139,84 295,126 467,126zm1157 450c-76,0 -139,-25 -189,-75 -50,-50 -75,-113 -75,-189l0 -790 99 -547 428 186 0 1151c0,76 -25,139 -75,189 -50,50 -112,75 -188,75zm2076 -5c-172,0 -327,-44 -465,-132 -137,-88 -246,-208 -325,-359 -79,-152 -119,-322 -119,-511l0 -2464c0,-76 24,-138 72,-186 49,-48 111,-72 186,-72 76,0 138,24 186,72 48,48 73,110 73,186l0 2464c0,137 37,253 113,346 76,93 169,139 279,139l176 0c62,0 114,24 157,72 43,49 65,111 65,186 0,76 -29,138 -85,186 -57,48 -130,73 -220,73l-93 0zm-1146 -2278c-73,0 -131,-21 -176,-62 -45,-41 -67,-93 -67,-155 0,-69 22,-124 67,-165 45,-42 103,-62 176,-62l1193 0c72,0 130,20 175,62 45,41 67,96 67,165 0,62 -22,114 -67,155 -45,41 -103,62 -175,62l-1193 0zm2840 2278c-55,0 -106,-17 -152,-50 -47,-32 -79,-73 -96,-121l-764 -2293c-28,-107 -27,-194 2,-261 30,-67 94,-101 194,-101 65,0 120,19 163,55 43,36 78,97 106,183l650 2035 -180 0 614 -2076c17,-59 47,-106 88,-142 41,-36 98,-55 170,-55 69,0 125,19 168,55 43,36 72,83 86,142l501 1952 -78 0 610 -1911c48,-158 137,-238 268,-238 96,0 162,34 196,101 35,67 33,154 -5,261l-764 2293c-14,48 -43,89 -88,121 -45,33 -96,50 -155,50 -55,0 -107,-17 -155,-50 -48,-32 -79,-73 -93,-121l-532 -1968 52 0 -558 1968c-14,48 -44,89 -90,121 -47,33 -99,50 -158,50zm3424 0c-75,0 -138,-25 -188,-75 -50,-50 -75,-113 -75,-189l0 -2298c0,-79 25,-143 75,-191 50,-48 113,-73 188,-73 80,0 143,25 191,73 49,48 73,112 73,191l0 2298c0,76 -24,139 -73,189 -48,50 -111,75 -191,75zm0 -3285c-93,0 -173,-34 -240,-101 -67,-67 -100,-147 -100,-240 0,-93 33,-173 100,-240 67,-67 147,-101 240,-101 93,0 173,34 241,101 67,67 100,147 100,240 0,93 -33,173 -100,240 -68,67 -148,101 -241,101zm2273 3285c-172,0 -327,-44 -465,-132 -138,-88 -246,-208 -325,-359 -80,-152 -119,-322 -119,-511l0 -2464c0,-76 24,-138 72,-186 48,-48 110,-72 186,-72 76,0 138,24 186,72 48,48 72,110 72,186l0 2464c0,137 38,253 114,346 76,93 169,139 279,139l175 0c62,0 115,24 158,72 43,49 65,111 65,186 0,76 -29,138 -86,186 -56,48 -130,73 -219,73l-93 0zm-1147 -2278c-72,0 -131,-21 -175,-62 -45,-41 -67,-93 -67,-155 0,-69 22,-124 67,-165 44,-42 103,-62 175,-62l1193 0c73,0 131,20 176,62 45,41 67,96 67,165 0,62 -22,114 -67,155 -45,41 -103,62 -176,62l-1193 0z"/>
										<g>
											<path className="fil1" d="M7061 3965c-198,435 -192,1115 -438,1503 -297,-210 -564,-520 -876,-694 0,-516 2,-614 -223,-919 -555,-752 -1824,-436 -1858,571 -12,338 66,361 -88,601 -348,541 -307,299 -706,415 -327,95 -43,97 -792,-321 0,-1724 -2080,-1422 -2080,-289l0 19c0,396 11,681 319,974 568,541 1042,113 1284,200l725 452c133,133 211,489 586,599 397,117 792,-64 957,-411 188,-395 -34,-304 352,-842 61,-86 103,-157 156,-240 430,218 587,-114 810,14l583 481c476,382 297,1066 1125,1066 328,0 766,-328 766,-809 0,-1221 -36,-520 272,-1851 139,-596 160,-248 511,-617 964,-1009 -446,-2475 -1426,-1622 -505,440 -489,1345 41,1720z"/>
											<path className="fil1" d="M2244 4081c0,288 46,693 438,693 838,0 199,-1051 1281,-2519 1236,-1677 4253,-1772 5424,699 605,1275 366,2714 -456,3794 -423,556 -1419,1147 -2144,1147 -716,0 -929,50 -1619,-255 -202,-89 -706,-439 -844,-439 -350,0 -492,283 -492,636 0,313 691,638 930,751 1003,474 2248,462 3277,51 489,-195 646,-377 993,-571 134,212 819,983 1094,983 271,0 493,-235 493,-520 0,-294 -240,-456 -397,-622 -164,-172 -297,-410 -534,-476 252,-502 636,-843 866,-1745 1232,-4837 -4821,-7953 -7662,-3640 -261,397 -648,1376 -648,2033z"/>
										</g>
										</g>
										</g>
										</svg>							
							</LogoLink>
						</Link>
					</ImgWrapper>
					<div className="hidden md:block items-center">
						<ul className="list-none flex">
							<Link href={ROUTES.HOME.link}><LinkItem id="home" onClick={router.pathname=="/" ? reset : some} className={router.pathname=="/" ? "text-secondary2": "text-primary"}>{ROUTES.HOME.name}</LinkItem></Link> 
							<Link href={ROUTES.STUDYCASES.link}><LinkItem id="study" onClick={router.pathname=="/studycases" ? reset : some} className={router.pathname=="/studycases" ? "text-secondary2": "text-primary"}>{ROUTES.STUDYCASES.name}</LinkItem></Link>
							<Link href={ROUTES.ABOUT.link}><LinkItem id="abaut" onClick={router.pathname=="/about" ? reset : some} className={router.pathname=="/about" ? "text-secondary2": "text-primary"}>{ROUTES.ABOUT.name}</LinkItem></Link>
							<Link href={ROUTES.CONTACT.link}><LinkItem id="contact" onClick={router.pathname=="/contact" ? reset : some} className={router.pathname=="/contact" ? "text-secondary2": "text-primary"}>{ROUTES.CONTACT.name}</LinkItem></Link>
							<Link href={ROUTES.BLOG.link}><LinkItem id="blog" onClick={router.pathname=="/blog" ? reset : some} className={router.pathname=="/blog" ? "text-secondary2": "text-primary"}>{ROUTES.BLOG.name}</LinkItem></Link>		
						</ul>
					</div>
					<ButtonContainer className="md:hidden">							
						<button className="mr-2 justify-end" onClick={setActive}>
							<svg 
								id="hamb"
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
						<Link href={ROUTES.HOME.link}><LinkItem2 onClick={router.pathname=="/" ? reset : some } className={router.pathname=="/" ? "text-secondary2": "text-white"}>{ROUTES.HOME.name}</LinkItem2></Link>
						<Link href={ROUTES.STUDYCASES.link}><LinkItem2 onClick={router.pathname=="/studycases" ? reset : some} className={router.pathname=="/studycases" ? "text-secondary2 pt-9" : "text-white pt-9"}>{ROUTES.STUDYCASES.name}</LinkItem2></Link>
						<Link href={ROUTES.ABOUT.link}><LinkItem2 onClick={router.pathname=="/about" ? reset : some} className={router.pathname=="/about" ? "text-secondary2 pt-9": "text-white pt-9"}>{ROUTES.ABOUT.name}</LinkItem2></Link>
						<Link href={ROUTES.CONTACT.link}><LinkItem2 onClick={router.pathname=="/contact" ? reset : some} className={router.pathname=="/contact" ? "text-secondary2 pt-9": "text-white pt-9"}>{ROUTES.CONTACT.name}</LinkItem2></Link>
						<Link href={ROUTES.BLOG.link}><LinkItem2 onClick={router.pathname=="/blog" ? reset : some} className={router.pathname=="/blog" ? "text-secondary2 pt-9": "text-white pt-9"}>{ROUTES.BLOG.name}</LinkItem2></Link>	
					</ul>							
				</div>					
			</HamburguerWrapper>			
		</nav>
		
	)	
}

export default Navbar
