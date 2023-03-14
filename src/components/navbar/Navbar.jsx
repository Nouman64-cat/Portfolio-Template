
import './Navbar.css'
import LogoN from '../../assets/images/logo-n.png';
import nouman from '../../assets/images/nouman.png';
const Navbar = () => {
  return (
    <div className='Navbar section__margin'>
      <div className='Navbar__container'>
        <div className='Navbar__container--picture'>
          <a href={nouman} rel="noreferrer" target="_blank">
          <img src={nouman} alt="Nouman"/>
          </a>
        </div>
        <div className='Navbar__container--Title'>
          <p>My Portfolio</p>
        </div>
        <div className='Navbar__container--links'>
          <p>Hi viewer!</p>
          <p><a href="#about" className='about--link'>About</a></p>
          <p><a href="#projects" className='projects--link'>Projects</a></p>
          <p><a href="#contact" className='contact--link'>Contact</a></p>
        </div>
        <div className='Navbar__container--logo__container'>
          <div className='Navbar__container--logo__container--logo'>
            <img src={LogoN} alt="Nouman"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
