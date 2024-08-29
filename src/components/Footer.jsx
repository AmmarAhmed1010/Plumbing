import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='bg-[#3896D6] py-16 md:py-24 md:pl-20 text-white'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between md:items-start md:justify-evenly items-center'>
                {/* Pages Section */}
                <div className='flex flex-col gap-3 items-center mb-6 md:mb-0'>
                    <h1 className='text-[20px] font-bold text-white border-b-2 border-white pb-2'>
                        PAGES
                    </h1>
                    <ul className='flex flex-col gap-3 items-center text-[14.62px]'>
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
                            <Link href="/contact_us">CONTACT US</Link>
                        </li>
                    </ul>
                </div>

                {/* Logo Section */}
                <div className='mb-6 md:mb-0'>
                    <Image
                        src="/header/logo.png" // Replace with your logo path
                        alt="WPH Plumbing Logo"
                        width={150}
                        height={50}
                    />
                </div>

                {/* Contact Section */}
                <div className='flex flex-col gap-3 items-center'>
                    <h1 className='text-[20px] font-bold text-white border-b-2 border-white pb-2'>
                        CONTACT US
                    </h1>
                    <h3 className='text-[14.62px]'>0414 440 509</h3>
                    <h3 className='text-[14.62px]'>wphplumbing@gmail.com</h3>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
