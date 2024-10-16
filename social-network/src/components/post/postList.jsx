import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACTIONSPOST } from "../../redux/slice/posts/types.js";
import Post from "./Post.jsx";
import { thunks } from "../../redux/slice/posts/thunk.js";
import { Pagination } from "../pagination/pagination.jsx";

const PostList = ()=>{
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPage] = useState(15);

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts);

    const lastPost = currentPage * postsPage;
    const firstPost = lastPost - postsPage;
    const paginationPost = posts.slice(firstPost, lastPost);

    const handlePrevious =()=>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    }
    
    const handleNext =()=>{
        if(lastPost < posts.length){
            setCurrentPage(currentPage + 1);
        }
    }

    useEffect(()=>{
        dispatch(thunks[ACTIONSPOST.FETCH_POST]());
    }, [dispatch]);

    return(
        <div className="post__list">
            <div className="post__list-item">
                {paginationPost.map(post =>(
                    <Post
                    key = {post.id}
                    id = {post.id}
                    userId = {post.userId}
                    title = {post.title}
                    body = {post.body}
                    likes = {Math.floor(Math.random()*(500 - 100)+100)}
                    shares = {Math.floor(Math.random()*(1000 - 100)+1000)}
                    />
                ))}
            </div>
        <Pagination
            handlePrevious = {handlePrevious}
            handleNext = {handleNext}
            currentPage = {currentPage}
            pages = {Math.ceil(posts.length/postsPage)}
        />
        </div>
    );
};

export default PostList;
