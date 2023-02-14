import {createSlice} from '@reduxjs/toolkit'
import {fetchUsers} from "./Actions";


const initialState = {
    users: [],
    isLoadingUsers: false,
    error: ''
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state,action) => {
            state.isLoadingUsers = false;
            state.users = action.payload;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoadingUsers = true;
        },
        [fetchUsers.rejected.type]: (state,action) => {
            state.isLoadingUsers = false;
            state.error = action.payload;
        }
    }
})

export default usersSlice.reducer