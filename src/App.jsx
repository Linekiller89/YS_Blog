import React from "react";
import Header from "./components/Header";
import Slide from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <h1>Hello, I'm Yongsoo Son</h1>
        <p>A passionate web developer skilled in React and JavaScript.</p>
        <Slide /> {/* Swiper 슬라이드 삽입 */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
