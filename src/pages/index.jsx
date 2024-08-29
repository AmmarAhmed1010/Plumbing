import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image';

const index = () => {
  const texts = ["GENERAL MAINTENANCE", "TOILET REPAIRS", "LEAK DETECTION", "HOT WATER SOULUTION", "TAP LEAKS", "GAS FITTING"];
  return (
    <>

      <section className='bg-black h-screen w-full pt-14'>
        <Navbar />
      </section>

      {/* section1 */}
      <section className='bg-white gap-10 flex flex-col 2xl:flex-row justify-center items-center min-h-screen w-full'>
        <div className='flex p-4 sm:p-8 w-full justify-center 2xl:justify-end items-center h-auto'>
          <Image
            src="/index/img1.png"
            alt="Plumbing Service Image"
            width={500}
            height={500}
            className='w-full h-auto 2xl:w-[500px] 2xl:h-[500px]'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex flex-col gap-4 p-4 max-w-[90%] text-left sm:max-w-[70%] 2xl:max-w-[40%]">
          <h1 className="text-[#3896D6] text-[20px] sm:text-[30px] 2xl:text-[41.06px] font-bold  2xl:text-left">
            Southern Gold Coast Plumbing Services
          </h1>
          <h3 className="text-[#266189] font-bold text-[18px] sm:text-[21px] 2xl:text-[23px]  2xl:text-left">
            Servicing Palm Beach Currumbin <br />
            Burleigh Tugun & Surrounds
          </h3>
          <p className="text-[16px] sm:text-[18px] text-black  2xl:text-left">
            Welcome to WPH Plumbing, your local Southern Gold Coast Plumbers servicing Palm Beach, Currumbin, Burleigh, Tugun, and the surrounding area. Born and bred on the Gold Coast, our local roots run deep, and our love for the community shines through in every job we undertake. Whether you’re contending with a bothersome blockage, a mischievous leak, or just in need of some friendly advice on your plumbing, we’re here to assist.
          </p>
          <h3 className="text-[18px] sm:text-[20px] font-serif font-bold 2xl:text-[23px] text-[#266189]  2xl:text-left">
            Prompt Service Every Time
          </h3>
          <p className="text-[16px] sm:text-[18px] text-black  2xl:text-left">
            Despite the relaxed ambience that the Southern Gold Coast offers, we at WPH Plumbing recognise the urgency of your needs. Our commitment: Timely service ensuring no prolonged disruptions to your daily life. Whether you’re in Palm Beach, Currumbin, Burleigh, Tugun, or another corner of the Coast, we’re here to help. We’ll make sure the only thing draining is your pipes, not your patience.
          </p>
          <div className='flex justify-center 2xl:justify-start'>
            <button className="bg-[#3896D6] rounded-3xl text-white px-6 py-3 mt-4">
              <h3 className="text-[14px]">Learn More</h3>
            </button>
          </div>
        </div>
      </section>

     {/* section2 */}
     <section className='min-h-screen w-full p-8 bg-gray-100'>
  {/* Heading */}
  <div className='w-full text-start  mb-8'>
    <h2 className='text-[41.6px] font-bold text-[#3896D6]'>Our Services</h2>
  </div>

  {/* Images with Text */}
  <div className='flex flex-wrap justify-center gap-4'>
    {texts.map((text, index) => {
      const [firstWord, ...remainingWords] = text.split(' ');
      const secondLine = remainingWords.join(' ');

      return (
        <div key={index} className='relative w-full max-w-[400px] h-64 bg-gray-300'>
          <Image
            src={`/index/services${index + 1}.png`} // Ensure the images exist in the public/index directory
            alt={`services ${index + 1}`}
            layout="fill" // Fill the entire container
            objectFit="cover" // Ensure the image covers the entire div without being cut off
          />
          <div className='absolute inset-0 flex justify-center items-center'>
            <div className='bg-white bg-opacity-70 rounded-3xl text-center hover:bg-[#1C285D] cursor-pointer px-8 py-2'>
              <h1 className='text-[#266189] hover:text-white text-[25px] font-bold'>
                {firstWord} <br /> {secondLine}
              </h1>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</section>


    </>
  )
}

export default index
