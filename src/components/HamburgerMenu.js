import React, {useState} from "react"
import '../styles/HamburgerMenu.css'

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
		<div className='hamburger-container'>
			<button
				id='page-nav-toggle'
				className={
					isOpen
						? 'main-navigation-toggle active'
						: 'main-navigation-toggle'
				}
				type='button'
				onClick={handleClick}
			/>

			<label htmlFor='page-nav-toggle'>
				<svg className='icon--menu-toggle' viewBox='0 0 60 30'>
					<g className='icon-group'>
						<g className='icon--menu'>
							<path d='M 6 0 L 54 0' />
							<path d='M 6 15 L 54 15' />
							<path d='M 6 30 L 54 30' />
						</g>
						<g className='icon--close'>
							<path d='M 15 0 L 45 30' />
							<path d='M 15 30 L 45 0' />
						</g>
					</g>
				</svg>
			</label>
			<nav className='main-navigation'>
				<ul>
					<li>
						<a href='#home' onClick={handleClick}>Home</a>
					</li>
					<li>
						<a href='#about' onClick={handleClick}>About</a>
					</li>
					<li>
						<a href='#projects' onClick={handleClick}>Projects</a>
					</li>
					<li>
						<a href='#contact' onClick={handleClick}>Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default HamburgerMenu