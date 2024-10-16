import React from "react";
import {LuSend } from 'react-icons/lu'; 
import '../../assets/styles/components/textArea.css'
import '../../assets/styles/components/comments.css'


export const TextArea = ()=>{
    return(
        <div className="content">
            <form className="content__form">
                <input type="text" name="textArea" className="content__form-text-area" placeholder="Write a comment..."/>
                <button type="Submit" className="content__form-add-comment">
                    <LuSend />
                </button>            
            </form>
        </div>
    );
}