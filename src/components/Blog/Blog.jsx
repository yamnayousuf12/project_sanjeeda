// import React from "react"
// import Back from "../common/back/Back"
// import BlogCard from "./BlogCard"


// const Blog = () => {
//   return (
//     <>
//       <Back title='Blog Posts' />
//       <section className='blog padding'>
//         <div className='container grid2'>
//           <BlogCard />
//         </div>
//       </section>
//     </>
//   )
// }

// export default Blog


import React from "react";
import Back from "../common/back/Back";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
    
    <section
       className="py-12 hero bg-cover justify-center text-black" style={{
        backgroundImage: "url('ap.img.png')",
        backgroundPosition: "center",
        backgroundSize: "contain w-full sm:w-auto px-2 py-1",
        
      }}
      >
        <Back title="Blog Posts" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <BlogCard />
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Blog;

