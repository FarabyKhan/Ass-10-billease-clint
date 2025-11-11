import React from 'react';
import HeroSection from '../Components/HeroSection';
import Category from './category';
import LatestBills from './LatestBills';

const latestBillsPromise = fetch('http://localhost:3000/latest-bills').then(res=> res.json())
const Home = () => {
    return (
        <div className='min-h-screen mx-auto'>
          <HeroSection></HeroSection>
          <Category></Category>
          <LatestBills  latestBillsPromise={latestBillsPromise}></LatestBills>
        </div>
    );
};

export default Home;