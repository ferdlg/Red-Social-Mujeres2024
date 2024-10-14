import React from 'react';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa'; 
import '../../assets/styles/components/post.css'; 
import { Card } from '../card/card';

const Post = ({ userId, id, title, body, likes, shares }) => {
  return (
    <Card>
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
      <div className="post__actions">
        <button className="post__action-button">
          <FaThumbsUp /> Likes  {likes}
        </button>
        <button className="post__action-button">
          <FaComment /> Comments
        </button>
        <button className="post__action-button">
          <FaShare /> Shares  {shares}
        </button>
      </div>
    </div>
    </Card>
  );
};

export default Post;
