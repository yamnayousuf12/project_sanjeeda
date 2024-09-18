// import React from 'react'
import Title from '../common/title/Title'
import { homeAbout } from '../../dummydata'

import Awrapper from './AWrapper'

const AboutCard = () => {
  return (
    <>
      <section className='py-12 bg-customBlue '>
        <div className='container mx-auto flex flex-col md:flex-row px-4 sm:px-6'>
          {/* <div className='md:w-1/2'>
            <img src="img.jpeg" alt='' className='w-full h-auto object-cover rounded-md shadow-lg '/>
          </div> */}
          <div className='mt-6'>
          <video  className="w-45 h-80 object-cover rounded-md shadow-lg mb-4" 
          src="/video.mp4" 
          type="video/mp4 " 
          autoPlay
          loop
          muted
          >   
          </video>
            </div>
          <div className='md:w-1/2 mt-8 md:mt-0 md:pl-10'>
          <Title 
  subtitle={<span className="text-blue-200 font-bold">About us</span>}  // Applied text-darkBlue for the custom color
  className="title-bold" 
/>
            <div className='mt-6 space-y-6'>
              {homeAbout.map((val) => (
                <div key={val.title} className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-blue-200'>
                  <div className='w-17 h-17'>
                    <img src={val.cover} alt="" className='w-full h-full object-cover rounded-md  '/>
                  </div>
                  <div className='text-center sm:text-left '>
                    <h2 className='text-lg font-semibold '>{val.title}</h2>
                    <p className='text-blue-200'>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper/>
    </>
  )
}

export default AboutCard
