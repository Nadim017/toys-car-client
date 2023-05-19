import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import ContactForm from './Contact/Contact';

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Gallery></Gallery>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
