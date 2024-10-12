
import React from "react";
import { awrapper } from "../../dummydata";

const Awrapper = () => {
  return (
    <>
      <section className="py-12 bg-customBlue">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awrapper.map((val, index) => (
            <div key={index} className="box flex items-center bg-TealBlue p-4 shadow-md rounded-lg">
              <div className="img mr-4">
                <img src={val.cover} alt={val.title} className="w-16 h-16 object-cover" />
              </div>
              <div className="text-gray-50
              ">
                <h1 className="text-xl font-bold">{val.data}</h1>
                <h3 className="text-gray-100">{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Awrapper;
