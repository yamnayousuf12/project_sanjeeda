import React from "react";
import { price } from "../../dummydata";

const PriceCard = () => {
  return (
    <>
      {price.map((val, index) => (
        <div
          className="items shadow-lg p-6 bg-customBlue rounded-lg text-center hover:shadow-2xl transition-shadow duration-300"
          key={index}
        >
          <h4 className="text-xl font-semibold mb-2 text-gray-100">{val.name}</h4>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="text-xl">$</span>
            {val.price}
          </h1>
          <p className="text-gray-100 mb-6">{val.desc}</p>
          <button className="w-full bg-TealBlue text-gray-50 py-2 px-4 rounded hover:bg-gray-600 transition">
            GET STARTED
          </button>
        </div>
      ))}
    </>
  );
};

export default PriceCard;
