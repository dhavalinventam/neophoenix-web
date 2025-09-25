import { useEffect, useCallback } from 'react';
import { scrollToElement, scrollToTop } from '../utils/smoothScroll';

interface UseSmoothScrollOptions {
  duration?: number;
  offset?: number;
}

/**
 * Custom hook for smooth scrolling functionality
 */
export const useSmoothScroll = (options: UseSmoothScrollOptions = {}) => {
  const { duration = 800, offset = -80 } = options;

  const scrollTo = useCallback((elementId: string) => {
    return scrollToElement(elementId, { duration, offset });
  }, [duration, offset]);

  const scrollToTop = useCallback(() => {
    return scrollToTop({ duration });
  }, [duration]);

  // Auto-scroll to top on component mount (optional)
  useEffect(() => {
    // Uncomment if you want to scroll to top when component mounts
    // scrollToTop();
  }, []);

  return {
    scrollTo,
    scrollToTop,
  };
};

/**
 * Hook for handling anchor link clicks
 */
export const useAnchorScroll = (options: UseSmoothScrollOptions = {}) => {
  const { scrollTo } = useSmoothScroll(options);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const elementId = href.substring(1);
      scrollTo(elementId);
    }
  }, [scrollTo]);

  return {
    handleAnchorClick,
    scrollTo,
  };
};
