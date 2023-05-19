import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import ContactForm from './Contact/Contact';
import ShopCategory from '../ShopCategory/ShopCategory';

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
