import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const AuthLayout = () => {
    return (
        <div>
           <nav>
            <Navbar></Navbar>
           </nav>
           <main className='min-h-screen mx-auto'>
            <Outlet></Outlet>
           </main>
           <Footer></Footer>
        </div>
    );
};

export default AuthLayout;