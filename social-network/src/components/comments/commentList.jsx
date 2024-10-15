import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { ACTIONSCOMMENTS } from "../../redux/slice/comments/types.js";

import { thunks } from "../../redux/slice/coments/thunk.js";


const CommentList = ({postId})=>{
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.comments);

    useEffect(()=>{
        dispatch(thunks[ACTIONSPOST.FETCH_POST](postId));
    }, [dispatch]);
    return(
        <div className="comment__list">
            <div className="comment__list-item">
                {comments.map(comment =>(
                    <Post
                    key = {comment.Id}
                    postId = {comment.postId}
                    name = {comment.name}
                    email = {comment.email}
                    body = {comment.body}
                    />
                ))}
            </div>
        </div>
    );

}

export default CommentList