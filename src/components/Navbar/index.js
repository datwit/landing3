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
				<button
					className="flex lg:hidden items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-black hover:border-black"
					onClick={() => setNavbarOpen(!navbarOpen)}
				>
				  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
			  </div>
			  <div
				className={
				  "lg:flex flex-grow items-center" +
				  (navbarOpen ? " flex" : " hidden")
				}
				id="example-navbar-danger"
			  >
				<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
					<li className="nav-item nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
						<NavLink exact to={ROUTES.HOME.link} activeClassName="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.HOME.name}</NavLink>
					</li>
					<li className="nav-item nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
						<NavLink exact to={ROUTES.STUDYCASES.link} activeClassName="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.STUDYCASES.name}</NavLink>
					</li>
					<li className="nav-item nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
						<NavLink exact to={ROUTES.ABOUT.link} activeClassName="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.ABOUT.name}</NavLink>
					</li>
					<li className="nav-item nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
						<NavLink exact to={ROUTES.CONTACT.link} activeClassName="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.CONTACT.name}</NavLink>
					</li>                            
					<li className="nav-item nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
						<NavLink exact to={ROUTES.BLOG.link} activeClassName="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.BLOG.name}</NavLink>
					</li>
				</ul>
			  </div>
			</div>
		  </nav>
		</>
	);
}

export default Navbar
