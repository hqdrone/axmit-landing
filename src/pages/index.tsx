import React from 'react';

import 'static/css/index.scss';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Delivery from '../components/Delivery';
import Team from '../components/Team';
import Footer from '../components/Footer';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Delivery />
      <Team />
      <Footer />
    </div>
  );
};

export default IndexPage;
