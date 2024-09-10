import React, { useState } from "react";
import "./qualification.css";
import { FaGraduationCap } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  useGSAP(()=> {
    gsap.from(".left",{
       y:60,
       opacity:0,
       duration:0.5,
       stagger:0.2,
       scrollTrigger : ".left"
    })
    gsap.from(".right",{
      y:60,
      opacity:0,
      duration:0.5,
      stagger:0.2,
      scrollTrigger : ".right"
   })
  },[])

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={
            toggleState === 1 
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"
          }
          onClick={() => toggleTab(1)}
          >
            <FaGraduationCap className="qualification__icon" />
            Education
          </div>

          <div className={
            toggleState === 2 
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
            >
            <BiBriefcase className="qualification__icon" />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={
            toggleState === 1 
            ? "qualification__content qualification__content-active"
            : "qualification__content"
          }>
            <div className="qualification__data">
              <div className="left">
                <h3 className="qualification__title">BS Software Engineering</h3>
                <span className="qualification__subtitle">
                  Virtal University - Pakistan
                </span>
                <div className="qualification__calender">
                  <BiCalendar /> 2024 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="right">
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle">
                  SmartSkills - Institute
                </span>
                <div className="qualification__calender">
                  <BiCalendar /> 2022 - present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="left">
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">
                  Government College Boys - KRK
                </span>
                <div className="qualification__calender">
                  <BiCalendar /> 2022 - 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={
            toggleState === 2 
            ? "qualification__content qualification__content-active"
            : "qualification__content"
          }>
            <div className="qualification__data">
              <div className="left">
                <h3 className="qualification__title">Backend</h3>
                <span className="qualification__subtitle">
                SmartSkills - Institute
                </span>
                <div className="qualification__calender">
                  <BiCalendar /> 2023 - present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="right">
                <h3 className="qualification__title">Frontend</h3>
                <span className="qualification__subtitle">
                SmartSkills - Institute
                </span>
                <div className="qualification__calender">
                  <BiCalendar /> 2023 - present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="left">
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  SmartSkills - Institute
                </span>
                <div className="qualification__calender">
                  <BiCalendar /> 2022 - 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
