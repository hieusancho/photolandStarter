import React from 'react';
//lg theo desktop
//xl :mobile

//import component

import LatestProducts from '../components/LatestProducts.js';
import Hero from '../components/Hero.js';


const Home = () => {
  

  return (
    <section>
      <Hero/>
      <LatestProducts/>
    </section>
 
  );
};

export default Home;
