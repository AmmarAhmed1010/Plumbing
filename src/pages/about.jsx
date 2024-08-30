import Navbar from '@/components/Navbar'
import Image from 'next/image'
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
      <h1 className='text-5xl font-serif font-extrabold'>ABOUT US</h1>
    </div>
  </div>
</section>

  {/* section1 */}
  <section>
    <div className="wrapper">
      <div className="left">

      </div>
      <div className="right">
        <h1></h1>
        <p></p>
        <p></p>
        <button>

        </button>
      </div>
    </div>
  </section>

   {/* section2 */}
   <section className='h-screen w-full'>
    <div className="wrapper">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
   </section>
    {/* section3 */}
    <section className='h-screen w-full'>
      <div className="heading">
       <h1></h1>
       </div>
       <div className="up">
        <div>
          <Image/>
        </div>
        <div className="content">
        <h1></h1>
        <p></p>
        </div>
       </div>
       <div className="down">
        <div className="content">
          <h1></h1>
          <p></p>
        </div>
       <div>
          <Image/>
        </div>
       </div>
    </section>
 </>
  )
}

export default about
