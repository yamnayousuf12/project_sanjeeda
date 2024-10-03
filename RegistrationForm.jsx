import React from 'react';

const RegistrationForm = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('ap.img.png')" }}
    >
    
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md ">
        <h1 className="text-2xl font-bold text-center mb-6 text-TealBlue">Registration Form</h1>
        <form action="#" method="POST" className="space-y-3">
          <div className="form-group">
            <label htmlFor="first-name" className="block font-semibold mb-1 text-TealBlue">
              Name
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mobile-number" className="block font-semibold mb-1 text-TealBlue">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile-number"
              name="mobile-number"
              placeholder="(000) 000-0000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="block font-semibold mb-1 text-TealBlue">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Street Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block font-semibold mb-1 text-TealBlue">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          

          {/* <div className="form-group">
            <label htmlFor="city" className="block font-semibold mb-1 text-TealBlue">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div> */}

          <button
            type="submit"
            className="w-full bg-TealBlue text-white py-2 rounded-md hover:bg-customBlue transition-colors cursor-pointer"
          >
            Submit
          </button>
          <div className="flex gap-4 justify-center mt-6">
      <i className="fab fa-google text-3xl text-customBlue hover:text-red-500 transition-colors cursor-pointer"></i>
      <i className="fab fa-facebook text-3xl text-customBlue hover:text-blue-600 transition-colors cursor-pointer"></i>
    </div>
        </form>
       
      </div>
    </div>
  );
};

export default RegistrationForm;
