import React, { useState } from "react";
import "./services.css";
import { BiCheckCircle } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import Frontend from '../../assets/frontend.png'
import Backend from '../../assets/backend.png'
import Fullstack from '../../assets/fullstack.png'


const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
       <div className="services__container container grid">
      <div className="services__content">
        <div>
          <img src={Frontend} alt="frontendImg" className="services__icon" width={30}/>
          {/* <Frontend color="black" className="services__icon"/> */}
          <h3 className="services__title">Frontend <br/> Development</h3>
        </div>
        <span className="services__button" onClick={()=> toggleTab(1)}>
          View More
          <BsArrowRightShort className="services__button-icon" />
        </span>

        <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <FaTimes className="services__modal-close" onClick={()=> toggleTab(0)} />
            <h3 className="services__modal-title">Frontend Development</h3>
            <p className="services__modal-description">
              Service with more then 2 years of work to clients and companies
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  I develope the user interface
                </p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">Web page development.</p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  I create ux element interactions.
                </p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  I position your company brand.
                </p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="services__content">
        <div>
        <img src={Backend} alt="frontendImg" className="services__icon" width={30}/>
          {/* <BiArrowBack className="services__icon"/> */}
          <h3 className="services__title">Backend <br/> Development</h3>
        </div>
        <span className="services__button" onClick={()=> toggleTab(2)}>
          View More
          <BsArrowRightShort className="services__button-icon" />
        </span>

        <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <FaTimes className="services__modal-close" onClick={()=> toggleTab(0)}/>
            <h3 className="services__modal-title">Backend Development</h3>
            <p className="services__modal-description">
              Service with more then 2 years of work to clients and companies
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  I develope the user interface
                </p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">Web page development.</p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  I create ux element interactions.
                </p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  I position your company brand.
                </p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="services__content">
        <div>
        <img src={Fullstack} alt="frontendImg" className="services__icon" width={30}/>
          {/* <BiEdit className="services__icon"/> */}
          <h3 className="services__title">Full Stack Development<br/>  </h3>
        </div>
        <span className="services__button" onClick={()=> toggleTab(3)}>
          View More
          <BsArrowRightShort className="services__button-icon" />
        </span>

        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <FaTimes className="services__modal-close" onClick={()=> toggleTab(0)}/>
            <h3 className="services__modal-title">Full Stack Development</h3>
            <p className="services__modal-description">
              Service with more then 2 years of work to clients and companies
            </p>

            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  I develope the user interface
                </p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">Web page development.</p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  I create ux element interactions.
                </p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  I position your company brand.
                </p>
              </li>

              <li className="services__modal-service">
                <BiCheckCircle className="services__modal-icon" />
                <p className="services__modal-info">
                  Design and mockups of products for companies.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
