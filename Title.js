import React from "react";

const Title = ({ subtitle, title }) => {
  return (
    <>
      <div className='text-center mb-8'>
        <h3 className='text-lg font-semibold uppercase'>{subtitle}</h3>
        <h1 className='text-3xl md:text-4xl font-bold mt-2'>{title}</h1>
      </div>
    </>
  );
};

export default Title;
