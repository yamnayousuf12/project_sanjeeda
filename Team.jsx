// import React from "react"
// import TeamCard from "./TeamCard"
// import Back from "../back/Back"
// import Awrapper from "../../about/AWrapper"

// const Team = () => {
//   return (
//     <>
//     <Back title='Team' />
     
//       <section className='team padding'>
//         <div className='container grid'>
//           <TeamCard/>
//         </div>
//       </section>
//       <Awrapper/>
//     </>
//   )
// }

// export default Team

import React from "react";
import TeamCard from "./TeamCard";
import Back from "../back/Back";
import Awrapper from "../../about/AWrapper";

const Team = () => {
  return (
    <>
       
      <section className='py-16' style={{
          backgroundImage: "url('ap.img.png')",
          backgroundPosition: "center right",
          backgroundSize: "contain",
        }}>
            <Back title='Team' />
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <TeamCard />
        </div>
      </section>

      <Awrapper />
    </>
  );
};

export default Team;
