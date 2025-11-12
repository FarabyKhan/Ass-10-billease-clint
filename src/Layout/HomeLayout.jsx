import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import LoadingElements from '../Utility/LoadingElements';


const HomeLayout = () => {
    return (
        <div className='mx-auto'>
                <LoadingElements>
                    <nav className=''>
                    <Navbar></Navbar>
                </nav>

                <main className='min-h-screen mx-auto'>
                    <Outlet></Outlet>
                </main>

                <footer>
                    <Footer></Footer>
                </footer>
                </LoadingElements>
            
        </div>
    );
};

export default HomeLayout;