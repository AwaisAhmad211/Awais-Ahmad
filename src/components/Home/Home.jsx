import React from "react";
import Social from "./Social";
import Data from "./Data";
import './home.css'
import ScrollDown from "./ScrollDown";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(()=> {
    gsap.from(".home__img",{
      opacity:0.5,
      scale:0.8,
      duration:0.5,
      delay:0.3,
    })
  },[])
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
