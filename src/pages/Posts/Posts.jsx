import React, {useEffect} from 'react';
import classes from './Posts.module.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/reducers/Actions";
import {useParams} from 'react-router-dom'
import Preloader from "../../components/Preloader/Preloader";

const Posts = () => {
    const dispatch = useDispatch()
    const {posts,isLoadingPosts} = useSelector(state => state.postsReducer)
    const {id} = useParams()

    useEffect(()=>{
        dispatch(fetchPosts(id))
    },[id])
    return (
        <>
            <h1>Posts</h1>
            <ul className={classes.postList}>
                {isLoadingPosts? <Preloader/> : <ul>{posts?.map((post,index)=>{
                    return <li className={classes.post} key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </li>
                })}</ul> }
            </ul>
        </>

    );
};

export default Posts;