import React from "react";
import Back from "../common/back/Back";
import PriceCard from "./PriceCard";
import Faq from "./Faq";

const Pricing = () => {
  return (
    <>
      <Back title="Choose The Right Plan" />
      <section className="price py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PriceCard />
          </div>
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Pricing;
