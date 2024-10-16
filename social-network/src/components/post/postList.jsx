import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACTIONSPOST } from "../../redux/slice/posts/types.js";
import Post from "./Post.jsx";
import { thunks } from "../../redux/slice/posts/thunk.js";
import PostInput from "./PostInput.jsx";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts);
    const [localPosts, setLocalPosts] = useState(posts);

    useEffect(() => {
        dispatch(thunks[ACTIONSPOST.FETCH_POST]());
    }, [dispatch]);

    useEffect(() => {
        setLocalPosts(posts);
    }, [posts]);

    const handleAddPost = (content) => {
        const newPost = {
            id: localPosts.length + 1,
            userId: 1,
            title: "Nuevo Post",
            body: content,
        };
        setLocalPosts((prevPosts) => [...prevPosts, newPost]);
    };

    return (
        <div className="layout__main">
            <PostInput onAddPost={handleAddPost} />
            <div className="posts-container">
                {localPosts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostList;
