import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function WritePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
      date: new Date().toLocaleDateString(),
    };

    // 기존 포스트를 가져와서 새로운 포스트 추가
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(newPost);

    // 로컬 스토리지에 저장
    localStorage.setItem("posts", JSON.stringify(posts));
    navigate("/blog");
  };

  return (
    <div className="write-post-container">
      <h2>Write a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}

export default WritePost;
