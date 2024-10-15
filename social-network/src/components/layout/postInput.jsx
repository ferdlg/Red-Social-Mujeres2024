import React from "react";
import "../../assets/styles/components/layout/postInput.css";

const PostInput = () => {
  return (
    <div className="main-content">
      <div className="post-input">
        <input type="text" placeholder="¿Qué tienes en mente, amigo?" />
        <button>Publicar</button>
      </div>
    </div>
  );
};

export default PostInput;
