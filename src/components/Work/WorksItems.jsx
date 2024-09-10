import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const WorksItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt="Image" className='work__img'/>
      <h3 className="work__title">{item.title}</h3>
      <a href={item.href} target='_blank' className="work__button">
        Demo <BiRightArrowAlt className='work__button-icon'/>
      </a>
    </div>
  )
}

export default WorksItems
