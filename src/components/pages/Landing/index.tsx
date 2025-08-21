import React from 'react';
import HeroSection from './hero-section';
import OurServices from './our-services';
import HowItWorks from './how-it-works';
import PersonalizedWishlist from './personalized-wishlist';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <HowItWorks />
      <PersonalizedWishlist />
    </>
  );
};

export default LandingPage;
