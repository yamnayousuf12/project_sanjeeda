// import React from "react"

// import { blog } from "../../dummydata"
// import Title from "../common/title/Title"


// const Hblog = () => {
//   return (
//     <>
//       <section className='blog'>
//         <div className='container'>
//           <Title subtitle='OUR BLOG' title='Recent From Blog' />
//           <div className='grid2'>
//             {blog.slice(0, 3).map((val) => (
//               <div className='items shadow'>
//                 <div className='img'>
//                   <img src={val.cover} alt='' />
//                 </div>
//                 <div className='text'>
//                   <div className='admin flexSB'>
//                     <span>
//                       <i className='fa fa-user'></i>
//                       <label htmlFor=''>{val.type}</label>
//                     </span>
//                     <span>
//                       <i className='fa fa-calendar-alt'></i>
//                       <label htmlFor=''>{val.date}</label>
//                     </span>
//                     <span>
//                       <i className='fa fa-comments'></i>
//                       <label htmlFor=''>{val.com}</label>
//                     </span>
//                   </div>
//                   <h1>{val.title}</h1>
//                   <p>{val.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Hblog

import React from "react";
import { blog } from "../../dummydata";
import Title from "../common/title/Title";

const Hblog = () => {
  return (
    <>
      <section className="blog py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Title component */}
          <Title subtitle="OUR BLOG" title="Recent From Blog" />
          
          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {blog.slice(0, 3).map((val, index) => (
              <div key={index} className="items bg-customBlue rounded-lg shadow-lg overflow-hidden">
                {/* Image */}
                <div className="img">
                  <img src={val.cover} alt={val.title} className="w-full h-48 object-cover" />
                </div>

                {/* Text Content */}
                <div className="text p-6">
                  <div className="admin flex justify-between text-sm text-gray-50 mb-4">
                    <span>
                      <i className="fa fa-user mr-2"></i>
                      <label htmlFor="">{val.type}</label>
                    </span>
                    <span>
                      <i className="fa fa-calendar-alt mr-2"></i>
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                      <i className="fa fa-comments mr-2"></i>
                      <label htmlFor="">{val.com}</label>
                    </span>
                  </div>
                  <h1 className="text-xl font-semibold text-gray-800 mb-2">{val.title}</h1>
                  <p className="text-gray-50">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hblog;
