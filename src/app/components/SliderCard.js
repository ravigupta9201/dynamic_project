// import React, { useRef, useState } from "react";
"use client" 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import TrainingCard from "./TrainingCard";
import styles from "../styles/sliderCard.module.css"


const SliderCard = () => {
  return (
    <>
      <div className={styles.container}>

        <div>
          <h3>Tranning</h3>
          <p>Lorem ipsum dolor sit amt consectetur adipisicing elit. Dolores quia rerum natus voluptate voluptates odit ducimus consectetur voluptatem obcaecati, eligendi itaque quasi delectus at officiis quas porro unde aperiam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia rerum natus voluptate voluptates.</p>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          autoplay={{delay: 1000 , disableOnInteraction: false}}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          // className="mySwiper"
          // className={styles.container}

        >
          <div>
            <SwiperSlide> <TrainingCard imageUrl={"/pic2.jpg"}  />      </SwiperSlide>
            <SwiperSlide> <TrainingCard imageUrl={"/slider (1).png"} /> </SwiperSlide>
            <SwiperSlide> <TrainingCard imageUrl={"/slider (2).png"} /> </SwiperSlide>
            <SwiperSlide> <TrainingCard imageUrl={"/slider (3).png"} /> </SwiperSlide>
            <SwiperSlide> <TrainingCard imageUrl={"/slider (4).png"} /> </SwiperSlide>
            <SwiperSlide> <TrainingCard imageUrl={"/slider (2).png"} /> </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default SliderCard
