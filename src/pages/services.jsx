import Navbar from '@/components/Navbar'
import React from 'react'

const services = () => {
  return (
  <>
    <section
  className='w-full md:h-screen md:pl-44 py-12'
  style={{
    backgroundImage: 'url(/index/home.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <Navbar />
  <div className='container items-center md:items-start flex flex-col mt-8'>
    <div className='flex flex-col text-white mb-4'>
      <h1 className='text-5xl font-bold '>HELLO,</h1>
      <h1 className='text-5xl font-bold '>FELLOW TAP</h1>
      <h1 className='text-5xl font-bold '>USERS!</h1>
    </div>

    <button className='bg-[#3896D6] hover:bg-white cursor-pointer hover:text-[#3896D6] text-white px-6 py-3 my-6 shadow-zinc-800 shadow-lg rounded-3xl'>
      Contact Us
    </button>
  </div>
</section>

  
  </>
  )
}

export default services
