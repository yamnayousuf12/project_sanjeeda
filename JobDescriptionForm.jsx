

import React from 'react';

const JobDescriptionForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('ap.img.png')" }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-TealBlue text-3xl font-semibold mb-6">Job Success Form</h1>
        <table className="w-full text-white">
          <tbody>
            <tr className="border-b border-TealBlue ">
              <td className="section py-2 text-TealBlue font-semibold">Position Information</td>
              <td className="details"></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Position Title:</td>
              <td><input className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue " type="text" /></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Division/Department:</td>
              <td><input className="w-full px-3 py-2  bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue" type="text" /></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Reports To:</td>
              <td><input className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue" type="text" /></td>
            </tr>
            <tr>
              <td className="py-2 text-TealBlue">Span of Control (Who reports to this position):</td>
              <td><input className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue" type="text" /></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Job Grade:</td>
              <td><input className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue" type="text" /></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Job Location:</td>
              <td><input className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue" type="text" /></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Department Goals:</td>
              <td><textarea rows="2" className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue"></textarea></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Success Factors at Job (key success areas):</td>
              <td><textarea rows="2" className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue"></textarea></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">JD (4 to 5 lines):</td>
              <td><textarea rows="4" className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue"></textarea></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Projects required from this position:</td>
              <td><textarea rows="2" className="w-full px-3 py-2  bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue"></textarea></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Major Challenges / Problems:</td>
              <td>
              <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Work</th>
            <th className="py-3 px-6 text-left">Team</th>
            <th className="py-3 px-6 text-left">Process</th>
            <th className="py-3 px-6 text-left">Client</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {[...Array(3)].map((_, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
              <td className="py-3 px-6">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
              <td className="py-3 px-6">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
              <td className="py-3 px-6">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
              </td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Required Expertise for Success:</td>
              <td><textarea rows="2" className="w-full px-3 py-2  bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue"></textarea></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Education Required:</td>
              <td><textarea rows="2" className="w-full px-3 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue"></textarea></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Experience Required:</td>
              <td><textarea rows="2" className="w-full px-3 py-2  bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue"></textarea></td>
            </tr>
            <tr>
              <td className="py-4 text-TealBlue">Personality Required:</td>
              <td><textarea rows="2" className="w-full px-3 py-2  bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-customBlue"></textarea></td>
            </tr>
          </tbody>
        </table>
        <button className="w-full mt-6 py-2 bg-TealBlue hover:bg-customBlue text-white rounded transition duration-200">Submit</button>
      </div>
    </div>
  );
};

export default JobDescriptionForm;
