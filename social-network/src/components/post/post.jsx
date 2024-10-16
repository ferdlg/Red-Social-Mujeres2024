import React, { useState } from 'react';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa'; 
import '../../assets/styles/components/post.css'; 
import { Card } from '../card/card';
import CommentList from '../comments/commentList';

const Post = ({ userId, id, title, body, likes, shares }) => {
  const [showComment, setShowComment] = useState(false);
  const handleOpenComment = ()=>{
    setShowComment(!showComment);
  }

  return (
    <>
    <Card>
    <div className="post" key={id}>
      <div className="post__header">
        <img className="post__avatar" src="avatar.png" alt="User Avatar" />
        <div className="post__user-info">
          <h3 className="post__username">Friendly User : {userId} </h3>
        </div>
      </div>
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>
      <div className="post__actions">
        <button className="post__action-button">
          <FaThumbsUp /> Likes  {likes}
        </button>
        <button className="post__action-button" onClick={handleOpenComment}>
          <FaComment /> Comments
        </button>
        <button className="post__action-button">
          <FaShare /> Shares  {shares}
        </button>
      </div>
    </div>
    </Card>
    {showComment && 
    <Card>
      <CommentList postId={id}/>
    </Card>
    }
    </>
    
  );
};

export default Post;