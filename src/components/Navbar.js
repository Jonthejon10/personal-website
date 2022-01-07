import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-scroll'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<ul className='navbar-list'>
				<li>
					<Link
						activeClass='active'
						to='home'
						spy={true}
						smooth={true}>
						<span>HOME</span>
						<div className='wave'></div>
					</Link>
				</li>
				<li>
					<Link to='about' spy={true} smooth={true}>
						<span>ABOUT</span>
						<div className='wave'></div>
					</Link>
				</li>
				<li>
					<Link to='projects' spy={true} smooth={true}>
						<span>PROJECTS</span>
						<div className='wave'></div>
					</Link>
				</li>
				<li>
					<Link to='contact' spy={true} smooth={true}>
						<span>CONTACT</span>
						<div className='wave'></div>
					</Link>
				</li>
			</ul>

			<div className='hamburger-menu-container'>
				<HamburgerMenu />
			</div>
		</div>
	)
}

export default Navbar
