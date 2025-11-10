import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext)

    const location = useLocation()

    if (loading)
        return <h1>Loading......</h1>
    if (user && user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
};

export default PrivateRoute;