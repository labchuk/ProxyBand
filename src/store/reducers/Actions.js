import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

export  const fetchUsers = createAsyncThunk('user/fetchAll',async (_,thunkAPI)=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data
})

export  const fetchPosts = createAsyncThunk('post/fetchId',async (id,thunkAPI)=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    return response.data
})

export  const fetchAlbums = createAsyncThunk('albums/fetchId',async (id,thunkAPI)=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
    return response.data
})