import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Social = () => {

  useGSAP(()=> {
    gsap.from(".home__social-icon",{
      opacity:0,
      x:-100,
      duration:0.5,
      stagger:0.2,
      delay:0.3
    })
  },[])
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
