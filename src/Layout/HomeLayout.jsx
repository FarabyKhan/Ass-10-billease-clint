import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';

const HomeLayout = () => {
    return (
        <div className='mx-auto'>
            <nav className=''>
                <HeroSection></HeroSection>
                <Navbar></Navbar>
            </nav>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
               <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;