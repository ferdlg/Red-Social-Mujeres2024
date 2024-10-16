import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONSPOST } from '../../redux/slice/posts/types';
import Post from '../post/post.jsx';
import { thunks } from '../../redux/slice/posts/thunk.js';

const Feed = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts); 

    useEffect(() => {
        dispatch(thunks[ACTIONSPOST.FETCH_POST]()); 
    }, [dispatch]);

    return (
        <div className="feed">
            {posts.slice(0, 15).map((post) => ( 
                <Post
                    key={post.id}
                    userId={post.userId}
                    title={post.title}
                    body={post.body}
                    likes={0}
                    shares={0}
                />
            ))}
        </div>
    );
};

export default Feed;

