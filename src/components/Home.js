import React from 'react'
import '../styles/Home.css'

const Home = () => {

    return (
		<div className='content-container home-container' id='home'>
			<div className='bg'></div>
			<div className='bg bg2'></div>
			<div className='bg bg3'></div>
			<h1>Hello there !</h1>

			<h2>
				I'm <span>Ionut Ianchis</span>,
			</h2>

			<h3>An aspiring Full Stack Web Developer.</h3>

			<div className='about-btn-container'>
				<a
					className='h-button centered'
					data-text='About me'
					href='#about'>
					<span>G</span>
					<span>e</span>
					<span>t</span>
					&nbsp;
					<span>T</span>
					<span>o</span>
					&nbsp;
					<span>K</span>
					<span>n</span>
					<span>o</span>
					<span>w</span>
					&nbsp;
					<span>M</span>
					<span>e</span>
				</a>
			</div>

			<div className='scrolldown-container'>
				<div className='scrolldown'>
					<div className='chevrons'>
						<div className='chevrondown'></div>
						<div className='chevrondown'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home