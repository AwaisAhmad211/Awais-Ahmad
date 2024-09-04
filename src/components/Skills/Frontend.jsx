import React from 'react'
import { BiBadgeCheck } from 'react-icons/bi'

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BiBadgeCheck className='bx-badge-check'/>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className='bx-badge-check' />
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className='bx-badge-check'/>
            <div>
              <h3 className="skills__name">JavaScipt</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <BiBadgeCheck className='bx-badge-check'/>
            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className='bx-badge-check'/>
            <div>
              <h3 className="skills__name">React Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <BiBadgeCheck className='bx-badge-check'/>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend
