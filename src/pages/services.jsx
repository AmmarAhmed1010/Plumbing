import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react';


const Services = () => {
  const texts = [
    "GENERAL MAINTENANCE",
    "TOILET REPAIRS",
    "LEAK DETECTION",
    "HOT WATER SOLUTION",
    "TAP LEAKS",
    "GAS FITTING"
  ];

  const cards = [
    {
      title: 'Kirryn Cossman',
      content: 'Extremely happy with the service we received from Will. He was very professional reliable and knowledgable. We have used him twice now and couldnt be happier. Thanks again.',
      bgColor: 'bg-white',
    },
    {
      title: 'Ryu Noai',
      content: 'We had Will from WPH Plumbing do some work on our house. The result was great the pricing transparent and Will was very easy to deal with. Thanks for your work',
      bgColor: 'bg-white',
    },
    {
      title: 'Stewart Reed',
      content: 'Many thanks to Will Hancock for his prompt responses. Will has been my GoTo Plumber for about 5 years. No job is too small. No job is too big. Everything gets done professionally. Thanks Will',
      bgColor: 'bg-white',
    },
    {
      title: 'Soonah Walkom',
      content: 'Great service with great communications Arrived on time and dressed appropriately. Very reasonably priced highly recommend',
      bgColor: 'bg-white',
    },
    {
      title: 'Soonah Walkom',
      content: 'Great service with great communications Arrived on time and dressed appropriately. Very reasonably priced highly recommend',
      bgColor: 'bg-white',
    },
  ];
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Scroll by one card width (clientWidth / 3)
        scrollRef.current.scrollBy({ left: clientWidth / 3, behavior: 'smooth' });

        // If the scroll reaches the end of the original set of cards,
        // reset scrollLeft to start position for infinite looping
        if (scrollLeft + clientWidth >= scrollWidth - clientWidth) {
          setTimeout(() => {
            scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
          }, 500); // Delay to match the smooth scrolling
        }
      }
    };

    const intervalId = setInterval(scroll, 1000);
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <>
      <section
        className='w-full py-12'
        style={{
          backgroundImage: 'url(/index/services.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <Navbar />
        <div className='container items-center flex flex-col mt-8'>
          <div className='flex flex-col text-white mb-4'>
            <h1 className='text-5xl font-serif font-extrabold'>OUR SERVICES</h1>
          </div>
        </div>
      </section>

      {/* section1 */}
      <section className='mb-8 flex flex-col md:flex-row items-center justify-center w-full'>
        <div className="flex flex-col mt-20 mb-8 px-10 md:px-16 w-full md:w-[35%] md:mb-0">
          <p className='text-[16px] text-black mb-4'>At WPH Plumbing, we offer a wide range of general plumbing services to meet the needs of our customers in the Burleigh Heads area & surrounding. From general maintenance to leak detection and gas fitting, we have the skills and expertise to handle any job.</p>
          <p className='text-[16px] text-black mb-4'>Our team of experienced plumbers is here to help with all of your plumbing needs, including tap leaks, hot water solutions, and toilet repairs. We understand that even small issues can be a major inconvenience, which is why we offer prompt and reliable service to get your plumbing back in order as soon as possible.</p>
          <p className='text-[16px] text-black mb-4'>When it comes to general maintenance, its important to catch issues before they become major problems. Our plumbers can assess your plumbing systems and identify any potential issues, ensuring that your plumbing is in top condition and ready to handle whatever comes its way.</p>
          <p className='text-[16px] text-black mb-4'>Leak detection is another important service that we offer. Whether its a visible leak or one that is hidden from view, our plumber in Burleigh Heads have the tools and expertise to locate the source of the problem and get it fixed.</p>
          <p className='text-[16px] text-black mb-4'>In addition to these services, we also offer gas fitting for all of your natural gas and LPG needs. Our team is fully licensed and equipped to handle everything from appliance installation to gas leak detection and repairs.</p>
          <p className='text-[16px] text-black'>No matter what your plumbing needs may be, you can count on WPH Plumbing to provide fast and reliable service in and around the Burleigh Heads area. Contact us today to learn more about how we can help you keep your plumbing running smoothly.</p>
        </div>
        <div className='w-full md:w-1/2 px-8 md:mt-20 h-screen flex justify-center items-center'>
          <Image
            src="/services/services1_1.png"
            alt="Service Image"
            width={500}
            height={500}
            className='w-full h-full object-cover'
          />
        </div>
      </section>

      {/* section2 */}
      <section className='min-h-screen w-full p-8 bg-white'>
        <div className='flex flex-wrap justify-center gap-4'>
          {texts.map((text, index) => {
            const [firstWord, ...remainingWords] = text.split(' ');
            const secondLine = remainingWords.join(' ');

            return (
              <div key={index} className='relative w-full max-w-[400px] h-64'>
                <Image
                  src={`/index/services${index + 1}.png`}
                  alt={`services ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className='absolute inset-0'
                />
                <div className='absolute inset-0 flex justify-center items-center'>
                  <div className='bg-white bg-opacity-70 rounded-3xl text-center hover:bg-[#1C285D] cursor-pointer px-8 py-2'>
                    <h1 className='text-[#266189] hover:text-white text-[18px] md:text-[25px] font-bold'>
                      {firstWord} <br /> {secondLine}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* section3 */}
      <section className='w-full py-12'>
      <div className='text-center mb-8'>
        <h3 className='text-3xl text-[#266189] font-bold'>WPH Plumbing</h3>
        <h1 className='text-5xl text-[#3896D6] font-bold' >Client's Testimonials</h1>
        
      </div>
      <div className='flex overflow-hidden w-full' ref={scrollRef}>
        <div className='flex'>
          {/* Original Set of Cards */}
          {cards.map((card, index) => (
            <div key={index} className='min-w-[calc(100%/3)] p-4'>
              <div className={`${card.bgColor} shadow-lg  shadow-slate-700 py-8 rounded-lg p-6 h-[200px] flex flex-col justify-between`}>
                <p>{card.content}</p>
                <h3 className='text-xl text-[#266189] font-bold mb-2'>{card.title}</h3>
              </div>
            </div>
          ))}
          {/* Duplicate Set of Cards for seamless loop */}
          {cards.map((card, index) => (
            <div key={`duplicate-${index}`} className='min-w-[calc(100%/3)] p-4'>
              <div className={`${card.bgColor} shadow-lg shadow-slate-700 py-8 rounded-lg p-6 h-[200px] flex flex-col justify-between`}>
                <p>{card.content}</p>
                <h3 className='text-xl text-[#266189] font-bold mb-2'>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* section4 */}
      <section>

      </section>
    </>
  )
}

export default Services
