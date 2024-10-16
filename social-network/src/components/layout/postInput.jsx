import React, { useState } from 'react';
import '../../assets/styles/components/layout/postInput.css';

const PostInput = ({ onPost }) => {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    if (postText.trim()) {
      onPost(postText);
      setPostText('');
    }
  };

  return (
    <div className="post-input">
      <textarea
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="¿Qué estás pensando?"
      />
      <button onClick={handlePost}>Publicar</button>
    </div>
  );
};

export default PostInput;
