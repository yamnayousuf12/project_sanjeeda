// import React from 'react'
// import Back from '../common/back/Back'
// import AboutCard from './AboutCard'
// const About = () => {
//   return (
//     <>
//     <section className="hero bg-cover h-screen flex items-center justify-center text-black"
//         style={{
//           backgroundImage: "url('about.jpeg')",
//           backgroundPosition: "right center",
//           backgroundSize: "contain w-full sm:w-auto px-2 py-1",
//         }}>
   
//     <Back title='About us'/>
//     <AboutCard />
//     </section>
//     </>
//   )
// }

// export default About
import React from 'react'
import Back from '../common/back/Back'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <>
      <section
        className="hero bg-cover h-screen flex items-center justify-center text-white px-6"
        style={{
          backgroundImage: "url('about.jpeg')",
          backgroundPosition: "center right",
          backgroundSize: "contain",
        }}
      >
        <div className="w-full">
          <Back title='About us' />
          <AboutCard />
        </div>
      </section>
    </>
  )
}

export default About
