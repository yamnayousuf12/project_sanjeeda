import React from "react"
import Back from "../common/back/Back"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'

  return (
    <>
      
      <section className='contacts py-16 bg-cover bg-center'
        style={{ backgroundImage: "url('../ap.img.png')" }}>
          <Back title='Contact us'  />
        <div className='container mx-auto p-8 bg-white shadow-lg flex flex-col lg:flex-row'>
          <div className='left w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8'>
          <iframe 
          src={map}
          title="Google Maps Location"
          className="w-full h-96 border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
          <div className='right w-full lg:w-1/2'>
            <h1 className='text-3xl font-bold mb-4'>Contact us</h1>
            <p className='mb-8 text-TealBlue'>We're open for any suggestion or just to have a chat</p>

            <div className='items grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
              <div className='box'>
                <h4 className='text-lg font-semibold'>ADDRESS:</h4>
                <p>Conductivity Careers & HR Soluions Block2 2 Gulshan-e-Iqbal, Karachi</p>
              </div>
              <div className='box'>
                <h4 className='text-lg font-semibold'>EMAIL:</h4>
                <p>info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4 className='text-lg font-semibold'>PHONE:</h4>
                <p>+ 1235 2355 98</p>
              </div>
            </div>

            <form action='' className='mb-8'>
              <div className='flex flex-col md:flex-row gap-4 mb-4'>
                <input
                  type='text'
                  placeholder='Name'
                  className='w-full p-4 border border-gray-300 rounded'
                />
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full p-4 border border-gray-300 rounded'
                />
              </div>
              <input
                type='text'
                placeholder='Subject'
                className='w-full p-4 mb-4 border border-gray-300 rounded'
              />
              <textarea
                cols='30'
                rows='10'
                placeholder='Create a message here...'
                className='w-full p-4 mb-4 border border-gray-300 rounded'
              ></textarea>
              <button className='primary-btn bg-customBlue text-white px-8 py-3 rounded hover:bg-TealBlue
              transition'>
                SEND MESSAGE
              </button>
            </form>

            <h3 className='text-xl font-semibold mb-4'>Follow us here</h3>
            <span className='text-TealBlue'>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
