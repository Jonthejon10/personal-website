import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/ProjectsSlider.css'

import inventory from '../images/inventory.gif'
import fakeddit from '../images/fakeddit.gif'
import shopping_cart from '../images/shopping-cart.gif'
import waldo from '../images/waldo.gif'
import battleship from '../images/battleship.gif'
import tnw from '../images/tnw.gif'


const ProjectSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      	autoplaySpeed: 10000,
	}

    const projects = [
		{
			title: 'Inventory Application',
			img: inventory,
			text: 'A gimmick game shop made with Express, PUG, SCSS and MongoDB. \n This project follows the MVC design pattern, also showcasing all CRUD operations.\n You can update, delete or create game covers or game genres as you please. ',
			code_url: 'https://github.com/Jonthejon10/inventory-application',
			live_url: 'https://young-springs-48093.herokuapp.com/',
		},
		{
			title: 'Fakeddit',
			img: fakeddit,
			text: 'A Reddit clone made with React, Redux and Firebase for a database. \n Register, post, comment or upvote stuff just like you would on Reddit !',
			code_url: 'https://github.com/Jonthejon10/fakeddit',
			live_url: 'https://jonthejon10.github.io/fakeddit/',
		},
		{
			title: 'Shopping Cart',
			img: shopping_cart,
			text: 'Fake online sword shop made using React and CSS. \n This shop features a shopping cart where you can modify quantities or delete items.',
			code_url: 'https://github.com/Jonthejon10/shopping-cart',
			live_url: 'https://jonthejon10.github.io/shopping-cart/',
		},
		{
			title: 'Where is Waldo ?',
			img: waldo,
			text: 'My take on the traditional Where is Waldo game, made with React, CSS and Firebase as a database. \n Featuring a scoreboard with best scores and a custom cursor, \n try your best to find the 3 iconic video games characters.',
			code_url: 'https://github.com/Jonthejon10/where-is-waldo',
			live_url: 'https://jonthejon10.github.io/where-is-waldo/',
		},
		{
			title: 'Battleship',
			img: battleship,
			text: 'Battleship game made using HTML, vanilla JS, CSS and Jest. \n The theme for this project was unit testing, the development processs \n was basically dictated by the tests I conceived in the starting phases.',
			code_url: 'https://github.com/Jonthejon10/Battleship',
			live_url: 'https://jonthejon10.github.io/Battleship/',
		},
		{
			title: 'TNW Clone',
			img: tnw,
			text: 'A copy of a TNW article, made solely with HTML and CSS. \n The aim for this one was to build a responsive website using flexbox and grid.',
			code_url: 'https://github.com/Jonthejon10/tnw-clone',
			live_url: 'https://jonthejon10.github.io/tnw-clone/',
		},
	]

    return (
		<div className='slider-container'>
			<Slider {...settings}>
				{projects.map((item, index) => {
					return (
						<div key={index} className='project-container'>
							<img src={item.img} alt='' />

							<div className='project-text-div'>
								<h2>{item.title}</h2>
								<p>{item.text}</p>

								<div className='project-btn-container'>

									<div className='link_wrapper'>
										<a href={`${item.code_url}`} target="_blank" rel="noreferrer">Check the repo</a>
										<div className='icon'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 268.832 268.832'>
												<path d='M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z' />
											</svg>
										</div>
									</div>

                                    <div className='link_wrapper'>
										<a href={`${item.live_url}`} target="_blank" rel="noreferrer">See it live</a>
										<div className='icon'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 268.832 268.832'>
												<path d='M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z' />
											</svg>
										</div>
									</div>
                                    
								</div>
							</div>
						</div>
					)
				})}
			</Slider>
		</div>
	)
}

export default ProjectSlider