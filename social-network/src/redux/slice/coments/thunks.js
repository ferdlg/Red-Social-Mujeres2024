import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTIONSCOMENTS } from "./types";

export const thunks = {
    [ACTIONSCOMENTS.FETCH_COMENTS]: createAsyncThunk({id},'coments/fetchComents', async()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=`+{id});
        return response.json();
    }),
};