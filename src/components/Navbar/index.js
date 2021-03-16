import React from 'react'
import { NavLink } from "react-router-dom"
import * as ROUTES from "./routes"
import img from '../../assets/images/logo.png'

const Navbar = () => (
        <nav>
            <div className="container max-w-7xl mx-auto md:px-10">
                <div className="flex items-center justify-between h-16">                
                    <div className="flex-shrink-0">
                        <img src={img} alt="logo" width="140" height="60" />
                    </div>              
                    <div className="hidden md:block relative">
                        <ul className="flex items-center">
                            <li className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
                            <NavLink exact to={ROUTES.HOME.link} activeClassName="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.HOME.name}</NavLink>
                            </li>
                            <li className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
                            <NavLink exact to={ROUTES.STUDYCASES.link} activeClassName="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.STUDYCASES.name}</NavLink>
                            </li>
                            <li className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
                            <NavLink exact to={ROUTES.ABOUT.link} activeClassName="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.ABOUT.name}</NavLink>
                            </li>
                            <li className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
                            <NavLink exact to={ROUTES.CONTACT.link} activeClassName="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.CONTACT.name}</NavLink>
                            </li>                            
                            <li className="nav-link ml-5 2xl:ml-8 py-2 text-sm font-semibold text-primary hover:text-secondary1 focus:outline-none focus:text-secondary1">
                            <NavLink exact to={ROUTES.BLOG.link} activeClassName="font-semibold text-base text-secondary2 tracking-tight">{ROUTES.BLOG.name}</NavLink>
                            </li>
                        </ul>                
                    </div>                     
                </div>
            </div>         
        </nav>
)

export default Navbar
