
import React from "react";
import { servicesCard } from "../../dummydata";

const ServicesCard = () => {
  return (
    <section className="  py-12" style={{
      backgroundImage: "url('ap.img.png')",
      backgroundPosition: "center",
      backgroundSize: "contain",
      
    }}>
      <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesCard.map((val) => (
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            key={val.id}
          >
            <div className="flex flex-col items-center p-4">
              <img
                src={val.cover}
                alt={val.ServicesName}
                className="w-full h-48 object-cover"
              />
              <div className="mt-4 text-center">
                <h1 className="text-xl font-semibold text-gray-800">
                  {val.ServicesName}
                </h1>
                <p className="mt-2 text-gray-900">{val.desc}</p>
              </div>
            </div>
            <div className="mt-auto p-4">
              <button className="w-full bg-darkBlue text-white py-2 px-4 rounded hover:bg-customBlue transition">
              Click here
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
