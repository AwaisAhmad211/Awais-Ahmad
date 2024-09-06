import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Skills = () => {
  useGSAP(()=> {
    gsap.from(".Frontend",{
      y:150,
      opacity:0,
      duration:0.5,
      scrollTrigger : ".Frontend"
    })
    gsap.from(".Backend",{
      y:150,
      opacity:0,
      duration:0.5,
      scrollTrigger : ".Backend"
    })
  })
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container grid">
          <div className='Frontend'><Frontend /></div>
          <div className='Backend'><Backend /></div>
        </div>
    </section>
  )
}

export default Skills
