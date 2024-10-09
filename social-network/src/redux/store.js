import {configureStore} from '@reduxjs/toolkit';
import  postSlice  from './slice/posts/slice';
import { comentSlice } from './slice/coments/slice';

export const store = configureStore({
    reducers:{
        post: postSlice,
        coment : comentSlice
    }
});