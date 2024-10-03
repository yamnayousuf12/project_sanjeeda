import React, { useState } from "react";
import { faq } from "../../dummydata";
import Title from "../common/title/Title";

const Faq = () => {
  const [click, setClick] = useState(null);

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <>
      <Title subtitle="FAQS" title="Frequently Asked Questions" />
      <section className="faq py-10 hero bg-cover h-screen flex items-center justify-center text-black"
        style={{
          backgroundImage: "url('ap.img.png')",
          backgroundPosition: "right center",
          backgroundSize: "contain w-full sm:w-auto px-2 py-1",
        }}>
        <div className="container mx-auto px-6">
          {faq.map((val, index) => (
            <div
              className="mb-4 border-b border-gray-200"
              key={index}
            >
              <button
                className="w-full text-left py-4 px-6 flex justify-between items-center bg-white shadow-lg rounded-lg"
                onClick={() => toggle(index)}
              >
                <h2 className="text-lg font-semibold">{val.title}</h2>
                <span>
                  {click === index ? (
                    <i className="fa fa-chevron-down text-gray-600"></i>
                  ) : (
                    <i className="fa fa-chevron-right text-gray-600"></i>
                  )}
                </span>
              </button>
              {click === index && (
                <div className="text p-6 bg-gray-100 rounded-lg">
                  <p className="text-gray-700">{val.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
