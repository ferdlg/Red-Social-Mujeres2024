import {configureStore} from '@reduxjs/toolkit';
import  postSlice  from './slice/posts/slice';
import commentSlice from './slice/comments/slice';

export const store = configureStore({
    reducer:{
        post: postSlice,
        comment : commentSlice
    }
});