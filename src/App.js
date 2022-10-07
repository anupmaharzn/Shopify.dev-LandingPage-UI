import React from 'react';
import BannerSection from './components/Home/BannerSection/BannerSection';
import CommunitySection from './components/Home/CommunitySection/CommunitySection';
import HeroSection from './components/Home/HeroSection/HeroSection';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';

import './scss/main.scss';
function App() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <BannerSection />
      <CommunitySection />
      <Footer />
    </React.Fragment>
  );
}

export default App;
