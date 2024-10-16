import { createSlice } from "@reduxjs/toolkit"
import reducers from "./reducer";
import { thunks } from "./thunks";
import {ACTIONSCOMMENTS} from './types'

const initialState = {
    comments:[],
    loading:false,
    error:null
}

export const commentSlice = createSlice(
    {
        name: 'comment',
        initialState,
        reducers,
        extraReducers:(builder)=>{
            builder.addCase(thunks[ACTIONSCOMMENTS.FETCH_COMMENTS].pending, (state)=>{
                state.condition = 'loading';
            });
            builder.addCase(thunks[ACTIONSCOMMENTS.FETCH_COMMENTS].fulfilled, (state, action)=>{
                state.condition = 'success';
                state.comments = action.payload;
            });
            builder.addCase(thunks[ACTIONSCOMMENTS.FETCH_COMMENTS].rejected, (state)=>{
                state.condition = 'error';
            });
        },
    });

export const {setComment} = commentSlice.actions;
export default commentSlice.reducer;