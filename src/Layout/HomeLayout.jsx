import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const HomeLayout = () => {
    return (
        <div className='mx-auto'>
            <nav className=''>
                <Navbar></Navbar>    
            </nav>

            <main className='min-h-screen mx-auto'>
                <Outlet></Outlet>
            </main>

            <footer>
               <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;