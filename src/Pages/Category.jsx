import React from 'react';

const Category = () => {
    return (
        <div className='my-30'>
            <h1 className='text-center text-4xl mb-15 font-semibold text-primary'>Category Of Our Utilities</h1>
            <div className='flex justify-center items-center  gap-25 '>

     <div className="card bg-base-100 w-72 shadow-lg  hover:scale-105
         transition ease-in-out border">
  <figure>
    <img
      src="/el.jpg"
      className='object-cover h-[150px] w-[250px] mt-2'
      alt="electricity" />
  </figure>
  <div className="card-body flex-grow">
    <h2 className="card-title">
      Electricity
     
    </h2>
    <p>Manage and pay your electricity bills effortlessly. Stay updated on your power usage and due dates</p>
   
  </div>
  </div>    
            
     <div className="card bg-base-100 w-70 shadow-sm border hover:scale-105
         transition ease-in-out ">
  <figure>
    <img
      src="/ga.webp"
      className='object-cover h-[150px] w-[250px] mt-2'
      alt="Gas" /> 
  </figure>
  <div className="card-body flex-grow">
    <h2 className="card-title">
      Gas
     
    </h2>
    <p>Easily track and pay your gas bills while monitoring your monthly consumption</p>
    
  </div>
   </div>  

     <div className="card bg-base-100 w-70 shadow-sm border hover:scale-105
         transition ease-in-out">
  <figure>
    <img
      src="/water.webp"
      className='object-cover h-[150px] w-[250px] mt-2'
      alt="Water" />
  </figure>
  <div className="card-body flex-grow">
    <h2 className="card-title">
      Water
      
    </h2>
    <p>"Keep your water bills organized and ensure timely payments to avoid service interruptions</p>
    
  </div>
            </div>    
     <div className="card bg-base-100 w-70 shadow-sm border hover:scale-105
         transition ease-in-out">
  <figure>
    <img
      src="/wifi.jpg"
      className='object-cover h-[150px] w-[250px] mt-2'
      alt="Internet" />
  </figure>
  <div className="card-body flex-grow">
    <h2 className="card-title">
      Internet
      
    </h2>
    <p>View and manage your internet service bills all in one convenient place</p>
    
  </div>
            </div>    
            </div>
        </div>
    );
};

export default Category;