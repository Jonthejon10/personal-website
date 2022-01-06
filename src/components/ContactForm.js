import React, { useState } from 'react'
import '../styles/ContactForm.css'
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    

    const handleSubmit = (e) => {

        e.preventDefault()
        
        emailjs
			.sendForm(
				process.env.REACT_APP_service_id,
				process.env.REACT_APP_template_id,
				e.target,
				process.env.REACT_APP_user_id
			)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => console.error(err))
        
        setTimeout(() => {
			setSubmitted(true)
        }, 100)
	}

    if (submitted) {
		return (
			<div>
				<h2 style={{fontSize: '2.5rem'}}>Thank you!</h2>

				<p style={{fontSize: '1.5rem'}}>I'll get back to you as soon as possible.</p>
			</div>
		)
	}

    return (
		<div className='contact-form-container'>
			<form
				onSubmit={(e) => handleSubmit(e)}
				method='POST'
                target='_blank'>
				<input
					type='text'
					placeholder='Your name'
					name='name'
					required
				/>

				<input type='email' placeholder='Email' name='email' required />

				<textarea
					placeholder='Your message'
					name='message'
					rows='5'
					required
                />
                
				<div className='link_wrapper'>
					<button
						type='submit'>
						Send me a message
					</button>
					<div className='icon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 268.832 268.832'>
							<path d='M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z' />
						</svg>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ContactForm
