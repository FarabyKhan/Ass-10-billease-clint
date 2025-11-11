import React from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';
import { TbCategory } from "react-icons/tb";


const LatestBillsCard = ({bills}) => {
    const {image,title, category, location, date} = bills;
    return (
        <div className="card border bg-base-100 w-11/12 shadow-sm hover:scale-105
         transition ease-in-out ">
  <figure>
    <img
    className='w-full h-[250px] object-cover'
      src={image}
      alt={category} />
  </figure>
  <div className="card-body space-y-3">
    <h2 className="card-title text-xl">
      {title}
    </h2>

     <div className='flex justify-center items-center '>
      <p className="font-semibold text-lg my-2 flex items-center gap-1 text-accent"> <TbCategory />Category :<span className='text-primary'>{category}
          </span></p>
      <p className='font-semibold text-lg my-2 text-center flex items-center gap-1 text-accent'><SlCalender />Date: <span className='text-red-500'>{date}</span></p>
     </div>
     <p className='font-semibold text-lg my-2 text-center flex items-center gap-1 text-accent'><FaLocationDot />Location: <span className='text-black'>{location}</span></p>
    <button className='btn btn-primary '><CgDetailsMore /> See Details</button>
  </div>
</div>
    );
};

export default LatestBillsCard;