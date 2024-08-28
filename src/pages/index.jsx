import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image';

const index = () => {
  return (
    <>
    
    <section className='bg-black h-screen w-full pt-14'>
    <Navbar/>
    </section>
    <section className='bg-white gap-10 flex 2xl:flex-row flex-col
    justify-center items-center h-screen w-full'>
    <div className='flex p-8 w-full justify-end items-center h-full'>
  <Image
    src="/index/img1.png"
    alt="Description of the image"
    className='w-[300px] h-[200px]'
    width={500} // Set the width as needed
    height={500} // Set the height as needed or use 'auto' for aspect ratio
    style={{ objectFit: 'cover', height: '100%', width: '100%' }} // Make the image cover the div
  />
</div>
<div className="flex flex-col gap-4 p-4">
  <h1 className="text-[#3896D6] text-[20px] 2xl:text-[41.06px] font-bold">Southern Gold Coast Plumbing Services</h1>
  <h3 className="text-[#266189] font-bold text-[18px] 2xl:text-[23px]">Servicing Palm Beach Currumbin <br/>
  Burleigh Tugum & Surrounds</h3>
  <p className="text-16px text-black">
  Welcome to WPH Plumbing your local Southern Gold Coast Plumbers servicing Palm Beach Currumbin Burleigh Tugun and the surrounding area Born and bred on the Gold Coast our local roots run deep and our love for the community shines through in every job we undertake Whether you’re contending with a bothersome blockage a mischievous leak or just in need of some friendly advice on your plumbing we’re here to assist
  </p>
  <h3 className="text-[18px] font-serif font-bold 2xl:text-[23px] text-[#266189]">Prompt Service Every Time</h3>
  <p>Despite the relaxed ambience that the Southern Gold Coast offers we at WPH Plumbing recognise the urgency of your needs Our commitment Timely service ensuring no prolonged disruptions to your daily life Whether you’re in Palm Beach Currumbin Burleigh Tugun or another corner of the Coast we’re here to help We’ll make sure the only thing draining is your pipes not your patience</p>
 
<div>  <button className="bg-[#3896D6] rounded-3xl text-white">
    <h3 className="text-[14px]">Learn More</h3>
  </button>
  </div>
</div>

</section>
    </>
  )
}

export default index
