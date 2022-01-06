import React from 'react'
import Footer from './Footer'
import '../styles/Contact.css'
import ContactForm from './ContactForm'
import { format } from 'date-fns'

const Contact = () => {
	return (
		<div className='content-container contact-container' id='contact'>
			<h1>Get in touch</h1>

			<ContactForm />

			<p className='goodbye-message'>And with that, have a superb <span>{format(new Date(), 'cccc')}</span>.</p>

			<Footer />
		</div>
	)
}

export default Contact
