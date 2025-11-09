import React from 'react';
import { Link, NavLink } from 'react-router';
import MyLink from '../Utility/MyLink';

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm bg-gradient-to-r from-[#A1C4FD]/50 to-[#FDB99B]/50 shadow-sm '>
          <div className="navbar mx-auto max-w-7xl  bg-opacity-80 px-4 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <MyLink className={'text-xl font-bold'} to={'/'}>Home</MyLink>
      <MyLink className={'text-xl font-bold'} to={'/bills'}>Bills</MyLink>
      <MyLink className={'text-xl font-bold'} to={'/myPayBills'}>My Pay Bills</MyLink>
      </ul>
    </div>
   <Link to={"/"}>
    <img src="/billease-min.png" className='h-[70px] w-[70px]' alt="" />
   </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
      <MyLink className={'text-xl font-bold'} to={'/'}>Home</MyLink>
      <MyLink className={'text-xl font-bold'} to={'/bills'}>Bills</MyLink>
      <MyLink className={'text-xl font-bold'} to={'/myPayBills'}>My Pay Bills</MyLink>
      
    </ul>
  </div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src=''
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">name</li>
                <li className="text-xs">name</li>
              </div>
             
            </ul>
          </div>
    <a className="btn">Button</a>
  </div>
            </div>
        </div>
    );
};

export default Navbar;