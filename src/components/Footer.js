import React from 'react'
import '../styles/Footer.css'


const Footer = () => {
	const handleClick = () => {
		window.open('https://github.com/Jonthejon10')
	}

	return (
		<footer className='footer-container'>
			<p>© Jonthejon10, 2022</p>
			<button
				type='button'
				className='git-button'
				onClick={handleClick}
			/>
		</footer>
	)
}

export default Footer
