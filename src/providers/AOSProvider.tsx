'use client';

import { useEffect } from 'react';
import AOS from 'aos';

interface AOSProviderProps {
  children: React.ReactNode;
}

const AOSProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    // Initialize AOS with your specified settings
    AOS.init({
      duration: 1000,
      once: false, // Animations run every time
      mirror: true, // Animations work on scroll-up too
      offset: 100, // Offset from the original trigger point
      delay: 0, // Values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // Default easing for AOS animations
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
    });

    // Refresh AOS on window resize
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
