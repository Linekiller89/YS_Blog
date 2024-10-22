import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import WritePost from "./pages/WritePost";
import BlogPost from "./pages/BlogPost";
import OpeningPage from "./pages/OpeningPage"; // 오프닝 페이지 추가

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // 오프닝 페이지에서 홈으로 자동 리디렉션
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
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Header />
              <Projects />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Header />
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
