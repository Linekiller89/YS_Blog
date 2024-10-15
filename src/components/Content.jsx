import React from "react";
import "../styles/content.css";
import Slide from "./Slider";

function Content() {
  return (
    <div className="content">
      <h1>Hello, I'm Yongsoo Son</h1>
      <p>A passionate web developer skilled in React and JavaScript.</p>
      <Slide /> {/* Swiper 슬라이드 삽입 */}
    </div>
  );
}

export default Content;
