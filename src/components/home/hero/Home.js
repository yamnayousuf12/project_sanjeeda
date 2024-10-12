import React from 'react';
import Hero from './Hero';
import AboutCard from '../../about/AboutCard';
import HAbout from '../HAbout';
import Hblog from '../Hblog';
import Testimonal from '../testimonal/Testimonal';
import Hprice from '../Hprice';



const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Hblog />
      <Testimonal />
      <Hprice/>
     
    </>
  );
};

export default Home;
