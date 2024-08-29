import Navbar from '@/components/Navbar'
import React from 'react'

const about = () => {
  return (
 <>
  <section
  className='w-full  py-12'
  style={{
    backgroundImage: 'url(/index/home.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <Navbar />
  <div className='container items-center flex flex-col mt-8'>
    <div className='flex flex-col text-white mb-4'>
      <h1 className='text-5xl font-bold '>ABOUT US</h1>
    </div>
  </div>
</section>

 </>
  )
}

export default about
