import React from 'react';
import HeroSection from '../Components/HeroSection';
import LatestBills from './LatestBills';
import Category from './Category';
import Welcome from './Welcome';
import Review from './Review';

const latestBillsPromise = fetch('http://localhost:3000/latest-bills').then(res=> res.json())
const Home = () => {
    return (
        <div className='min-h-screen mx-auto '>
          <HeroSection></HeroSection>
          <Welcome></Welcome>
          <Category></Category>
          <LatestBills latestBillsPromise={latestBillsPromise}></LatestBills>
          <section className='my-30 '>
            <Review></Review>
          </section>
        </div>
    );
};

export default Home;