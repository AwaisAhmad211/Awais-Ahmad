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
  const [Toggle, showMenu] = useState(false) 
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Awais
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <BiHome className="nav__icon" />Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <CgProfile className="nav__icon"/>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <BiFile className="nav__icon"/>Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <BiBriefcase className="nav__icon"/>Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#porfolio" className="nav__link">
                <BiFileBlank className="nav__icon"/>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <GrPhone className="nav__icon"/>Contact Us
              </a> 
            </li>
          </ul>
          <CgClose className="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
            <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
