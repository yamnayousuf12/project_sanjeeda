import React from "react";
import { blog } from "../../dummydata";

const BlogCard = () => {
  return (
    <>
      {blog.map((val, index) => (
        <div key={index} className="items bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="img">
            <img src={val.cover} alt={val.title} className="w-full h-48 object-cover" />
          </div>
          <div className="text p-6">
            <div className="admin flex justify-between text-sm text-gray-500 mb-4">
              <span>
                <i className="fa fa-user mr-4"></i>
                <label htmlFor="">{val.type}</label>
              </span>
              <span>
                <i className="fa fa-calendar-alt mr-4"></i>
                <label htmlFor="">{val.date}</label>
              </span>
              <span>
                <i className="fa fa-comments mr-2 "></i>
                <label htmlFor=" ">{val.com}</label>
              </span>
            </div>
            <h1 className="text-xl font-semibold text-gray-800 mb-2">{val.title}</h1>
            <p className="text-gray-600">{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
