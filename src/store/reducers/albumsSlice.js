import {createSlice} from '@reduxjs/toolkit'
import {fetchAlbums} from "./Actions";


const initialState = {
    albums: [],
    isLoadingAlbums: false,
    error: ''
}

export const postsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchAlbums.fulfilled.type]: (state,action) => {
            state.isLoadingAlbums = false;
            state.albums = action.payload;
        },
        [fetchAlbums.pending.type]: (state) => {
            state.isLoadingAlbums = true;
        },
        [fetchAlbums.rejected.type]: (state,action) => {
            state.isLoadingAlbums = false;
            state.error = action.payload;
        }
    }
})

export default postsSlice.reducer