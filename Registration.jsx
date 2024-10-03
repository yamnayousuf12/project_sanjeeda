import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Registration Form</h1>
        <form action="#" method="POST" className="space-y-6">
          <div className="form-group">
            <label htmlFor="first-name" className="block font-semibold mb-1">
              Name
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mobile-number" className="block font-semibold mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile-number"
              name="mobile-number"
              placeholder="(000) 000-0000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="block font-semibold mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Street Address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block font-semibold mb-1">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="city" className="block font-semibold mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Submit
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="index.html" className="text-blue-500 hover:underline">
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
