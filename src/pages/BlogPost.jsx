import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // URL에서 포스트 ID 가져오기
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  const post = posts[id]; // ID로 해당 포스트 찾기

  return post ? (
    <div className="blog-post-container">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.description}</p>
      <div className="post-content">{post.content}</div>
    </div>
  ) : (
    <p>Post not found</p>
  );
}

export default BlogPost;
