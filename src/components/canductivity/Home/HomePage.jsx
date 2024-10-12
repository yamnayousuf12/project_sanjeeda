import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css'; 
// import ButtonSection from '../components/ButtonSection';  
import { Link } from 'react-router-dom'; 
import ButtonSection from '../Button/ButtonSection';
import SimpleCarousel from '../SimpleCarousel/SimpleCarousel';
const HomePage = () => {
 
return (

<div className="site-header">
<SimpleCarousel/>
{/* <ButtonSection/> */}
<ButtonSection/>
<Link to="/home#Home"> Home </Link>

</div>
  );};

export default HomePage;