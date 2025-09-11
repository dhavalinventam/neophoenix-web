'use client';

import { useEffect, ReactNode } from 'react';

interface AOSProviderProps {
  children: ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    // Initialize AOS after component mounts
    const initAOS = async () => {
      const AOS = (await import('aos')).default;

      // Check if we're on mobile/tablet for responsive behavior
      const isMobile = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

      AOS.init({
        duration: isMobile ? 800 : 1200, // Shorter duration on mobile
        easing: 'ease-out-cubic',
        once: false, // Allow animations to repeat on scroll
        offset: isMobile ? 20 : 50, // Smaller offset on mobile for earlier trigger
        delay: 0,
        anchorPlacement: 'top-bottom',
        disable: false, // Keep enabled on all devices
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
      });

      // Handle responsive behavior
      const handleResize = () => {
        const newIsMobile = window.innerWidth <= 768;
        const newIsTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

        // Reinitialize AOS with new settings based on screen size
        AOS.init({
          duration: newIsMobile ? 800 : 1200,
          easing: 'ease-out-cubic',
          once: false,
          offset: newIsMobile ? 20 : 50,
          delay: 0,
          anchorPlacement: 'top-bottom',
          disable: false,
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
        });
      };

      // Handle scroll events for better performance
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            AOS.refresh();
            ticking = false;
          });
          ticking = true;
        }
      };

      // Add event listeners
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Initial refresh after a short delay to ensure DOM is ready
      setTimeout(() => {
        AOS.refresh();
      }, 100);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    };

    // Small delay to ensure DOM is fully loaded
    const timer = setTimeout(initAOS, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
}
