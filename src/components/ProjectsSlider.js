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
        slidesToScroll: 1
    }

    const projects = [
		{
			title: 'Inventory Application',
			img: inventory,
			text: 'Lorem ipsum dolor sit amet',
			code_url: 'https://github.com/Jonthejon10/inventory-application',
			live_url: 'https://young-springs-48093.herokuapp.com/',
		},
		{
			title: 'Fakeddit',
			img: fakeddit,
			text: 'Lorem ipsum dolor sit amet',
			code_url: 'https://github.com/Jonthejon10/fakeddit',
			live_url: 'https://jonthejon10.github.io/fakeddit/',
		},
		{
			title: 'Shopping Cart',
			img: shopping_cart,
			text: 'Lorem ipsum dolor sit amet',
			code_url: 'https://github.com/Jonthejon10/shopping-cart',
			live_url: 'https://jonthejon10.github.io/shopping-cart/',
		},
		{
			title: 'Where is Waldo ?',
			img: waldo,
			text: 'Lorem ipsum dolor sit amet',
			code_url: 'https://github.com/Jonthejon10/where-is-waldo',
			live_url: 'https://jonthejon10.github.io/where-is-waldo/',
		},
		{
			title: 'Battleship',
			img: battleship,
			text: 'Lorem ipsum dolor sit amet',
			code_url: 'https://github.com/Jonthejon10/Battleship',
			live_url: 'https://jonthejon10.github.io/Battleship/',
		},
		{
			title: 'TNW Clone',
			img: tnw,
			text: 'Lorem ipsum dolor sit amet',
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
{/* 									<button
										className='project-btn'
										type='button'
										onClick={() =>
											window.open(item.code_url)
										}>
										Check the repo
									</button>
									<button
										className='project-btn'
										type='button'
										onClick={() =>
											window.open(item.live_url)
										}>
										See it live
                                    </button> */}
                                    
									<div class='link_wrapper'>
										<a href={`${item.code_url}`} target="_blank" rel="noreferrer">Check the repo</a>
										<div class='icon'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 268.832 268.832'>
												<path d='M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z' />
											</svg>
										</div>
									</div>

                                    <div class='link_wrapper'>
										<a href={`${item.live_url}`} target="_blank" rel="noreferrer">See it live</a>
										<div class='icon'>
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