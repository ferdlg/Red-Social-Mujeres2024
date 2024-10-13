import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    comment:{
        postId: null,
        id: null,
        name: '',
        email: '',
        body: ''
    }
}

export const commentSlice = createSlice(
    {
        name: 'comment',
        initialState,
        reducers:{
            setcomment:(state, action)=>{
                state.comment = action.payload;
            }
        }
    });

export const {setComment} = commentSlice.actions;
export default commentSlice.reducer;