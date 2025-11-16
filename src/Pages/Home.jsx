import React from 'react';
import HeroSection from '../Components/HeroSection';
import LatestBills from './LatestBills';
import Category from './Category';
import Welcome from './Welcome';

const latestBillsPromise = fetch('http://localhost:3000/latest-bills').then(res=> res.json())
const Home = () => {
    return (
        <div className='min-h-screen mx-auto '>
          <HeroSection></HeroSection>
          <Welcome></Welcome>
          <Category></Category>
          <LatestBills latestBillsPromise={latestBillsPromise}></LatestBills>
        </div>
    );
};

export default Home;