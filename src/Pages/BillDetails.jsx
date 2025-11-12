import React, { useEffect, useState } from 'react';
import { data, useLoaderData, useParams } from 'react-router';
import LoadingElements from '../Utility/LoadingElements';

// loader:({params})=> fetch(`http://localhost:3000/bills/${params.id}`),



const BillDetails = () => {
    const  { id } = useParams()
const [bill, setBill] = useState({});
const [loading, setLoading] = useState({})
    
    useEffect(()=>{
        fetch(`http://localhost:3000/bills/${id}`)
        .then(res=> res.json())
        .then(data=> {  
            console.log(data);
            setBill(data)
            setLoading(false)
        })
    },[id])
    
    const {image, title, location, category, amount, description, date} = bill

    if(loading)
        return <LoadingElements></LoadingElements>

    const categoryLogos ={
        Electricity: "https://i.ibb.co.com/B2stTmLb/electricity.png",
        Gas: "https://i.ibb.co.com/845j38Vy/gas.jpg",
        Water: "https://i.ibb.co.com/gNRK0Gg/water.png",
        Internet: "https://i.ibb.co.com/Kj49dtX1/internet.jpg"
    }

    const categoryLogo = categoryLogos[category] || ""


    return (
        <div className='min-h-screen my-30'>
    <div className="flex flex-col md:flex-row justify-center items-center bg-base-100 shadow-sm gap-15">
  <figure>
    <img
    className='h-[450px] w-[450px] object-cover mt-5'
      src={image}
      alt={category} />
  </figure>
  <div className="flex flex-col items-start space-y-3 my-20">
    <div className='space-y-3 flex justify-center items-center gap-2'>
        <img src={categoryLogo} className='w-[50px] h-[50px] mt-4' alt={category}  />
        <h2 className="card-title text-4xl text-accent"> {title}</h2>
    </div>
    <div className='w-full border-b border-primary  space-y-5 pb-10 '>
        <p className='text-start text-accent text-xl font-semibold flex justify-center items-center gap-3'><img src="/category.png" alt="" className='w-[30px] h-[30px]'/>Category:<span className='text-primary'>{category}</span></p>

    <p className='text-start text-accent text-xl font-semibold flex justify-center items-center gap-3'><img src="/location.png" alt="" className='w-[30px] h-[30px]'/>Location:<span>{location}</span></p>
    </div>
     
    <div className="card-actions flex flex-row justify-between items-center mx-20 gap-35">
       <p className='text-start text-accent text-xl font-semibold flex justify-center items-center gap-3'><img src="/tk.png" alt="" className='w-[30px] h-[30px]'/><span className='text-green-600'>{amount}</span></p>
       <p className='text-start text-accent text-xl font-semibold flex justify-center items-center gap-3'><img src="/calendr.png" alt="" className='w-[30px] h-[30px]'/><span className='text-red-500'>{date}</span></p>

         </div>
    <div className="card-actions my-10">
       <button className="btn btn-primary mx-20 w-80">Pay Bill</button>
         </div>
        
        </div>
        
        </div>
        <div className=" border-t border-base-300 pt-8 mx-10 my-20">
            <h1 className='text-2xl font-bold text-accent mb-3 text-center md:text-left'>Description</h1>
        <p className='text-gray-600 leading-relaxed text-justify'>{description}</p>
        </div>
        </div>
    );
};

export default BillDetails;