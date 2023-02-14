import React from 'react';
import classes from './Users.module.css'

const User = ({item,toPosts,toModal}) => {

    return (
        <li className={classes.user} key={item.id}>
            {Object.keys(item).map((el,index)=>{
                if (typeof item[el] !== 'object')
                return <p><strong>{el}: </strong>{item[el]}</p>
            })}
            <button className={classes.btn} onClick={()=>toPosts(item.id)}>Posts</button>
            <button className={classes.btn} onClick={()=>toModal(item.id)}>Albums</button>
        </li>
    );
};

export default User;