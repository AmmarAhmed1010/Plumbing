import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

const Index = () => {
  const texts = [
    "GENERAL MAINTENANCE",
    "TOILET REPAIRS",
    "LEAK DETECTION",
    "HOT WATER SOLUTION",
    "TAP LEAKS",
    "GAS FITTING"
  ];

  return (
    <>
     

      {/* Section 1 */}
      <section className='bg-white flex flex-col md:flex-row items-center justify-center gap-10 p-4 sm:p-8 min-h-screen'>
        <div className='flex justify-center items-center w-full md:w-1/2'>
          <Image
            src="/index/img1.png"
            alt="Plumbing Service Image"
            width={500}
            height={500}
            className='w-full h-auto max-w-[500px]'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex flex-col gap-4 text-left max-w-[90%] sm:max-w-[70%] md:max-w-[50%]">
          <h1 className="text-[#3896D6] text-[20px] sm:text-[30px] md:text-[41px] font-bold">
            Southern Gold Coast Plumbing Services
          </h1>
          <h3 className="text-[#266189] font-bold text-[18px] sm:text-[21px] md:text-[23px]">
            Servicing Palm Beach Currumbin <br />
            Burleigh Tugun & Surrounds
          </h3>
          <p className="text-[16px] sm:text-[18px] text-black">
            Welcome to WPH Plumbing, your local Southern Gold Coast Plumbers servicing Palm Beach, Currumbin, Burleigh, Tugun, and the surrounding area. Born and bred on the Gold Coast, our local roots run deep, and our love for the community shines through in every job we undertake. Whether you’re contending with a bothersome blockage, a mischievous leak, or just in need of some friendly advice on your plumbing, we’re here to assist.
          </p>
          <h3 className="text-[18px] sm:text-[20px] font-serif font-bold md:text-[23px] text-[#266189]">
            Prompt Service Every Time
          </h3>
          <p className="text-[16px] sm:text-[18px] text-black">
            Despite the relaxed ambience that the Southern Gold Coast offers, we at WPH Plumbing recognise the urgency of your needs. Our commitment: Timely service ensuring no prolonged disruptions to your daily life. Whether you’re in Palm Beach, Currumbin, Burleigh, Tugun, or another corner of the Coast, we’re here to help. We’ll make sure the only thing draining is your pipes, not your patience.
          </p>
          <div className='flex justify-center md:justify-start'>
            <button className="bg-[#3896D6] rounded-3xl text-white px-6 py-3 mt-4">
              <h3 className="text-[14px]">Learn More</h3>
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className='min-h-screen w-full p-8 bg-gray-100'>
        <div className='text-start mb-8'>
          <h2 className='text-[#3896D6] text-[24px] sm:text-[30px] md:text-[41.6px] font-bold'>
            Our Services
          </h2>
        </div>
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

      {/* Section 3 */}
      <section className='min-h-screen w-full'>
        <div className="p-4 sm:p-8">
          {/* Top Section */}
          <div className='flex flex-col md:flex-row gap-4'>
            <div className="flex flex-col gap-4 max-w-full md:max-w-[70%] lg:max-w-[60%]">
              <h2 className='text-[#266189] text-[20px] sm:text-[23px] lg:text-[26px] font-bold'>
                Plumbing Problems? WPH Plumbing has got your back!
              </h2>
              <p className='text-black text-[14px] sm:text-[16px]'>
                Surrounded by the picturesque Southern Gold Coast from Palm Beach to Tugun and beyond our primary aim isnt just fixing leaks and pipes. Its about building lasting relationships with every client. Our dedication to service quality and community engagement ensures you always have a trusted partner for all your plumbing requirements.
              </p>
              <p className='text-black text-[14px] sm:text-[16px]'>
                Surrounded by the picturesque Southern Gold Coast from Palm Beach to Tugun and beyond our primary aim isnt just fixing leaks and pipes. Its about building lasting relationships with every client. Our dedication to service quality and community engagement ensures you always have a trusted partner for all your plumbing requirements.
              </p>
            </div>
            <div className='flex w-full justify-center items-center'>
              <Image
                src="/index/sect3-1.png"
                alt="Plumbing Service Image"
                width={500}
                height={500}
                className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto'
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className='flex flex-col md:flex-row gap-4 mt-8'>
            <div className='flex w-full justify-center items-center'>
              <Image
                src="/index/sect3-2.png"
                alt="Plumbing Service Image"
                width={500}
                height={500}
                className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto'
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="flex flex-col gap-4 max-w-full md:max-w-[70%] lg:max-w-[60%]">
              <h2 className='text-[#266189] text-[20px] sm:text-[23px] lg:text-[26px] font-bold'>
                Decades of Trust and Expertise
              </h2>
              <p className='text-black text-[14px] sm:text-[16px]'>
                At WPH Plumbing were not just a business were a family. Located in the heart of the Gold Coast weve become the go-to plumber Palm Beach and Currumbin residents have trusted for years.
              </p>
              <p className='text-black text-[14px] sm:text-[16px]'>
                Our family-driven ethos allows us to truly understand and empathise with your concerns ensuring we deliver solutions tailored to your needs. With over 15 years of hands-on experience our team has mastered the art of plumbing always prioritising the efficiency and longevity of your system. But our expertise doesnt stop at pipes and drains were also seasoned in hot water solutions and gas fitting.
              </p>
              <p className='text-black text-[14px] sm:text-[16px]'>
                Whether youre looking to enjoy a warm uninterrupted shower during the chillier months or considering a new gas appliance weve got the know-how and commitment to guarantee a smooth safe installation. When you choose WPH Plumbing youre choosing a legacy of trust expertise and a dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className='w-full h-full'>
      <div className='text-center'>
        <h1 className='text-[#3896D6] py-8 text-[20px] sm:text-[30px] lg:text-[39px]'>
          Contact Our Team On 0414 440 509
        </h1>
        <div className='w-full h-[50vh] relative'>
          <Image
            src="/index/sect4-1.png"
            alt="Section Image"
            layout="fill" // Makes the image cover the container
            objectFit="maintain" // Ensures the image covers the entire container
            className='absolute inset-0'
          />
        </div>
      </div>
    </section>

    {/* section5 */}
 
    </>
  );
};

export default Index;
