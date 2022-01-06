import './styles/App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import QuickLinks from './components/QuickLinks'

const App = () => {
  return (
    <div className='container'>
    
      <Navbar />

      <QuickLinks />
    
      <Home />

      <About />
    
      <Projects />
    
      <Contact />

    </div>
  )
}

export default App;
