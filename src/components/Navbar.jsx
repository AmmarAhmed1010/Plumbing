import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
            <li className={`hover:text-blue-400 duration-300 ${router.pathname === '/' ? 'text-white bg-black' : ''}`}>
              <Link href="/" onClick={closeMenu}>HOME</Link>
            </li>
            <li className={`hover:text-blue-400 duration-300 ${router.pathname === '/about' ? 'text-white bg-black' : ''}`}>
              <Link href="/about" onClick={closeMenu}>ABOUT</Link>
            </li>
            <li className={`hover:text-blue-400 duration-300 ${router.pathname === '/services' ? 'text-white bg-black' : ''}`}>
              <Link href="/services" onClick={closeMenu}>SERVICES</Link>
            </li>
            <li className={`hover:text-blue-400 duration-300 ${router.pathname === '/blog' ? 'text-white bg-black' : ''}`}>
              <Link href="/blog" onClick={closeMenu}>BLOG</Link>
            </li>
            <li className={`hover:text-blue-400 duration-300 ${router.pathname === '/contact_us' ? 'text-white bg-black' : ''}`}>
              <Link href="/contact_us" onClick={closeMenu}>CONTACT US</Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex'>
          <button className='text-black rounded-[30px] px-8 py-4 bg-white'>
            0414 440 509
          </button>
        </div>
        <div className='md:hidden text-blue-400' onClick={toggleMenu}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </div>
        <div className={`md:hidden fixed top-24 left-0 w-full bg-[#3896D6] text-white transition-all duration-700 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className='flex flex-col items-center'>
            <li className={`w-full text-center py-2 ${router.pathname === '/' ? 'text-[#2296F9] bg-[#55595C]' : ''}`}>
              <Link href="/" onClick={closeMenu}>HOME</Link>
            </li>
            <li className={`w-full text-center py-2 ${router.pathname === '/about' ? 'text-[#2296F9] bg-[#55595C]' : ''}`}>
              <Link href="/about" onClick={closeMenu}>ABOUT</Link>
            </li>
            <li className={`w-full text-center py-2 ${router.pathname === '/services' ? 'text-[#2296F9] bg-[#55595C]' : ''}`}>
              <Link href="/services" onClick={closeMenu}>SERVICES</Link>
            </li>
            <li className={`w-full text-center py-2 ${router.pathname === '/blog' ? 'text-[#2296F9] bg-[#55595C]' : ''}`}>
              <Link href="/blog" onClick={closeMenu}>BLOG</Link>
            </li>
            <li className={`w-full text-center py-2 ${router.pathname === '/contact_us' ? 'text-[#2296F9] bg-[#55595C]' : ''}`}>
              <Link href="/contact_us" onClick={closeMenu}>CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
