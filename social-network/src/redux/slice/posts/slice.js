import { createSlice } from "@reduxjs/toolkit";
import { ACTIONSPOST } from "./types";
import reducers from './reducers';
import { thunks } from "./thunk";

const initialState = {
    posts:[],
    loading:false,
    error:null
}

export const postSlice = createSlice(
    {
        name: 'post',
        initialState,
        reducers,
        extraReducers:(builder)=>{
            builder.addCase(thunks[ACTIONSPOST.FETCH_POST].pending, (state)=>{
                state.condition = 'loading';
            });
            builder.addCase(thunks[ACTIONSPOST.FETCH_POST].fulfilled, (state, action)=>{
                state.condition = 'success';
                state.posts = action.payload;
            });
            builder.addCase(thunks[ACTIONSPOST.FETCH_POST].rejected, (state)=>{
                state.condition = 'error';
            });
        },
    });

export const {setPost} = postSlice.actions;
export default postSlice.reducer;