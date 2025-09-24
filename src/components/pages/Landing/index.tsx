import HeroSection from './hero-section';
import WhoWeAre from './who-we-are';
import PersonalizedWishlist from './personalized-wishlist';
import DemoAnimation from './our-services';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <DemoAnimation />
      <WhoWeAre />
      <PersonalizedWishlist />
    </>
  );
};

export default LandingPage;
