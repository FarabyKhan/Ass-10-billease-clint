import React from 'react';
import { FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <aside>
    <div  className='flex justify-center items-center gap-1 '>
           <h1 className='text-4xl font-bold  text-[#2d20e7]'>bill<span className='text-4xl
            text-[#DC143C]'>ease</span></h1>
            <img src="/billease.svg" alt="" className= 'h-[50px] w-[50px]' />
          </div>
    <p>
      
      Providing reliable billing site since 2012
    </p>
  </aside>

      <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Showing Bills</a>
    <a className="link link-hover">Organize</a>
    <a className="link link-hover">Online Payment</a>
    <a className="link link-hover">Keep Record</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
  </nav>

  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        
          <FaXTwitter size={25} />
        
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
                </footer>
  <footer className="footer bg-black sm:footer-horizontal footer-center text-white  p-4 ">
    <aside >
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;