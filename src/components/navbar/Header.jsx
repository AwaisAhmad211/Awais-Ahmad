import React, { useState } from "react";
import './header.css'
import { BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BiFile } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { GrPhone } from "react-icons/gr";
import { BiFileBlank } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header") ;
    if(this.scrollY >= 80) header.classList.add("scroll__header");
    else header.classList.remove("scroll__header")
});

/*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false) 
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Awais
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className={activeNav === "#home" ? "nav__link active-link" : "nav__link"} onClick={() => {setActiveNav("#home");showMenu(!Toggle)}}>
                <BiHome className="nav__icon" />Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className={activeNav === "#about" ? "nav__link active-link" : "nav__link"} onClick={() => {setActiveNav("#about");showMenu(!Toggle)}}>
                <CgProfile className="nav__icon"/>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"} onClick={() => { setActiveNav("#skills");showMenu(!Toggle)}}>
                <BiFile className="nav__icon"/>Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className={activeNav === "#services" ? "nav__link active-link" : "nav__link"} onClick={() => { setActiveNav("#services");showMenu(!Toggle)}}>
                <BiBriefcase className="nav__icon"/>Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"} onClick={() => {setActiveNav("#portfolio");showMenu(!Toggle)}}>
                <BiFileBlank className="nav__icon"/>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"} onClick={() => {setActiveNav("#contact");showMenu(!Toggle)}}>
                <GrPhone className="nav__icon"/>Contact Us
              </a> 
            </li>
          </ul>
          <CgClose className="nav__close" onClick={()=> showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
            <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
