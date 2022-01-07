import React from 'react'
import '../styles/About.css'

const About = () => {

	return (
		<div className='content-container about-container' id='about'>
			<div className='about-me-container'>
				<h1>About me</h1>
				<p>
					Hi ! I'm Ionut Ianchis, a Full Stack Web Developer based in
					Romania.
				</p>
				<p>
					I started my programming journey back in April 2021, a month
					later I stumbled upon The Odin Project, <br></br>
					and after many projects, frustrations and successes, here we
					are.
				</p>
				<p>
					When I'm not banging my head against the keyboard trying to
					solve yet another bug,<br></br>I enjoy gaming, reading
					books, spending quality time with family/ friends or
					mindlessly watching YouTube videos.
				</p>
			</div>

			<div className='skills-container'>
				<h1>Skills & Tools</h1>

				<div className='skills-icons-div'>
					<div className='languages-div'>
						<h3>Languages and frameworks</h3>

						<div className='icons-container'>
							<div className='icon-div'>
								<img
									src={require('../images/html.svg').default}
									alt={''}
								/>
								<span>HTML</span>
							</div>
							<div className='icon-div'>
								<img
									src={require('../images/css.svg').default}
									alt={''}
								/>
								<span>CSS</span>
							</div>
							<div className='icon-div'>
								<img
									src={require('../images/js.svg').default}
									alt={''}
								/>
								<span>Javascript</span>
							</div>
							<div className='icon-div'>
								<img
									src={require('../images/sass.svg').default}
									alt={''}
								/>
								<span>Sass</span>
							</div>
							<div className='icon-div'>
								<img
									src={require('../images/react.svg').default}
									alt={''}
								/>
								<span>React</span>
							</div>
							<div className='icon-div'>
								<img
									src={require('../images/redux.svg').default}
									alt={''}
								/>
								<span>Redux</span>
							</div>
							<div className='icon-div'>
								<img
									src={require('../images/pugjs.svg').default}
									alt={''}
								/>
								<span>PugJS</span>
							</div>
							<div className='icon-div'>
								<img
									src={
										require('../images/nodejs.svg').default
									}
									alt={''}
								/>
								<span>NodeJS</span>
							</div>
							<div className='icon-div'>
								<img
									src={
										require('../images/express.svg').default
									}
									alt={''}
								/>
								<span>Express</span>
							</div>
							<div className='icon-div'>
								<img
									className='mongo-icon'
									src={
										require('../images/mongodb.svg').default
									}
									alt={''}
								/>
								<span>MongoDB</span>
							</div>

							<div className='icon-div'>
								<div className='mongoose-icon'></div>
								<span>Mongoose</span>
							</div>

							<div className='icon-div'>
								<img
									src={
										require('../images/passport.svg')
											.default
									}
									alt={''}
								/>
								<span>PassportJS</span>
							</div>
							<div className='icon-div'>
								<img
									className='firebase-icon'
									src={
										require('../images/firebase.svg')
											.default
									}
									alt={''}
								/>
								<span>Firebase</span>
							</div>
						</div>
					</div>

					<div className='tools-div'>
						<h3>Development tools</h3>

						<div className='icons-container'>
							<div className='icon-div'>
								<img
									src={
										require('../images/github-icon.svg')
											.default
									}
									alt={''}
								/>
								<span>Github</span>
							</div>

							<div className='icon-div'>
								<img
									src={require('../images/git.svg').default}
									alt={''}
								/>
								<span>Git</span>
							</div>

							<div className='icon-div'>
								<img
									src={require('../images/npm.svg').default}
									alt={''}
								/>
								<span>NPM</span>
							</div>

							<div className='icon-div'>
								<img
									src={
										require('../images/webpack.svg').default
									}
									alt={''}
								/>
								<span>Webpack</span>
							</div>

							<div className='icon-div'>
								<img
									src={
										require('../images/heroku.svg').default
									}
									alt={''}
								/>
								<span>Heroku</span>
							</div>

							<div className='icon-div'>
								<img
									src={require('../images/jest.svg').default}
									alt={''}
								/>
								<span>Jest</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
