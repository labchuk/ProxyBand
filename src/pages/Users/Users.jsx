import React, {useEffect, useState} from 'react';
import classes from './Users.module.css'
import {useSelector,useDispatch} from 'react-redux'
import {fetchAlbums, fetchUsers} from "../../store/reducers/Actions";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import Preloader from "../../components/Preloader/Preloader";
import User from "../../components/User/User";

const Users = () => {
    const [active,setModalActive] = useState(false)
    const dispatch = useDispatch()
    const {users,isLoadingUsers} = useSelector(state => state.usersReducer)
    const {albums,isLoadingAlbums} = useSelector(state => state.albumsReducer)
    const navigate = useNavigate();
    const toPosts = (id) => {
        navigate(`/users/${id}/posts`);
    }
    const toModal = (id) => {
        setModalActive(true)
        dispatch(fetchAlbums(id))
    }

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return (
        <>
            <h1>Users</h1>
            <ul className={classes.userList}>
                {isLoadingUsers? <Preloader/> : <ul>{users.map((item,index)=>{
                    return <User item={item} toPosts={toPosts} toModal={toModal} />
                })}</ul> }
            </ul>
            <Modal active={active} setActive={setModalActive}>
                <h2>Albums</h2>
                {isLoadingAlbums? <Preloader/> : <ul className={classes.modalList}>{albums.map((item,index)=>{
                    return <li className={classes.modalItem} key={item.id}>{item.title}</li>
                })}</ul> }
                <div className={classes.bot}>
                    <button className={classes.btn} onClick={()=>setModalActive(false)}>Close</button>
                </div>
            </Modal>
        </>

    );
};

export default Users;