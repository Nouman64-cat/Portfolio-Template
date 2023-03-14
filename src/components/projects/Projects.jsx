import React from 'react'
import './Projects.css'
import cpp from '../../assets/images/c++.png'
import angular from '../../assets/images/logo4.png'
import javascript from '../../assets/images/logo3.png'
const Projects = () => {
  return (
    <div className='Projects section__margin ' id='projects'>
      <div className='Projects__heading'>
        <h1 className='gradient__text'>The Projects I've Developed</h1>
      </div>
      <div className="Projects__container">
        <div className="Projects__container__cardA">
              <p>12/03/2023</p>
              <div className='Projects__container__cardA--image'>
              <img  src={cpp} alt="cpp" />
              </div>
              <div className='Projects__container__cardA--title'>
              <h3 >Project Title</h3>
              <p>Project Description.</p>
              </div>
        </div>
        <div className="Projects__container__cardA">
             <p>12/03/2023</p>
             <div className='Projects__container__cardA--image'>
              <img  src={angular} alt="Angular" />
              </div>
              <div
              className='Projects__container__cardA--title'>
              <h3 >Project Title</h3>
              <p>Project Description.</p>
              </div>
        </div>
        <div
        className="Projects__container__cardA">
             <p>12/03/2023</p>
             <div className='Projects__container__cardA--image'>
              <img  src={javascript} alt="Javascript" />
              </div>
              <div
              className='Projects__container__cardA--title'>
              <h3 >Project Title</h3>
              <p>Project Description.</p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
