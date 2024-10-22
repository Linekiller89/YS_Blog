import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OpeningPage.css";

function OpeningPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // 5초 후 홈으로 리디렉션
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="opening-container">
      <span class="loader"></span>
    </div>
  );
}

export default OpeningPage;
