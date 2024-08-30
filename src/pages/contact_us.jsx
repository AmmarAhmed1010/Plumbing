import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

const contact_us = () => {
  return (
    <>
      <section
        className='w-full py-12'
        style={{
          backgroundImage: 'url(/index/contact.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Navbar />
        <div className='container items-center flex flex-col mt-8'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='flex flex-col text-white mb-4'
          >
            <h1 className='text-5xl font-serif font-extrabold'>CONTACT US</h1>
          </motion.div>
        </div>
      </section>

      {/* section1 */}
      <section className='flex justify-center items-center w-full bg-[#3896D60F]'>
        <div className="wrapper w-full flex flex-col justify-center items-center my-6 mx-6 md:mx-12 lg:mx-20 lg:flex-row">
          <div className="left w-full md:w-[462px] h-[60vh] md:h-[315px] lg:h-full flex justify-center items-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className='px-6 text-start lg:text-left'
            >
              <h1 className='text-[#3896D6] font-extrabold text-[32px] mb-6 md:text-[36px] lg:text-[41px]'>GET IN TOUCH</h1>
              <p className='text-[14px] md:text-[16px] mb-4 md:mb-6'>Hello fellow tap users Its Will from WPH Plumbing here</p>
              <p className='text-[14px] md:text-[16px]'>
                If you are looking for an honest and trustworthy plumber in Palm Beach then look no further than WPH Plumbing In fact WPH Plumbing is more than just your average plumber in Palm Beach we are a global phenomenon servicing places like Milan Venice Paris Barcelona but mainly the Gold Coast of Queensland So if you need any help with your plumbing and you live in any of these locations but mainly the Gold Coast dont hesitate to call us we are more than happy to help
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="right mx-6 py-6 h-auto md:h-[454px] px-6 md:px-10 rounded-3xl w-full md:w-[573px] flex items-center"
          >
            <div className="wrapper w-full flex flex-col gap-4">
              <input className='w-full px-4 h-[52px] md:h-[62px] rounded-xl bg-[#DADADA]' type="text" placeholder='Name' />
              <input className='w-full px-4 h-[52px] md:h-[62px] rounded-xl bg-[#DADADA]' type="text" placeholder='Email'/>
              <input className='w-full px-4 h-[105px] md:h-[155px] rounded-xl bg-[#DADADA]' type="text" placeholder='Message'/>
              <div className='w-full flex justify-end'>
                <button className='w-[120px] md:w-[148px] rounded-3xl bg-[#3896D6] h-[40px] md:h-[42.95px]'>
                  <h3 className='text-[12px] md:text-[14px] text-white'>SUBMIT</h3>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* section2 */}
      <section className='w-full'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='flex w-full'
        >
          <Image
            src="/contact/contact1.png"
            alt="Plumbing Service Image"
            width={500}
            height={500}
            className='w-full'
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      </section>
    </>
  )
}

export default contact_us
