import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full px-6 py-4 bg-gray-900'>
      <div className='flex justify-between 2xl:justify-evenly items-center'> 
      <div className='text-white'>
        <Image
          src="/header/logo.png"
          alt="Logo"
          width={86}
          height={100}
        />
      </div>
      <div className='hidden md:flex text-white justify-center'>
        <ul className='flex gap-16 text-sm font-bold'>
          <li className='hover:text-blue-400 duration-300'>
            <Link href="/">HOME</Link>
          </li>
          <li className='hover:text-blue-400 duration-300'>
            <Link href="/about">ABOUT</Link>
          </li>
          <li className='hover:text-blue-400 duration-300'>
            <Link href="/services">SERVICES</Link>
          </li>
          <li className='hover:text-blue-400 duration-300'>
            <Link href="/blog">BLOG</Link>
          </li>
          <li className='hover:text-blue-400 duration-300'>
            <Link href="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div className='hidden md:flex'>
        <button className='text-black rounded-[30px] px-8 py-4 bg-white'> 
          0414 440 509
        </button>
      </div>
      <div className='md:hidden text-white' onClick={toggleMenu}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
        </svg>
      </div>
      {isOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white'>
          <ul className='flex flex-col items-center gap-4 py-4'>
            <li className='hover:text-blue-400 duration-300'>
              <Link href="/">HOME</Link>
            </li>
            <li className='hover:text-blue-400 duration-300'>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className='hover:text-blue-400 duration-300'>
              <Link href="/services">SERVICES</Link>
            </li>
            <li className='hover:text-blue-400 duration-300'>
              <Link href="/blog">BLOG</Link>
            </li>
            <li className='hover:text-blue-400 duration-300'>
              <Link href="/contact">CONTACT US</Link>
            </li>
            <li className='hover:text-blue-400 duration-300'>
              <button className='text-black rounded-[30px] px-8 py-4 bg-white'>
                0414 440 509
              </button>
            </li>
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default Navbar;
