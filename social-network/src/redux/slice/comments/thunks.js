import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTIONSCOMMENTS } from "./types";

export const thunks = {
    [ACTIONSCOMMENTS.FETCH_COMMENTS]: createAsyncThunk({id},'comments/fetchcomments', async()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=`+{id});
        return response.json();
    }),
};