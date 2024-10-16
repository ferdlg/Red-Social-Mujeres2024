import React from "react";

import '../../assets/styles/components/comments.css'

const Comments = ({id,name, email, body})=>{
    return(
        <>
            <div className="container">
                <ul className="container__list">
                    <li className="container__list-avatar"></li>
                    <li className="container__list-username">
                        <p>{email}</p>
                    </li>
                    <li>
                        <p>{name}</p>
                    </li>
                    <li className="container__list-comment">
                        <p>Comment {body}</p>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Comments;