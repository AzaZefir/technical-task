import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <div className="main_swiper_text">
          <div>Сент_Винсент и Гренадины</div>
        </div>
        <div className="swiper_city_name ">
          <SwiperSlide style={{color:'white'}}>Сент Винсент и Гренадины</SwiperSlide>
          <SwiperSlide style={{color:'white'}}>Франция</SwiperSlide>
          <SwiperSlide style={{color:'white'}}>Испания</SwiperSlide>
          <SwiperSlide style={{color:'white'}}>Португалия</SwiperSlide>
          <SwiperSlide style={{color:'white'}}>Саудовская Аравия</SwiperSlide>
        </div>
        <div className="line"></div>
        <div className="motion_title">Мир Breezzor огромный, исследуй его!</div>
      </Swiper>
    </>
  );
};
export default SwiperSlider;
