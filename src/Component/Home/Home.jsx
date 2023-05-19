import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-3 sm:grid-flow-col-1">
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
