// import React from 'react';

// const Login = () => {
//   return (
    
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         <form action="your-login-processing-url" method="post" className="space-y-4">
//           <div>
//             <label htmlFor="username" className="block font-semibold mb-1">Username</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block font-semibold mb-1">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" /> Remember me
//             </label>
//             <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
//           </div>
//           <input
//             type="submit"
//             value="Login"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
//           />
//         </form>
//         <div className="text-center mt-4">
//           <p className="text-sm">
//             Don't have an account?{' '}
//             <a href="#" className="text-blue-500 hover:underline">Register</a>
//           </p>
//         </div>
       
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from 'react';

const Login = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('ap.img.png')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-TealBlue">Login</h2>
        <form action="your-login-processing-url" method="post" className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-semibold mb-1 text-TealBlue">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold mb-1 text-TealBlue">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
          <div className="flex items-center justify-between text-TealBlue">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-sm text-TealBlue hover:underline">Forgot password?</a>
          </div>
          <input
            type="submit"
            value="Login"
            className="w-full bg-TealBlue text-white py-2 rounded-md hover:bg-customBlue transition-colors cursor-pointer"
          />
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-TealBlue ">
            Don't have an account?{' '}
            <a href="#" className="text-TealBlue hover:underline">Register</a>
          </p>
        </div>
        <div className="flex gap-4 justify-center mt-6">
      <i className="fab fa-google text-3xl text-TealBlue  hover:text-red-500 transition-colors cursor-pointer"></i>
      <i className="fab fa-facebook text-3xl text-TealBlue  hover:text-blue-600 transition-colors cursor-pointer"></i>
    </div>
      </div>
    </div>
  );
};

export default Login;
