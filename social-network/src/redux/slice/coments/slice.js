import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    coment:{
        postId: null,
        id: null,
        name: '',
        email: '',
        body: ''
    }
}

export const comentSlice = createSlice(
    {
        name: 'coment',
        initialState,
        reducers:{
            setComent:(state, action)=>{
                state.coment = action.payload;
            }
        }
    });

export const {setComent} = comentSlice.actions;
export default comentSlice.reducer;