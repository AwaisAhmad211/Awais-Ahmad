import React, { useState } from "react";
import "./qualification.css";
import { FaGraduationCap } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
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
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <BiCalendar /> 2021 - present
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

              <div>
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <BiCalendar /> 2021 - present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <BiCalendar /> 2021 - present
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
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
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

              <div>
                <h3 className="qualification__title">Web development</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <BiCalendar /> 2023 - present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
