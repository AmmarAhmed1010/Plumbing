import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

// Reusing the same animation variants from Services page
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
}

const slideIn = (direction = 'left') => ({
  hidden: { x: direction === 'left' ? -50 : 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } }
})

const About = () => {
  return (
    <>
      <section
        className='w-full py-12'
        style={{
          backgroundImage: 'url(/index/home.png)',
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
            <h1 className='text-5xl font-serif font-extrabold'>ABOUT US</h1>
          </motion.div>
        </div>
      </section>


      {/* Section 1 */}
      <motion.section
        className='px-4 py-6 md:px-8 md:py-12 lg:px-16'
        initial="hidden"
        whileInView="visible"
        variants={slideIn('left')}
      >
        <div className="wrapper flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="left w-full md:w-1/2">
            {/* Left side content (if any) */}
          </div>
          <motion.div className="right w-full md:w-1/2" variants={fadeIn}>
            <motion.h1 className='text-[#3896D6] font-extrabold text-2xl md:text-[41px]' variants={fadeIn}>
              A BACK STORY
            </motion.h1>
            <motion.p className='text-[14px] md:text-[16px]' variants={fadeIn}>
              WPH Plumbing was born 7 years ago with a vision to provide quality plumbing services to the people of the Gold Coast and Northern NSW. Will loves his family and the outdoor life, if he isn&apos;t waist-deep in a hole you can find him camping or more than likely catching some waves. His love and commitment to his family and friends extend to his clients with each of his clients becoming a part of the WPH family.
            </motion.p>
            <motion.p className='text-[14px] md:text-[16px]' variants={fadeIn}>
              The daily challenges and diversity of plumbing is what inspires Will each and every day. Will is extremely excited to grow his business with the employment of his first apprentice Connor joining WPH. Will enjoys teaching the dark art of plumbing to Connor but more importantly also having someone there to dig the holes.
            </motion.p>
            <div className='w-full flex justify-end'>
              <motion.button className='bg-[#3896D6] text-white text-[14px] md:text-[16px] font-bold rounded-3xl h-[56px] px-8' variants={fadeIn}>
                CONTACT US
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        className='px-6 py-6 bg-[#3896D6] w-full'
        initial="hidden"
        whileInView="visible"
        variants={slideIn('left')}
      >
        <motion.div className="wrapper text-center flex flex-col gap-6" variants={fadeIn}>
          <motion.p className='text-[16px] text-white' variants={fadeIn}>
            WPH Plumbing is your trusted and reliable plumbing partner in the Gold Coast area. Our team of experienced and knowledgeable professionals is dedicated to providing quality service to all our clients. As a local business born and raised in the community, we take pride in serving our neighbors and providing them with top-notch plumbing solutions.
          </motion.p>
          <motion.p className='text-[16px] text-white' variants={fadeIn}>
            We understand that plumbing emergencies can happen at any time, and that&apos;s why we offer 24/7 services to ensure that our clients are always covered, no matter the time of day. Our team is always available to take your call and dispatch our skilled technicians to your location as quickly as possible to resolve your plumbing issues in a timely and efficient manner.
          </motion.p>
          <motion.p className='text-[16px] text-white' variants={fadeIn}>
            As Currumbin&apos;s preferred plumber, our team has extensive experience dealing with the unique plumbing challenges that homeowners and businesses in the area face. From fixing a leaky faucet to undertaking major plumbing projects, we have the expertise to handle any plumbing job that comes our way, regardless of its complexity.
          </motion.p>
          <motion.p className='text-[16px] text-white' variants={fadeIn}>
            At WPH Plumbing, we&apos;re all about building relationships with our clients. We know that trust, honesty, and transparency are crucial in building a lasting relationship, and we&apos;re committed to embodying these values in all our interactions. Our personalized approach to every job means we take time to understand your unique needs, find the perfect solution for you, and communicate effectively throughout the process.
          </motion.p>
          <motion.p className='text-[16px] text-white' variants={fadeIn}>
            We&apos;re dedicated to staying up to date with the latest advancements in the industry, and that&apos;s why our technicians are equipped with the most advanced tools and technology in the market to deliver cutting-edge services to our clients. We&apos;re always striving to exceed our clients&apos; expectations, and we never compromise on the quality of service we deliver.
          </motion.p>
          <motion.p className='text-[16px] text-white' variants={fadeIn}>
            Thank you for considering WPH Plumbing for your plumbing needs. Whether you&apos;re facing a minor plumbing issue or a major emergency, we&apos;re always ready to provide you with high-quality service that will keep you satisfied. Don&apos;t hesitate to contact us to schedule an appointment or speak with one of our friendly team members.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Section 3 */}
      <section className='w-full px-4 py-6 md:px-8 md:py-12 lg:px-16'>
        <div className="heading w-full text-center py-4">
          <h1 className='text-[#3896D6] font-extrabold text-[24px] md:text-[36px] lg:text-[41px]'>MEET THE TEAM</h1>
        </div>

        <div className="up gap-8 md:gap-12 lg:gap-20 py-6 flex flex-col justify-center items-center md:flex-row">
          <motion.div
            className='flex-shrink-0'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/about/about3.png"
              alt="Will Hancock"
              width={407}
              height={352}
              layout="intrinsic"
              objectFit="cover"
              quality={75}
              priority={true}
            />
          </motion.div>
          <motion.div
            className="content flex flex-col gap-4 md:gap-5 w-full md:w-[595px] text-center md:text-left px-4 md:px-0"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-[#3896D6] font-extrabold text-[20px] md:text-[24px]'>Will Hancock</h1>
            <p className='text-[14px] md:text-[16px]'>
              Married with three beautiful kids, Will has spent his life honing his skills as a plumber, husband, and father, but nothing compares to the time he has spent surfing. Will loves nothing more than spending time with friends and family, usually with a coffee in hand. Honesty and Integrity are two values that Will lives his life by. If you see the WPH Plumbing van on the road, you had better hope the windows are up as Will loves to sing along with the radio.
            </p>
          </motion.div>
        </div>

        <div className="down py-6 gap-8 md:gap-12 lg:gap-20 flex flex-col-reverse md:flex-row justify-center items-center">
          <motion.div
            className="content flex flex-col gap-4 md:gap-5 w-full md:w-[595px] text-center md:text-left px-4 md:px-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-[#3896D6] font-extrabold text-[20px] md:text-[24px]'>Connor</h1>
            <p className='text-[14px] md:text-[16px]'>
              Connor is the first apprentice hired at WPH Plumbing. He enjoys learning the dark art of plumbing and doing all the heavy lifting. Connor is the man on the tools, working closely with Will to learn the trade. He&apos;s a strong believer in the WPH ethos and is always ready to tackle any plumbing task thrown his way.
            </p>
          </motion.div>

          <motion.div
            className='flex-shrink-0'
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/about/about4.png"
              alt="Connor"
              width={407}
              height={352}
              layout="intrinsic"
              objectFit="cover"
              quality={75}
              priority={true}
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About
