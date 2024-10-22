import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import WritePost from "./pages/WritePost";
import BlogPost from "./pages/BlogPost";
import OpeningPage from "./pages/OpeningPage"; // 오프닝 페이지 추가

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // 오프닝 페이지에서 홈으로 자동 리디렉션
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        {/* 오프닝 페이지 */}
        <Route
          path="/"
          element={
            <>
              <OpeningPage />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Header />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Blog posts={posts} />
            </>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/write" element={<WritePost addPost={addPost} />} />

        {/* 404 Catch-All Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
