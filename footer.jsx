import React from "react"
import { blog } from "../../../dummydata"

const Footer = () => {
  return (
    <>
      <section className='newsletter bg-TealBlue text-white py-12'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center px-8'>
          <div className='left mb-8 lg:mb-0'>
            <h1 className='text-3xl font-bold mb-2'>Newsletter - Stay tuned and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right flex items-center'>
            <input
              type='text'
              placeholder='Enter email address'
              className='p-4 rounded-l w-64 md:w-96 text-gray-800'
            />
            <button className='p-4 bg-customBlue text-white rounded-r'>
              <i className='fa fa-paper-plane'></i>
            </button>
          </div>
        </div>
      </section>
      <footer className='bg-customBlue  text-white py-16'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-8'>
          <div className='box'>
            <h1 className='text-4xl font-bold mb-4'><span className="text-white">Sanjeed</span><span className="text-red-500">a!</span></h1>
            <span className='text-sm block mb-4'>ONLINE EDUCATION & LEARNING</span>
            <p className='mb-4'>
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <div className='flex space-x-4'><ul className="flex justify-center space-x-4 my-4">
            <li>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f text-white hover:text-blue-500"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-white hover:text-pink-500"></i>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube text-white hover:text-red-500"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-white hover:text-blue-400"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in text-white hover:text-blue-700"></i>
        </a>
      </li>
      </ul>
            </div>
          </div>
          <div className='box'>
            <h3 className='text-xl font-semibold mb-4'>Explore</h3>
            <ul>
              <li className='mb-2'>About Us</li>
              <li className='mb-2'>Services</li>
              <li className='mb-2'>Courses</li>
              <li className='mb-2'>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box'>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul>
              <li className='mb-2'>Contact Us</li>
              <li className='mb-2'>Pricing</li>
              <li className='mb-2'>Terms & Conditions</li>
              <li className='mb-2'>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3 className='text-xl font-semibold mb-4'>Recent Post</h3>
            {blog.slice(0, 3).map((val, index) => (
              <div className='items flex space-x-4 mb-4' key={index}>
                <div className='img w-16'>
                  <img src={val.cover} alt='' className='w-36 h-30 object-cover ' />
                </div>
                <div className='text'>
                  <span className='block mb-1'>
                    <i className='fa fa-calendar-alt mr-1'></i>
                    {val.date}
                  </span>
                  <span className='block mb-1'>
                    <i className='fa fa-user mr-1'></i>
                    {val.type}
                  </span>
                  <h4 className='text-sm'>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box'>
            <h3 className='text-xl font-semibold mb-4'>Have a Questions?</h3>
            <ul>
              <li className='mb-4'>
                <i className='fa fa-map mr-2'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li className='mb-4'>
                <i className='fa fa-phone-alt mr-2'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane mr-2'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal bg-gray-800 text-white py-4'>
        <div className='container mx-auto text-center'>
          <p>
            Copyright ©2022 All rights reserved | This template is made with{" "}
            <i className='fa fa-heart text-red-500'></i> by GorkhCoder
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
