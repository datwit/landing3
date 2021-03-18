import React from 'react'
import { NavLink } from "react-router-dom"
import * as ROUTES from "./routes"
import img from '../../assets/images/logo.png'

function Navbar({ fixed }) {
	
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	 
	return (
		<>
		  <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
			<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
			  <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
				<div className="flex-shrink-0">
					<img src={img} alt="logo" width="140" height="60" />
				</div> 
				<button type="button" className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
					<svg className={(navbarOpen ? "hidden" : "flex") + " block h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
					
					<svg className={(navbarOpen ? "flex" : "hidden") + " h-6 w-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			  </div>
			  <div className={"lg:flex flex-grow items-center justify-center" + (navbarOpen ? " flex" : " hidden")}>
				<ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center justify-center">
					<li className="nav-item nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
						<NavLink exact to={ROUTES.HOME.link} activeclassname="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.HOME.name}</NavLink>
					</li>
					<li className="nav-item nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
						<NavLink exact to={ROUTES.STUDYCASES.link} activeclassname="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.STUDYCASES.name}</NavLink>
					</li>
					<li className="nav-item nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
						<NavLink exact to={ROUTES.ABOUT.link} activeclassname="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.ABOUT.name}</NavLink>
					</li>
					<li className="nav-item nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
						<NavLink exact to={ROUTES.CONTACT.link} activeclassname="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.CONTACT.name}</NavLink>
					</li>                            
					<li className="nav-item nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
						<NavLink exact to={ROUTES.BLOG.link} activeclassname="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.BLOG.name}</NavLink>
					</li>
				</ul>
			  </div>
			</div>
		  </nav>
		</>
	);
}

export default Navbar
