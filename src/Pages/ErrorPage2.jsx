import Lottie from 'lottie-react';
import React from 'react';
import { Link, useRouteError } from 'react-router';
import errorAn from '../assets/package.json'

const ErrorPage2 = () => {
    const error = useRouteError()
    const errorMessage = error?.message || error.statusText || "An Unexpected Error Occurred!"

    return (
        <div className='flex flex-col  items-center min-h-screen space-y-2 text-center'>
           <Lottie
           animationData={errorAn}
           loop={true}
           style={{ width: 800, height: 800 }}
           />
        <div >
            <h1 className='text-4xl font-bold'>{errorMessage}</h1>
        <Link to={'/'} className='btn btn-primary my-3'>Back To Home</Link>
        </div>
        </div>
    );
};

export default ErrorPage2;