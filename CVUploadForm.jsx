import React from 'react';

const CVUploadForm = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('ap.img.png')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <form action="/submit" method="post" encType="multipart/form-data" className="space-y-1">
          <h2 className="text-2xl font-bold text-center mb-6 text-TealBlue">CV Upload Form</h2>
          <div className="form-group">
            <label htmlFor="firstName" className="block font-semibold mb-1 text-TealBlue">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="block font-semibold mb-1 text-TealBlue">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block font-semibold mb-1 text-TealBlue">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobDetails" className="block font-semibold mb-1 text-TealBlue">
              Job Details: (describe your output requirements)
            </label>
            <textarea
              id="jobDetails"
              name="jobDetails"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            ></textarea>
          </div>
          <div className="form-group text-TealBlue">
            <label htmlFor="fileUpload" className="block font-semibold mb-1 text-TealBlue">
              Click to upload Files:
            </label>
            <input
              type="file"
              id="fileUpload"
              name="fileUpload"
              required
              className="w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-TealBlue text-white py-2 rounded-md hover:bg-customBlue transition-colors cursor-pointer"
          >
            Submit File
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

export default CVUploadForm;
