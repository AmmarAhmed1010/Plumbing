import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      {/* Hero Section */}
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
          <div className='flex flex-col text-white mb-4'>
            <h1 className='text-3xl md:text-5xl font-serif font-extrabold'>ABOUT US</h1>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className='px-4 py-6 md:px-8 md:py-12 lg:px-16'>
        <div className="wrapper flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="left w-full md:w-1/2">
            {/* Left side content (if any) */}
          </div>
          <div className="right w-full md:w-1/2">
            <h1 className='text-[#3896D6] font-extrabold text-2xl md:text-[41px]'>A BACK STORY</h1>
            <p className='text-[14px] md:text-[16px]'>
              WPH Plumbing was born 7 years ago with a vision to provide quality plumbing services to the people of the Gold Coast and Northern NSW. Will loves his family and the outdoor life, if he isnt waist deep in a hole you can find him camping or more than likely catching some waves. His love and commitment to his family and friends extends to his clients with each of his clients becoming a part of the WPH family.
            </p>
            <p className='text-[14px] md:text-[16px]'>
              The daily challenges and diversity of plumbing is what inspires Will each and every day. Will is extremely excited to grow his business with the employment of his first apprentice Connor joining WPH. Will enjoys teaching the dark art of plumbing to Connor but more importantly also having someone there to dig the holes.
            </p>
            <div className='w-full flex justify-end'>
            <button className='bg-[#3896D6] text-white text-[14px] md:text-[16px] font-bold rounded-3xl h-[56px] px-8'>
              CONTACT US
            </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className='relative w-full'>
        {/* Image Section */}
        <div className="image-container w-full h-[900px] md:h-[800px] lg:h-[600px]">
          <Image 
            src="/about/about5.png"   // Replace with your image path
            alt="Descriptive text"    // Alternative text for accessibility
            layout="fill"             // Fill the entire container
            objectFit="cover"         // Ensure the image covers the entire container while maintaining aspect ratio
            quality={75}              // Quality of the image
            priority={true}           // Preload the image for better performance
          />
        </div>

        {/* Overlay with Background Color and Text */}
        <div className='absolute inset-0 bg-[#3896D6] bg-opacity-90 flex items-center'>
          <div className='px-4 py-6 w-full md:px-6 md:py-12'>
            <div className="wrapper text-center flex flex-col gap-4 md:gap-6">
              <p className='text-[14px] md:text-[16px] text-white'>
                WPH Plumbing is your trusted and reliable plumbing partner in the Gold Coast area. Our team of experienced and knowledgeable professionals is dedicated to providing quality service to all our clients. As a local business born and raised in the community we take pride in serving our neighbors and providing them with top-notch plumbing solutions.
              </p>
              <p className='text-[14px] md:text-[16px] text-white'>
                We understand that plumbing emergencies can happen at any time and thats why we offer 24/7 services to ensure that our clients are always covered no matter the time of day. Our team is always available to take your call and dispatch our skilled technicians to your location as quickly as possible to resolve your plumbing issues in a timely and efficient manner.
              </p>
              <p className='text-[14px] md:text-[16px] text-white'>
                As Currumbins preferred plumber our team has extensive experience dealing with the unique plumbing challenges that homeowners and businesses in the area face. From fixing a leaky faucet to undertaking major plumbing projects we have the expertise to handle any plumbing job that comes our way regardless of its complexity.
              </p>
              <p className='text-[14px] md:text-[16px] text-white'>
                At WPH Plumbing were all about building relationships with our clients. We know that trust honesty and transparency are crucial in building a lasting relationship and were committed to embodying these values in all our interactions. Our personalized approach to every job means we take time to understand your unique needs find the perfect solution for you and communicate effectively throughout the process.
              </p>
              <p className='text-[14px] md:text-[16px] text-white'>
                Were dedicated to staying uptodate with the latest advancements in the industry and thats why our technicians are equipped with the most advanced tools and technology in the market to deliver cuttingedge services to our clients. Were always striving to exceed our clients expectations and we never compromise on the quality of service we deliver.
              </p>
              <p className='text-[14px] md:text-[16px] text-white'>
                Thank you for considering WPH Plumbing for your plumbing needs. Whether youre facing a minor plumbing issue or a major emergency  always ready to provide you with highquality service that will keep you satisfied. Dont hesitate to contact us to schedule an appointment or speak with one of our friendly team members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className='w-full px-4 py-6 md:px-8 md:py-12 lg:px-16'>
        <div className="heading w-full text-center py-4">
          <h1 className='text-[#3896D6] font-extrabold text-[24px] md:text-[36px] lg:text-[41px]'>MEET THE TEAM</h1>
        </div>

        <div className="up gap-8 md:gap-12 lg:gap-20 py-6 flex flex-col justify-center items-center md:flex-row">
          <div className='flex-shrink-0'>
            <Image 
              src="/about/about3.png"  // Path to your image
              alt="Will Hancock"       // Alternative text for accessibility
              width={407}              // Width set to 407px
              height={352}             // Height set to 352px
              layout="intrinsic"       // Image maintains the specified width and height
              objectFit="cover"        // Image covers the container while maintaining aspect ratio
              quality={75}             // Quality of the image
              priority={true}          // Preloads the image for better performance
            />
          </div>
          <div className="content flex flex-col gap-4 md:gap-5 w-full md:w-[595px] text-center md:text-left px-4 md:px-0">
            <h1 className='text-[#3896D6] font-extrabold text-[20px] md:text-[24px]'>Will Hancock</h1>
            <p className='text-[14px] md:text-[16px]'>
              Married with three beautiful kids Will has spent his life honing his skills as a plumber husband and father but nothing compares to the time he has spent surfing. Will loves nothing more than spending time with friends and family usually with a coffee in hand. Honesty and Integrity are two values that Will lives his life by. If you see the WPH Plumbing van on the road you had better hope the windows are up as Will loves to sing along with the radio.
            </p>
          </div>
        </div>

        <div className="down py-6 gap-8 md:gap-12 lg:gap-20 flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="content flex flex-col gap-4 md:gap-5 w-full md:w-[595px] text-center md:text-left px-4 md:px-0">
            <h1 className='text-[#3896D6] font-extrabold text-[20px] md:text-[24px]'>Connor the Barbarian (Apprentice)</h1>
            <p className='text-[14px] md:text-[16px]'>
              In his first year of his apprenticeship Connor has taken to plumbing like a kindred spirit. He has formed a great bond with Will who is passing all his knowledge onto his eager apprentice. Every day spent with Will he is developing a keen ear for bad singing and his coffee snobbery just like his boss.
            </p>
          </div>
          <div className='flex-shrink-0'>
            <Image 
              src="/about/about4.png"  // Path to your image
              alt="Connor the Barbarian" // Alternative text for accessibility
              width={407}               // Width set to 407px
              height={352}              // Height set to 352px
              layout="intrinsic"        // Image maintains the specified width and height
              objectFit="cover"         // Image covers the container while maintaining aspect ratio
              quality={75}              // Quality of the image
              priority={true}           // Preloads the image for better performance
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
