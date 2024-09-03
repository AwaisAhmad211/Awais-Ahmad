import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'
const Social = () => {
  return (
    <div className="home__social">
        <a href="" className='home__social-icon' target='_blank'>
            <FaLinkedin color='black'/>
        </a>

        <a href="" className='home__social-icon' target='_blank'>
            <BsGithub color='black'/>
        </a>

        <a href="" className='home__social-icon' target='_blank'>
            <BsDribbble color='black'/>
        </a>
    </div>
  )
}

export default Social
