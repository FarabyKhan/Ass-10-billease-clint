import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const HeroSection = () => {
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
        <SwiperSlide >
            <img src="/1.jpg"  className='w-[100px] md:w-[200px] lg:w-full h-[100px] md:h-[200px] lg:h-full object-cover object-center' alt="" />
             
        </SwiperSlide>

        <SwiperSlide >
            <img src="/2.jpg"  className='w-[100px] md:w-[200px] lg:w-full h-[100px] md:h-[200px] lg:h-full object-cover object-center' alt="" />
        </SwiperSlide>

        <SwiperSlide >
            <img src="/3.jpg"  className='w-[100px] md:w-[200px] lg:w-full h-[100px] md:h-[200px] lg:h-full object-cover object-center' alt="" />
        </SwiperSlide>

        <SwiperSlide >
            <img src="/4.jpg"  className='w-[100px] md:w-[200px] lg:w-full h-[100px] md:h-[200px] lg:h-full object-cover object-center' alt="" />
        </SwiperSlide>

        <SwiperSlide >
            <img src="/5.jpg"  className='w-[100px] md:w-[200px] lg:w-full h-[100px] md:h-[200px] lg:h-full object-cover object-center' alt="" />
        </SwiperSlide>
        
        
      </Swiper>
        </div>
    );
};

export default HeroSection;