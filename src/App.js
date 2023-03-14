import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Contact from './components/contact/Contact.jsx'
import About from './components/about/About.jsx'
import Projects from './components/projects/Projects.jsx'
import Footer from './components/footer/Footer.jsx'
const App = () => {
  return (
    <div className='App'>
      <div className='bg__color'>
        <Navbar />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
        
    </div>
  )
}
//checking if commit is working or not
export default App
