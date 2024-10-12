// import React from 'react'
// import Title from '../common/title/Title'
// import { servicesCard } from '../../dummydata'

// const HAbout = () => {
//   return (
//     <>
//     <section className='homeAbout'>
//     <div className='container'>
//         <Title title='explore our popular online courses'/>
//         <div className="ServicesCard">
//         <div className='grid2'>
//           {servicesCard.slice(0, 3).map((val) => (
//                 <div className='items'>
//                   <div className='content flex'>
//                     <div className='left'>
//                       <div className='img flex flex-col items-center p-4'>
//                         <img src={val.cover} alt={val.ServicesName}
//                 className="w-full h-48 object-cover" />
//                       </div>
//                     </div>
//                     <div className="mt-4 text-center">
//                 <h1 className="text-xl font-semibold text-gray-800">
//                   {val.ServicesName}
//                 </h1>
//                 <p className="mt-2 text-gray-900">{val.desc}</p>
//               </div>
//                   </div>
//                   <button className="w-full bg-darkBlue text-white py-2 px-4 rounded hover:bg-customBlue transition">
//               Click here
//               </button>
//                 </div>
//               ))} 
//         </div>
//         </div>
//     </div>
//     </section>
//     </>
//   )
// }

// export default HAbout

import React from 'react';
import Title from '../common/title/Title';
import { servicesCard } from '../../dummydata';

const HAbout = () => {
  return (
    <>
      <section className='mx-auto px-10 top-12'>
        <div className="max-w-7xl mx-auto px-9">
          <Title title="Explore Our Popular Online Services" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {servicesCard.slice(0, 3).map((val) => (
              <div key={val.id} className="bg-customBlue shadow-lg rounded-lg overflow-hidden">
                <div className="content">
                  <div className="flex flex-col items-center p-6">
                    <div className="img mb-4">
                      <img
                        src={val.cover}
                        alt={val.ServicesName}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                    <div className="text-center">
                      <h1 className="text-xl font-semibold text-gray-800">
                        {val.ServicesName}
                      </h1>
                      <p className="mt-2 text-gray-100">{val.desc}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <button className="w-full bg-TealBlue text-gray-50 py-2 px-4 rounded hover:bg-gray-400 transition duration-300">
                      Click here
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
