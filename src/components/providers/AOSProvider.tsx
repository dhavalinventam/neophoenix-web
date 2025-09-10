'use client';

import { useEffect, ReactNode } from 'react';
import dynamic from 'next/dynamic';

interface AOSProviderProps {
  children: ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    // Initialize AOS after component mounts
    const initAOS = async () => {
      const AOS = (await import('aos')).default;

      AOS.init({
        duration: 1200, // Longer duration for smoother animations
        easing: 'ease-out-cubic', // Smoother easing curve
        once: false, // Animation happens only once
        offset: 50, // Smaller offset for earlier trigger
        delay: 0, // No base delay
        anchorPlacement: 'top-bottom', // Trigger when element enters viewport
        disable: false, // Enable AOS
        startEvent: 'DOMContentLoaded', // Start after DOM is ready
        initClassName: 'aos-init', // Class added after initialization
        animatedClassName: 'aos-animate', // Class added on animation
        useClassNames: false, // Don't use class names for animations
        disableMutationObserver: false, // Enable mutation observer
        debounceDelay: 50, // Debounce delay for resize
        throttleDelay: 99, // Throttle delay for scroll
      });

      // Refresh AOS on window resize
      const handleResize = () => {
        AOS.refresh();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    };

    initAOS();
  }, []);

  return <>{children}</>;
}
