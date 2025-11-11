import React from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { FaBangladeshiTakaSign, FaLocationDot } from 'react-icons/fa6';
import { TbCategory, TbCoinTakaFilled, TbCurrencyTaka } from 'react-icons/tb';

const BillsCard = ({bill}) => {
    const {image,title, category, location, amount} = bill;
    return (
        <div className="card  bg-base-100 w-11/12 shadow-sm rounded-2xl hover:scale-105
                 transition ease-in-out ">
          <figure>
            <img
            className='w-full h-[250px] object-cover'
              src={image}
              alt={category} />
          </figure>
          <div className="card-body  space-y-1">
            <h2 className="card-title font-bold text-2xl my-5">
              {title}
            </h2>
        
             <div className='flex justify-center items-center '>
              <p className="font-semibold text-lg my-1 flex items-center gap-1 text-accent"> <TbCategory />Category :<span className='text-primary'>{category}
                  </span></p>
             </div>
             <p className='font-semibold text-lg my-1 text-center flex items-center gap-1 text-accent'><FaLocationDot />Location: <span className='text-black'>{location}</span></p>
             <p className='font-semibold text-xl my-2 text-center flex items-center  text-accent'>Amount:<span className='text-2xl'><TbCurrencyTaka /></span><span className='text-green-700 '>{amount}</span></p>    
          </div>     
          <button className='btn btn-primary py-3 rounded-xl'><CgDetailsMore /> See Details</button>                 
        </div>
    );
};

export default BillsCard;