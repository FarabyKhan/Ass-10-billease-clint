import React, { use } from 'react';
import LatestBillsCard from './LatestBillsCard';

const LatestBills = ({latestBillsPromise}) => {
    const filteredBills = use(latestBillsPromise)
    console.log(filteredBills);
    
    return (
        <div>
            
            <div className='w-11/12 mx-auto my-10 '>
            <h1 className='text-center text-4xl mb-15 font-semibold text-primary'>Check Out Our Latest Bills</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    filteredBills.map(bills=> <LatestBillsCard key={bills._id} bills={bills}></LatestBillsCard>)
                }
            </div>
            </div>


        </div>
    );
};

export default LatestBills;