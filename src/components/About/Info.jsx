import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { BiAward } from 'react-icons/bi'
import { BiBriefcase } from 'react-icons/bi'
import { BiSupport } from 'react-icons/bi'

const Info = () => {
  useGSAP(()=> {
    gsap.from(".about__box",{
      opacity:0,
      y:100,
      duration:0.5,
      delay:0.3,
      stagger:0.3,
      scrollTrigger : ".about__box"
    })
  },[])
  return (
    <div className="about__info grid">
        <div className="about__box">
            <BiAward className='about__icon'/>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 Years Working</span>
        </div>

        <div className="about__box">
            <BiBriefcase className='about__icon'/>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">20+ Projects</span>
        </div>

        <div className="about__box">
            <BiSupport className='about__icon'/> 
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info
