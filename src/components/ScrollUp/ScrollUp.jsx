import React from 'react'
import './scrollup.css'
import { BsArrowUpShort } from 'react-icons/bs'

const ScrollUp = () => {
    window.addEventListener("scroll", function() {
        const scrollUp = document.querySelector(".scrollup") ;
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    });
  return (
    <a href="#" className="scrollup">
        <BsArrowUpShort className='scroll__icon'/>
    </a>
  )
}

export default ScrollUp
