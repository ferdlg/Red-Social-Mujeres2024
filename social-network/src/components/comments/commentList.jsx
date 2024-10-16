import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { ACTIONSCOMMENTS } from "../../redux/slice/comments/types.js";
import { thunks } from "../../redux/slice/comments/thunks.js";
import Comments from "./comments.jsx";
import { TextArea } from "./textArea.jsx";
import '../../assets/styles/components/comments.css'

const CommentList = ({postId})=>{
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.comments);

    useEffect(()=>{
        dispatch(thunks[ACTIONSCOMMENTS.FETCH_COMMENTS](postId));
    }, [dispatch]);
    console.log(comments);
    return(
        <>
        <div className="container__title">
                <h1 className="container__title-comments">Comments</h1>
        </div>
        <div className="comment__list">
            <div className="comment__list-item">
                {comments.map(comment =>(
                    <Comments
                    key = {comment.id}
                    id = {comment.id}
                    postId = {comment.postId}
                    name = {comment.name}
                    email = {comment.email}
                    body = {comment.body}
                    />
                ))}
            </div>
            <div className="container__text-area">
                <TextArea></TextArea>
            </div>
        </div>
        </>
        
    );

}

export default CommentList