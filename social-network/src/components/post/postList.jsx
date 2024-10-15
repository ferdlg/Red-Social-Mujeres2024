import React , {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { ACTIONSPOST } from "../../redux/slice/posts/types.js";
import Post from "./post.jsx";
import { thunks } from "../../redux/slice/posts/thunk.js";

const PostList = ()=>{
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts)
    
    useEffect(()=>{
        dispatch(thunks[ACTIONSPOST.FETCH_POST]());
    }, [dispatch]);

    return(
        <div className="post__list">
            <div className="post__list-item">
                {posts.map(post =>(
                    <Post
                    key = {post.Id}
                    userId = {post.userId}
                    title = {post.title}
                    body = {post.body}
                    likes = {0}
                    shares = {0}
                    />
                ))}
            </div>
        </div>
    );
}
export default PostList;