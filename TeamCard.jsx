// import React from "react"
// import { team } from "../../../dummydata"


// const TeamCard = () => {
//   return (
//     <>
   
//       {team.map((val) => (
//         <div className='items shadow'>
//           <div className='img'>
//             <img src={val.cover} alt='' />
//             <div className='overlay'>
//               <i className='fab fa-facebook-f icon'></i>
//               <i className='fab fa-twitter icon'></i>
//               <i className='fab fa-instagram icon'></i>
//               <i className='fab fa-tiktok icon'></i>
//             </div>
//           </div>
//           <div className='details'>
//             <h2>{val.name}</h2>
//             <p>{val.work}</p>
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }

// export default TeamCard


import React from "react";
import { team } from "../../../dummydata";

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div key={val.id} className='items shadow-lg rounded-lg overflow-hidden'>
          <div className='relative'>
            <img src={val.cover} alt={val.name} className='w-full h-66 object-cover' />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300'>
              <i className='fab fa-facebook-f text-white text-xl mx-2'></i>
              <i className='fab fa-twitter text-white text-xl mx-2'></i>
              <i className='fab fa-instagram text-white text-xl mx-2'></i>
              <i className='fab fa-tiktok text-white text-xl mx-2'></i>
            </div>
          </div>
          <div className='p-4 text-center bg-gray-300'>
            <h2 className='text-xl font-semibold text-gray-800'>{val.name}</h2>
            <p className='text-gray-600'>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
