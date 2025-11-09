import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex justify-center items-center min-h-screen space-y-10'>
           <div className='text-center'>
             <img src={'/404.jpeg'} className='h-[800px] w-[1400px]' alt="" />
           <Link to={'/'} className='btn btn-primary'>Back To Home</Link>
           </div>
        </div>
    );
};

export default Error;