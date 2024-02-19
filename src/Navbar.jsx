import React from 'react';
import organicLogo from "./assets/oraganic.png";


const Navbar = () => {
  return (
    <>
      <nav className='w-full h-20 shadow-md dark:text-black flex items-center justify-between px-6'>
        <img src={organicLogo} alt="Organic Logo" className='w-16 h-16'/>
        <div className='flex items-center gap-14'>
          <a className='text-center cursor-pointer'>Home</a>
          <a className='text-center cursor-pointer'>Products</a>
          <a className='text-center cursor-pointer'>About</a>
          <a className='text-center cursor-pointer'>Account</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
