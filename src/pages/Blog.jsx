import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <h1>Blog</h1>
      <button onClick={handleNewPost}>새 글 작성</button>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <small>Published on {post.date}</small>
            <Link to={`/blog/${index}`}>상세 내용</Link>{" "}
            {/* 상세 페이지로 이동하는 링크 */}
            <button onClick={() => deletePost(index)}>Delete</button>{" "}
            {/* 삭제 버튼 */}
          </div>
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
}

export default Blog;
