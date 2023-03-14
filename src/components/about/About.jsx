import { faCss3, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './About.scss'
import cpp from '../../assets/images/c++.png';
const About = () => {
  return (
    <div className='About section__margin' id='about'>
      <div className='About__container'>

        <div className='About__container--text'>
          
          <h1 className='gradient__text'>Hi</h1>
          <h1 className='gradient__text'>I'm Nouman Ejaz</h1>
          <h1 className='gradient__text'>Front End Developer</h1>
          <div className='About__container--paragraph'>
         <p>I'm Nouman Ejaz, an overwhelming and confident front-end developer. I am seeking opportunity in an organization to polish my abilities. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
          </div>
        </div>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
              <div className='face1'>
                <img src={cpp} alt="cpp"/>
              </div>
              <div className='face2'>
                <FontAwesomeIcon icon ={faHtml5} color="#F06529"/>
              </div>
              <div className='face3'>
                <FontAwesomeIcon icon ={faCss3} color="#28A4D9"/>
              </div>
              <div className='face4'>
                <FontAwesomeIcon icon ={faReact} color="#5ED4F4"/>
              </div>
              <div className='face5'>
                <FontAwesomeIcon icon ={faJsSquare} color="#EFD81D"/>
              </div>
              <div className='face6'>
                <FontAwesomeIcon icon ={faPython  } color="#4584b6"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
