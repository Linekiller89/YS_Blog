import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/WritePost.css";

function WritePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const newPost = {
      title,
      description,
      image,
      date: new Date().toLocaleDateString("en-US", options),
    };

    // 기존 포스트를 가져와서 새로운 포스트 추가
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(newPost);

    // 로컬 스토리지에 저장
    localStorage.setItem("posts", JSON.stringify(posts));
    navigate("/blog");
  };
  {
    /* 이미지 추가, 삭제 기능 추후 구현 */
  }
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImage(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleRemoveImage = () => {
  //   setImage(null);
  // };

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

        {/* 이미지 추가, 삭제 기능 추후 구현 */}
        {/* <input type="file" accept="image/*" onChange={handleImageChange} />

        {image && <img src={image} alt="Preview" className="image-preview" />}

        <button type="button" onClick={handleRemoveImage}>
          Remove Image
        </button> */}

        <button type="submit">Publish</button>
      </form>
    </div>
  );
}

export default WritePost;
