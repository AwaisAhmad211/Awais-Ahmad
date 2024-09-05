import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/awais-ahmad211" className='home__social-icon' target='_blank'>
            <FaLinkedin color='black'/>
        </a>

        <a href="https://github.com/AwaisAhmad211/" className='home__social-icon' target='_blank'>
            <BsGithub color='black'/>
        </a>

        <a href="https://web.facebook.com/oppennminded/" className='home__social-icon' target='_blank'>
            <BsFacebook color='black'/>
        </a>
    </div>
  )
}

export default Social
