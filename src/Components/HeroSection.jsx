import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AuthContext } from '../Provider/AuthContext';
import { useNavigate } from 'react-router';



  const slides = [

    {
      img: "/1.jpg",
      title:"Simply Your Bill Payments",
      text: "Manage electricity, gas, water and internet bills-all in one place"
    },
    {
      img: "/2.jpg",
      title: "Fast & Secure Transactions",
      text:  "Experience lightning-fast payments with trusted security layers.",
    },
    {
      img: "/3.jpg",
      title: "Fast & Secure Transactions",
      text:  "Experience lightning-fast payments with trusted security layers.",
    },
    {
      img: "/4.jpg",
      title: "Track All Your Bills Easily",
      text: "Stay updated with your latest bills and payment history.",
    },
    {
      img: "/5.jpg",
      title: "Save Time, Stay Connected",
      text: "Spend less time on bills and more on what truly matters.",
    },


  ]

const HeroSection = () => {
 const { user } =use(AuthContext)
 
 const navigate = useNavigate()

 const handlePayNow=()=>{
  if(user){
    navigate("/bills")
  }
  else{
    navigate("/auth/login")
  }
 }
  

    return (
        <div className='w-full h-[50vh] md:h-[70vh] lg:h-[80vh]  overflow-hidden my-20 md:my-5'>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {

          slides.map((slide, index)=>(
            <SwiperSlide key={index} >
            <div className='relative w-full h-full'>
              <img src={slide.img}  className='w-full h-[50vh] md:h-[7vh] lg:h-[80vh] object-cover object-center brightness-[0.6]' alt={slide.title} />
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4'>
              <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg'>
              {slide.title}
              </h2>
              <p className='mt-3 text-sm md:text-lg max-w-xl'>
                {slide.text}
              </p>
              <button onClick={handlePayNow} className='btn btn-primary mt-5 text-white font-semibold px-5 py-2 rounded-full hover:scale-105 transition '>
                Pay Now
              </button>
            </div>
             
        </SwiperSlide>
          ))

        }
        
      </Swiper>
        </div>
    );
};

export default HeroSection;