import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../styles/slider.css";

function Slide() {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      <SwiperSlide>
        <div className="project-card">Project 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="project-card">Project 2</div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slide;
