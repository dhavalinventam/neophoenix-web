'use client';

import { useEffect } from 'react';
import smoothScrollManager from '../../utils/smoothScroll';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

/**
 * Provider component that initializes smooth scrolling
 * Should be placed at the root of your app
 */
export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize smooth scrolling
    console.log('Smooth scroll initialized');

    // Cleanup on unmount
    return () => {
      smoothScrollManager.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
