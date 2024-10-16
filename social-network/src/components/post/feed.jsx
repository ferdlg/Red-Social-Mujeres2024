import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONSPOST } from '../../redux/slice/posts/types';
import Post from '../post/post.jsx';
import { thunks } from '../../redux/slice/posts/thunk.js';
import PostList from './postList.jsx';

const Feed = () => {
    // const dispatch = useDispatch();
    // const posts = useSelector((state) => state.post.posts); 

    // useEffect(() => {
    //     dispatch(thunks[ACTIONSPOST.FETCH_POST]()); 
    // }, [dispatch]);

    return (
        <div className="feed">
            <PostList></PostList>
        </div>
    );
};

export default Feed;

