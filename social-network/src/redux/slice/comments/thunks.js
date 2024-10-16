import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTIONSCOMMENTS } from "./types";

export const thunks = {
    [ACTIONSCOMMENTS.FETCH_COMMENTS]: createAsyncThunk('comments/fetchcomments', async(postId)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
       console.log(response)
        return response.json();
    }),
};