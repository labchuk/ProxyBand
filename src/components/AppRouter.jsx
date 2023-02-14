import React from 'react';
import {useRoutes} from 'react-router-dom'
import Users from "../pages/Users/Users";
import Posts from "../pages/Posts/Posts";

const AppRouter = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Users/>
        },
        {
            path: '/users/:id/posts',
            element: <Posts/>
        }
    ])
    return (
        <>
            {routes}
        </>
    );
};

export default AppRouter;