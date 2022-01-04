import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<p>Logo</p>

			<ul>
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
		</div>
	)
}

export default Navbar
