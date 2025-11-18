import React from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { FaLocationDot } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';
import { TbCategory } from "react-icons/tb";
import { Link } from 'react-router';


const LatestBillsCard = ({bills}) => {
    const {_id, image,title, category, location, date} = bills;
    return (
        <div className="card  rounded-2xl bg-base-100 w-11/12 shadow-sm hover:scale-105
         transition ease-in-out ">
  <figure>
    <img
    className='w-full h-[350px] object-cover'
      src={image}
      alt={category} />
  </figure>
  <div className="card-body space-y-3">
    <h2 className="card-title font-bold text-xl md:text-2xl my-5 ">
      {title}
    </h2>

     <div className='flex flex-col md:flex-row justify-center gap-0 md:gap-5 items-center '>
      <p className="font-semibold text-lg my-2 flex items-center gap-1 text-accent"> <TbCategory />Category :<span className='text-primary'>{category}
          </span></p>
      <p className='font-semibold text-lg my-2 text-center flex items-center gap-1 text-accent'><SlCalender />Date: <span className='text-red-500'>{date}</span></p>
     </div>
     <p className='font-bold text-sm md:text-xl my-2 text-center flex items-center gap-1 text-accent'><FaLocationDot />Location: <span >{location}</span></p>
    
  </div>   
  <Link to={`/billDetails/${_id}`} className='btn btn-primary py-3 rounded-xl'><CgDetailsMore /> See Details</Link>                   
</div>
                        
    );
};

export default LatestBillsCard;