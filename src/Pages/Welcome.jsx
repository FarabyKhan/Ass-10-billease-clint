import React from 'react';

const Welcome = () => {
    return (
        <div className='leading-relaxed max-w-3xl mx-auto text-center my-20'>
            <h1 className='my-5 text-4xl font-bold'>Welcome to <span className='text-red-600'>Bill<span className='text-blue-600'>Ease</span></span></h1>
              <p className="text-accent md:text-lg leading-relaxed max-w-3xl mx-auto">
                BillEase is your smart and simple solution for managing all your utility bills in one place. 
                Track electricity, gas, water, and internet bills effortlessly, make secure payments, and 
                stay updated with real-time bill statuses. Spend less time stressing and more time living — 
                we keep everything organized for you.
            </p>
        </div>
    );
};

export default Welcome;