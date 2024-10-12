// import React from "react"
// import { testimonal } from "../../../dummydata"
// import Title from "../../common/title/Title"



// const Testimonal = () => {
//   return (
//     <>
//       <section className='testimonal padding'>
//         <div className='container'>
//           <Title subtitle='TESTIMONIAL' title='Our Successful Students' />

//           <div className='content grid2'>
//             {testimonal.map((val) => (
//               <div className='items shadow'>
//                 <div className='box flex'>
//                   <div className='img'>
//                     <img src={val.cover} alt='' />
//                     <i className='fa fa-quote-left icon'></i>
//                   </div>
//                   <div className='name'>
//                     <h2>{val.name}</h2>
//                     <span>{val.post}</span>
//                   </div>
//                 </div>
//                 <p>{val.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Testimonal


import React from "react";
import { testimonal } from "../../../dummydata";
import Title from "../../common/title/Title";

const Testimonal = () => {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <Title subtitle="TESTIMONIAL" title="Our Successful Students" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonal.map((val, index) => (
              <div key={index} className="bg-customBlue p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-28">
                    <img
                      src={val.cover}
                      alt={val.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                   
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-semibold text-gray-50">{val.name}</h2>
                    <span className="text-gray-800 font-semibold">{val.post}</span>
                  </div>
                </div>
                <p className="text-gray-50">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
