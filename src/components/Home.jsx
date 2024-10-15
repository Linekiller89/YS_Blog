import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

function Home() {
  return (
    <div className="home">
      <h1>Hello, I'm Yongsoo Son</h1>
      <p>A passionate web developer skilled in React and JavaScript.</p>
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>Content 1</SwiperSlide>
        <SwiperSlide>Content 2</SwiperSlide>
        <SwiperSlide>Content 3</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
