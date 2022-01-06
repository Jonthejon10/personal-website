import React from "react"
import '../styles/QuickLinks.css'

const QuickLinks = () => {
    return (
		<div className='quicklinks-container'>
			<button
				type='button'
				onClick={() => window.open('https://github.com/Jonthejon10')}
				className='quicklink-btn git-btn'
			/>
			<button type='button' className='quicklink-btn linkedin-btn' />
		</div>
	)
}

export default QuickLinks