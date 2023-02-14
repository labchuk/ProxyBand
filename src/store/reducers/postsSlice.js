import {createSlice} from '@reduxjs/toolkit'
import {fetchPosts} from "./Actions";


const initialState = {
    posts: [],
    isLoadingPosts: false,
    error: ''
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchPosts.fulfilled.type]: (state,action) => {
            state.isLoadingPosts = false;
            state.posts = action.payload;
        },
        [fetchPosts.pending.type]: (state) => {
            state.isLoadingPosts = true;
        },
        [fetchPosts.rejected.type]: (state,action) => {
            state.isLoadingPosts = false;
            state.error = action.payload;
        }
    }
})

export default postsSlice.reducer