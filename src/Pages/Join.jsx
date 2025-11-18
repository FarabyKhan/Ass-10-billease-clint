import React from 'react';

const Join = () => {
    return (
        <div className='relative w-11/12 mx-auto h-[60vh] rounded-xl my-20 overflow-hidden'>
            <img src="/utilities.png"
            alt=""
            className='w-full h-full mx-auto object-cover brightness-75' />
            
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-4 '>
            <h1 className='text-white text-5xl font-bold mb-5'>Join Our Community</h1>
            <div className='flex bg-white rounded-full shadow-lg overflow-hidden w-full max-w-md'>
            <input type="email"
             placeholder='Enter Your Email Address'
             className='px-4 py-3 w-full outline none'
               />
               <button className='btn btn-primary text-white px-6 py-6 font-semibold'>Join</button>
            </div>
            

<div className="validator-hint hidden">Enter valid email address</div>
        </div>
            
        </div>
    );
};

export default Join;