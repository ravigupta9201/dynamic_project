"use client" 
import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Image from 'next/image';
import Testimonials from './Testimonials';
import styles from "../styles/testimonials_carousel.module.css"



const TestimonialCarousel = () => {

  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    // speed: 500
  };  

      return (



        <div className={styles.container}>
          <h1>Testimonials</h1>
          <Slider  {...settings}>
            <div className={styles.first}> <Testimonials /> </div>
            <div className={styles.two}> <Testimonials /> </div>
            <div className={styles.one}> <Testimonials /> </div>
          </Slider>
        </div>

        // <div className={styles.container} style={{background: "black"}}>
        //   <Slider {...settings}>
        //   <div><Testimonials /></div>
        //   <div><Testimonials /></div>
        //   <div><Testimonials /></div>
        //   <div>sliderComp</div>
        //   <div>sliderComp</div>
        // </Slider>
        // </div>
      );
}

export default TestimonialCarousel
