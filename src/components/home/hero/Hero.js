import React from 'react';
import Title from '../../common/title/Title';
// import Title from /Heading';

const Hero = () => {
  return (
    <>
      <section
        className="hero bg-cover h-screen flex items-center justify-center "
        style={{
          backgroundImage: "url('hero.png')",
          backgroundPosition: "right center",
          backgroundSize: "contain w-full sm:w-auto px-2 py-1",
        }}
      >
        <div className="container mx-auto px-6">
          
          <div className="row flex flex-col items-center text-center text-white">
            <Title
              
              title='Best Online Adviser'
            />

            <div className="flex justify-start">
              <p className="mb-6 text-left  text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Empowering your Career Journey
              "Guiding you towards success through every step of your professional path"
              </p>
            </div>
            

            <div className="button flex flex-col sm:flex-row sm:space-x-5 space-y-4 sm:space-y-0 justify-center">
  <button className="primary-btn bg-TealBlue text-white w-full sm:w-auto px-4 py-3 rounded hover:bg-customBlue transition text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
    GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
  </button>
  <button className="primary-btn bg-TealBlue text-white w-full sm:w-auto px-3 py-3 rounded hover:bg-customBlue transition text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
    VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
  </button>
</div>

          </div>
        </div>
       

      </section>
      
      <div className="margin"> <div className="service-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">

<div className="image-box bg-gray-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 relative -inset-20 left-1">
<img 
src="c18.jpeg" 
className="w-full h-auto rounded-lg"
/>
</div>



<div className="image-box  bg-gray-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 relative -inset-20  -left-1">
<img 
src="c9.jpeg" 
className="w-full h-auto rounded-lg"
/>
</div>

<div className="image-box  bg-gray-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 relative -inset-20 -left-2">
<img 
src="c8.jpeg" 
className="w-full h-auto rounded-lg"
/>
</div>
</div></div>
      
    </>
  );
};

export default Hero;
