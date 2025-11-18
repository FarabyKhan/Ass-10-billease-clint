import React from 'react';
import { IoStarSharp } from 'react-icons/io5';



const Review = () => {

    const reviews =[
        {
         id: 1,
         name: "Shahinul Islam",
         img: "/rev1.jpeg",
          rating: 5,
         text: "Amazing service! Paying bills has never been this easy",
        },
        {
         id: 2,
         name: "Shahinul Islam",
         img: "/rev2.jpeg",
          rating: 5,
         text: "Very simple interface and fast payment confirmation!",
        },
        {
         id: 3,
         name: "Shahinul Islam",
         img: "/rev3.png",
          rating: 5,
         text: "Loved the clean design and quick response system.",
        },

    ]

    return (
        <div className='mt-30 px-5 w-11/12 '>
            <h1 className='text-center text-4xl text-primary font-bold '>What Our Users Says</h1>
            <p className='text-center mt-2 mb-10'>Real review from our satisfied users</p>

            <div className='grid grid-cols-1 md:grid-cols-3 w-11/12  gap-6 mx-auto md:mx-30 bg-secondary p-5 rounded-2xl'>
                {
                    reviews.map(review=>(
                        <div key={review.id} className="card w-full card-md shadow-sm bg-blue-200 ">
                        <div className="card-body ">
                            <div className='flex items-center gap-3'>
                                <img src={review.img} className='w-10 h-10 rounded-full object-cover ' alt="" />
                            <h2 className="card-title text-gray-700">{review.name}</h2>
                            </div>
                            <p className='text-yellow-500 '>{ "⭐".repeat(review.rating) }</p>
                            <p className='my-3 font-bold text-sm text-gray-700'>{review.text}</p>
                            <div className="justify-end card-actions">
                            
                            </div>
                        </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default Review;