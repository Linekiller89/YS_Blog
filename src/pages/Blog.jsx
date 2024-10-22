import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 포스트 불러오기
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index); // 해당 포스트 삭제
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts)); // 로컬 스토리지 업데이트
  };

  const handleNewPost = () => {
    navigate("/write");
  };

  return (
    <div className="blog-container">
      <h3>Blog</h3>
      <button onClick={handleNewPost} className="new-post-button">
        새 글 작성
      </button>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="blog-post">
            <small>{post.date}</small>
            <Link to={`/blog/${index}`} className="blog-post-link">
              {post.title}
            </Link>
            <button onClick={() => deletePost(index)}>Delete</button>{" "}
          </div>
        ))
      ) : (
        <p className="no-posts-message">No posts yet.</p>
      )}
    </div>
  );
}

export default Blog;
