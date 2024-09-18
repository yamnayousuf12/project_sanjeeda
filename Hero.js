import React from 'react';
import Title from '../../common/title/Title';
// import Title from /Heading';

const Hero = () => {
  return (
    <>
      <section
        className="hero bg-cover h-screen flex items-center justify-center text-black"
        style={{
          backgroundImage: "url('hero.img1.png')",
          backgroundPosition: "right center",
          backgroundSize: "contain w-full sm:w-auto px-2 py-1",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="row flex flex-col items-center text-center ">
            <Title
              subtitle={<span style={{ fontWeight: 'bold' }}>WELCOME TO WEBSITE</span>} 
              title={<span style={{ fontWeight: 'bold' }}>Best Online Adviser</span>} 
            />

            <div className="flex justify-start">
              <p className="mb-6 text-left  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Empowering your Career Journey
              "Guiding you towards success through every step of your professional path"
              </p>
            </div>

            <div className="button flex flex-col sm:flex-row sm:space-x-5 space-y-4 sm:space-y-0 justify-center">
  <button className="primary-btn bg-red-600 text-white w-full sm:w-auto px-4 py-3 rounded hover:bg-red-500 transition text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
    GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
  </button>
  <button className="primary-btn bg-red-600 text-white w-full sm:w-auto px-3 py-3 rounded hover:bg-red-500 transition text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
    VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
  </button>
</div>

          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
