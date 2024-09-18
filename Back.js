
import React from "react";
import { useLocation } from "react-router-dom";

const Back = ({ title }) => {
  const location = useLocation();

  return (
    <>
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-sm sm:text-base text-gray-600">
            Home / {location.pathname.split("/")[1]}
          </h2>
          <h1 className="text-2xl sm:text-4xl font-bold mt-2">{title}</h1>
        </div>
      </section>
      <div className="my-8"></div>
    </>
  );
};

export default Back;
