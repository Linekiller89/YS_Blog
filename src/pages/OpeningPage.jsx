import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/OpeningPage.css"; // 스타일 추가

const OpeningPage = () => {
  return (
    <div className="opening-container">
      <span class="loader"></span>
    </div>
  );
};

export default OpeningPage;
