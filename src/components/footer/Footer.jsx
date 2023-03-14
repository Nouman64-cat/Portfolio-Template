import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className='Footer section__margin'>
      <div className='Footer__heading'>
      <h2>Thanks for Visiting my portfolio website.</h2>
      </div>
      <div className='Footer__social--media'>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nouman-ejaz-64251125b/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#fff" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/Nouman64-cat">
          <FontAwesomeIcon icon={faGithub} color="#fff" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/noumanejaz_7/">
          <FontAwesomeIcon icon={faInstagram} color="#fff" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://web.facebook.com/ejaz.mughal.129794"
        >
          <FontAwesomeIcon icon={faFacebook} color="#fff" />
        </a>
      </div>
    </div>
  )
}

export default Footer
