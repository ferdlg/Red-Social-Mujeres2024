import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTIONSPOST } from "./types";

export const thunks = {
    [ACTIONSPOST.FETCH_POST]: createAsyncThunk('post/fetchPosts', async()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        console.log(response)
        return response.json();
    }),
};