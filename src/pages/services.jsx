import Navbar from '@/components/Navbar'
import React from 'react'

const services = () => {
  return (
  <>
    <section
  className='w-full  py-12'
  style={{
    backgroundImage: 'url(/index/services.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <Navbar />
  <div className='container items-center flex flex-col mt-8'>
    <div className='flex flex-col text-white mb-4'>
      <h1 className='text-5xl font-bold '>OUR SERVICES</h1>
    </div>
  </div>
</section>

  
  </>
  )
}

export default services
