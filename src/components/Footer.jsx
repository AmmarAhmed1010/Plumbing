import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const slideLeftIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const slideLeftOut = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const Footer = () => {
    const controls = useAnimation();
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                controls.start(slideLeftIn.visible);
            } else {
                // Scrolling up
                controls.start(slideLeftOut.hidden);
            }
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop, controls]);

    return (
        <footer className='bg-[#3896D6] py-16 md:py-24 md:pl-20 text-white'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between md:items-start md:justify-evenly items-center'>
                {/* Pages Section */}
                <motion.div
                    className='flex flex-col gap-3 items-center mb-6 md:mb-0'
                    animate={controls}
                    initial="hidden"
                    variants={slideLeftIn}
                >
                    <h1 className='text-[20px] font-bold text-white border-b-2 border-white pb-2'>
                        PAGES
                    </h1>
                    <ul className='flex flex-col gap-3 items-center text-[14.62px]'>
                        <motion.li
                            className='hover:text-blue-400 duration-300'
                            animate={controls}
                            initial="hidden"
                            variants={slideLeftIn}
                        >
                            <Link href="/">HOME</Link>
                        </motion.li>
                        <motion.li
                            className='hover:text-blue-400 duration-300'
                            animate={controls}
                            initial="hidden"
                            variants={slideLeftIn}
                        >
                            <Link href="/about">ABOUT</Link>
                        </motion.li>
                        <motion.li
                            className='hover:text-blue-400 duration-300'
                            animate={controls}
                            initial="hidden"
                            variants={slideLeftIn}
                        >
                            <Link href="/services">SERVICES</Link>
                        </motion.li>
                        <motion.li
                            className='hover:text-blue-400 duration-300'
                            animate={controls}
                            initial="hidden"
                            variants={slideLeftIn}
                        >
                            <Link href="/contact_us">CONTACT US</Link>
                        </motion.li>
                    </ul>
                </motion.div>

                {/* Logo Section */}
                <motion.div
                    className='mb-6 md:mb-0'
                    animate={controls}
                    initial="hidden"
                    variants={slideLeftIn}
                >
                    <Image
                        src="/header/logo.png" // Replace with your logo path
                        alt="WPH Plumbing Logo"
                        width={150}
                        height={50}
                    />
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    className='flex flex-col gap-3 items-center'
                    animate={controls}
                    initial="hidden"
                    variants={slideLeftIn}
                >
                    <h1 className='text-[20px] font-bold text-white border-b-2 border-white pb-2'>
                        CONTACT US
                    </h1>
                    <h3 className='text-[14.62px]'>0414 440 509</h3>
                    <h3 className='text-[14.62px]'>wphplumbing@gmail.com</h3>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
