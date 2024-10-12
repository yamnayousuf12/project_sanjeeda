import React from "react";
import PriceCard from "../pricing/PriceCard";
import Title from "../common/title/Title";

const Hprice = () => {
  return (
    <>
      <section className="hprice py-16 bg-gray-100">
        <div className="container mx-auto px-6 ">
          <Title subtitle="OUR PRICING" title="Pricing & Packages" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <PriceCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hprice;
