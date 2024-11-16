import React from "react";
import "./footer.css";
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Awais</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/awais-ahmad211"
            className="footer__social-link"
            target="_blank"
          >
            <FaLinkedin color="black" />
          </a>

          <a
            href="https://github.com/AwaisAhmad211/"
            className="footer__social-link"
            target="_blank"
          >
            <BsGithub color="black" />
          </a>

          <a
            href="https://web.facebook.com/oppennminded/"
            className="footer__social-link"
            target="_blank"
          >
            <BsDribbble color="black" />
          </a>
        </div>
        <div className="footer__copy">
          Made with <span style={{color: "red",fontSize:"medium-font-size"}}>❤</span> by Awais Ahmad  &#169; 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
