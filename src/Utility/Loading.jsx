import Lottie from 'lottie-react';
import React from 'react';
import loadingAn from '../assets/Loading.json'
const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen space-y-10'>
           <Lottie
           animationData={loadingAn}
           loop={true}
           style={{ width: 800, height: 800 }}
           />
        </div>
    );
};

export default Loading;