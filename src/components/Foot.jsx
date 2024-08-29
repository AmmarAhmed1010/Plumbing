import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className='bg-[#1C285D] text-white py-8'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    {/* Logo */}
                    <div className='mb-4 sm:mb-0'>
                        <Image
                            src="/header/logo.png" // Replace with your logo path
                            alt="WPH Plumbing Logo"
                            width={150}
                            height={50}
                        />
                    </div>

                    {/* Navigation Links */}
                     <nav className='flex flex-col sm:flex-row gap-4 mb-4 sm:mb-0'>
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
            <Link href="/contact_us">CONTACT US</Link>
          </li>
        </ul>
                    </nav> 

                    {/* Contact Information */}
                    <div className='text-center sm:text-right'>
                        <p className='mb-2'>Call Us: <a href="tel:0414440509" className='hover:underline'>0414 440 509</a></p>
                        <p className='mb-2'>Email: <a href="mailto:info@wphplumbing.com.au" className='hover:underline'>info@wphplumbing.com.au</a></p>
                        <p>Address: 123 Plumbing Street, Gold Coast, QLD</p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className='flex justify-center gap-4 mt-4'>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/path/to/facebook-icon.png" // Replace with your social media icon paths
                            alt="Facebook"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/path/to/twitter-icon.png" // Replace with your social media icon paths
                            alt="Twitter"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/path/to/instagram-icon.png" // Replace with your social media icon paths
                            alt="Instagram"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};


export default Footer
