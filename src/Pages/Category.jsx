import React from 'react';

const Category = () => {
    return (
        <div className='my-30 '>
            <h1 className='text-center text-4xl mb-15 font-semibold text-primary'>Category Of Our Utilities</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-10  md:ml-40   w-11/12 mx-auto '>

     <div className="card bg-base-100 w-70 shadow-2xl  hover:scale-105
         transition ease-in-out border-0">
  <figure>
    <img
      src="/el.jpg"
      className='object-cover h-[150px] w-[250px] mt-2 rounded-2xl'
      alt="electricity" />
  </figure>
  <div className="card-body flex-grow">
    <h2 className="card-title">
      Electricity
     <img src="/electricity.png" alt="" className='w-[30px] h-[30px]' />
    </h2>
    <p>Manage and pay your electricity bills effortlessly. Stay updated on your power usage and due dates</p>
   
  </div>
  </div>    
            
     <div className="card bg-base-100 w-70 shadow-xl border-0 hover:scale-105
         transition ease-in-out ">
  <figure>
    <img
      src="/ga.webp"
      className='object-cover h-[150px] w-[250px] mt-2 rounded-2xl'
      alt="Gas" /> 
  </figure>
  <div className="card-body flex-grow">
    <h2 className="card-title">
      Gas
      <img src="/gas.jpg" alt="" className='w-[30px] h-[30px]' />
    </h2>
    <p>Easily track and pay your gas bills while monitoring your monthly consumption</p>
    
  </div>
   </div>  

     <div className="card bg-base-100 w-70 shadow-xl border-0 hover:scale-105
         transition ease-in-out">
  <figure>
    <img
      src="/water.webp"
      className='object-cover h-[150px] w-[250px] mt-2 rounded-2xl'
      alt="Water" />
  </figure>
  <div className="card-body flex-grow">
    <h2 className="card-title">
      Water
      <img src="/water.png" alt="" className='w-[20px] h-[30px]' />
    </h2>
    <p>"Keep your water bills organized and ensure timely payments to avoid service interruptions</p>
    
  </div>
            </div>    
     <div className="card bg-base-100 w-70 shadow-xl border-0 hover:scale-105
         transition ease-in-out">
  <figure>
    <img
      src="/wifi.jpg"
      className='object-cover h-[150px] w-[250px] mt-2 rounded-2xl'
      alt="Internet" />
  </figure>
  <div className="card-body flex-grow">
    <h2 className="card-title">
      Internet
      <img src="/internet.jpg" alt="" className='w-[30px] h-[30px]' />
    </h2>
    <p>View and manage your internet service bills all in one convenient place</p>
    
  </div>
            </div>    
            </div>
        </div>
    );
};

export default Category;