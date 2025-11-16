import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import MyLink from '../Utility/MyLink';
import { AuthContext } from '../Provider/AuthContext';
import { FaUser } from 'react-icons/fa';
import { HashLoader } from 'react-spinners';


const Navbar = () => {

  const { user, signOutUser, loading } = use(AuthContext)

  const links = <>
    <MyLink className={'text-xl font-bold'} to={'/'}> Home</MyLink>
    <MyLink className={'text-xl font-bold'} to={'/bills'}>Bills</MyLink>
    <MyLink className={'text-xl font-bold'} to={'/myPayBills'}>My Pay Bills</MyLink>
    <MyLink className={'text-xl font-bold'} to={'/my-Profile'}>My Profile</MyLink>
  </>

  const handleSignOut = () => {
    signOutUser()
      .then(result => {
        console.log(result.user);

      })
      .catch(error => {
        console.log(error);

      })
  }

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
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow bg-transparent backdrop-blur-sm bg-gradient-to-r from-[#A1C4FD]/50 to-[#FDB99B]/50 shadow-sm">
              {links}
            </ul>
          </div>
          <Link to={"/"} className='flex justify-center items-center gap-1 '>
           <h1 className='text-4xl font-bold  text-[#191186]'>bill<span className='text-4xl
            text-[#DC143C]'>ease</span></h1>
            <img src="/billease.svg" alt="" className= 'h-[50px] w-[50px]' />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {loading ? <HashLoader /> :
            (user ? (
              <div className='flex justify-between items-center gap-3'>
                <div className="dropdown dropdown-end z-50 ">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-9 border-2 border-gray-300 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        referrerPolicy="no-referrer"
                        src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                  >
                    <div className=" pb-3 border-b border-b-gray-200">
                      <li className="text-sm font-bold">{user?.displayName}</li>
                      <li className="text-xs">{user?.email}</li>
                    </div>
                    <li className="mt-1">
                      <Link to={"/myProfile"}>
                        <FaUser /> My Profile
                      </Link>
                    </li>
                  <li className='mt-1'>
                    <button onClick={handleSignOut} className='btn btn-primary'>Logout</button>
                  </li>
                  </ul>
                </div>
                
              </div>
            ) :

              (<div className='flex justify-between items-center gap-3'>
                <Link to={'/auth/login'} className='btn btn-primary'>Login</Link>
                <Link to={'/auth/register'} className='btn border-secondary text-secondary '>Register</Link>
              </div>)

            )}





        </div>
      </div>
    </div>
  );
};

export default Navbar;