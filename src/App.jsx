import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import WritePost from "./pages/WritePost";
import BlogPost from "./pages/BlogPost";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([]);

  // 글을 추가하는 함수 정의
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Content />
              <Footer />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
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
        <Route path="/blog/:id" element={<BlogPost />} />{" "}
        {/* BlogPost로 연결 */}
        <Route path="/write" element={<WritePost addPost={addPost} />} />
      </Routes>
    </div>
  );
}

export default App;
