import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
// import required modules 
import { Pagination } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Testimonials = () => {
  useGSAP(()=> {
    gsap.from(".testimonials__img",{
      y:150,
      opacity:0,
      duration:0.5,
      scrollTrigger : ".testimonials__img"
    })
    gsap.from(".testimonials__name",{
      y:150,
      opacity:0,
      duration:0.5,
      scrollTrigger : ".testimonials__name"
    })
    gsap.from(".testimonials__description",{
      y:150,
      opacity:0,
      duration:0.5,
      scrollTrigger : ".testimonials__description"
    })
  },[])
  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonials</span>

      <Swiper className="testimonials__container"
      loop={true}
      grabCursor={true}
      spaceBetween={24}
      pagination={{
        clickable : true,
      }}
      breakpoints={{
        576 : {
            slidesPerView : 2 ,
        },
        768 : {
            slidesPerView: 2 ,
            spaceBetween : 48,
        },
      }}
      modules={[Pagination]}
      
      >
        {Data.map(({id,image,title,description}) => {
            return (
                <SwiperSlide className="testimonials__card" key={id}>
                    <img src={image} alt="ClientImg" className="testimonials__img" />
                    <h3 className="testimonials__name">{title}</h3>
                    <p className="testimonials__description">{description}</p>
                </SwiperSlide>
            )
        })}
        </Swiper>
    </section>
  );
};

export default Testimonials;
