import React from 'react';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa'; 
import '../assets/styles/post.css'; 

const Post = ({ userId, id, title, body, likes, shares }) => {
  return (
    <div className="post" data-user-id={userId} data-id={id}>
      <div className="post__header">
        <img className="post__avatar" src="avatar.png" alt="User Avatar" />
        <div className="post__user-info">
          <span className="post__username">Friendly User</span>
          <span className="post__timestamp">2 hours ago</span>
        </div>
      </div>
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>
      <div className="post__image-placeholder"></div>
      <div className="post__stats">
        <span className="post__likes">Likes: {likes}</span>
        <span className="post__shares">Shares: {shares}</span>
      </div>
      <div className="post__actions">
        <button className="post__action-button">
          <FaThumbsUp /> Me Gusta
        </button>
        <button className="post__action-button">
          <FaComment /> Comentar
        </button>
        <button className="post__action-button">
          <FaShare /> Compartir
        </button>
      </div>
    </div>
  );
};

export default Post;
