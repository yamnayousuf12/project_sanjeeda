import React from 'react'
import Back from "../common/back/Back"


import ServicesCard from './ServicesCard'


const ServicesHome = () => {
  return (
    <>
    <section
        className="px-6"
        style={{
          backgroundImage: "url('ap.img.png')",
          backgroundPosition: "center right",
          backgroundSize: "contain",
        }}
      >
    <Back title='Explore Services' />
    
    <ServicesCard/>
    
    
    </section>
    </>
  )
}

export default ServicesHome