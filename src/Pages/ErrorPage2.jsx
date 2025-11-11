import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage2 = () => {
    const error = useRouteError()
    const errorMessage = error?.message || error.statusText || "An Unexpected Error Occurred!"

    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center'>
            <img src="/error-icon.png" alt="" />
            <h1 className='text-4xl font-bold'>{errorMessage}</h1>
            <Link to={'/'} className='btn btn-primary my-5'>Back To Home</Link>
        </div>
    );
};

export default ErrorPage2;