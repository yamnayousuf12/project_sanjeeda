import React from 'react'
import Back from "../common/back/Back"


import ServicesCard from './ServicesCard'


const ServicesHome = () => {
  return (
    <>
    <section
       className="  py-12 hero bg-cover justify-center text-black" style={{
        backgroundImage: "url('ap.img.png')",
        backgroundPosition: "center",
        backgroundSize: "contain w-full sm:w-auto px-2 py-1",
        
      }}
      >
    <Back title='Explore Services' />
    
    <ServicesCard/>
    
    
    </section>
    </>
  )
}

export default ServicesHome