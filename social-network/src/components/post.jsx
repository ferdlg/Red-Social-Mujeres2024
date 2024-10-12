import React from 'react';
import PropTypes from 'prop-types';
import './post.css'; 

const Post = ({ post }) => {
    return (
        <div className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <div className="post-footer">
                <span className="post-likes">{post.likes} Likes</span>
                <span className="post-shares">{post.shares} Shares</span>
            </div>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        shares: PropTypes.number.isRequired,
    }).isRequired,
};

export default Post;
