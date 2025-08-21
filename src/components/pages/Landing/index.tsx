import React from 'react';
import HeroSection from './hero-section';
import OurServices from './our-services';
import HowItWorks from './how-it-works';
import PersonalizedWishlist from './personalized-wishlist';
import Testimonials from './testimonials';
import FAQ from './faq';
import CtaBanner from './cta-banner';
import FeatureComparison from './Feature-Comparison';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <HowItWorks />
      <PersonalizedWishlist />
      <Testimonials />
      <FAQ />
      <FeatureComparison />
      <CtaBanner />
    </>
  );
};

export default LandingPage;
