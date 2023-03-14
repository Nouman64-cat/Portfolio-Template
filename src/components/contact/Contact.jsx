import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact section__margin' id='contact'>
      <div className='Contact__heading'>
        <h2 className='gradient__text'>Contact Me</h2>
        <p>I'll be glad enough from your suggestions regarding my work. I would love to receive your words. Please contact me for building a responsive UI/UX design.</p>
      </div>
      <div className='Contact__container'>
          <div className='Contact__container--Name'>
              <input type='text' placeholder='Name' required/>
          </div>
          <div className='Contact__container--Email'>
              <input type='email' placeholder='Email' required/>
          </div>
          <div className='Contact__container--Message'>
              <textarea name='message' id='message' cols='30' rows='10' placeholder='Message'></textarea>
          </div>
          <div className='Contact__container--Button'>
            <button type='button' className='send__btn'>Send Message</button>
          </div>
      </div>
    </div>
  )
}

export default Contact
