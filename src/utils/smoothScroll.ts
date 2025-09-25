/**
 * Smooth Scroll Utility
 * Provides enhanced smooth scrolling with performance optimizations
 */

interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number;
  preventDefault?: boolean;
}

// Easing functions
const easingFunctions = {
  easeInOutCubic: (t: number): number => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutCubic: (t: number): number => (--t) * t * t + 1,
  easeInOutQuad: (t: number): number => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeOutQuad: (t: number): number => t * (2 - t),
  linear: (t: number): number => t,
};

class SmoothScrollManager {
  private isScrolling = false;
  private scrollTimeout: NodeJS.Timeout | null = null;
  private rafId: number | null = null;

  constructor() {
    this.init();
  }

  private init(): void {
    // Only initialize in browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // Check if CSS smooth scroll is supported
    if (!this.isCSSSmoothScrollSupported()) {
      this.addJavaScriptFallback();
    }

    // Add performance optimizations
    this.addPerformanceOptimizations();
  }

  private isCSSSmoothScrollSupported(): boolean {
    if (typeof document === 'undefined') {
      return false;
    }
    return 'scrollBehavior' in document.documentElement.style;
  }

  private addJavaScriptFallback(): void {
    // Only add fallback in browser environment
    if (typeof document === 'undefined') {
      return;
    }

    // Override default anchor link behavior
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          this.scrollToElement(targetId, {
            duration: 800,
            easing: easingFunctions.easeInOutCubic,
            offset: -80, // Account for fixed header
          });
        }
      }
    });
  }

  private addPerformanceOptimizations(): void {
    // Only add optimizations in browser environment
    if (typeof window === 'undefined') {
      return;
    }

    // Throttle scroll events for better performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add any scroll-based animations or effects here
          this.handleScrollEvent();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  private handleScrollEvent(): void {
    // This method can be used for scroll-based optimizations
    // For example, pausing animations when not in viewport
  }

  public scrollToElement(
    elementId: string, 
    options: SmoothScrollOptions = {}
  ): Promise<void> {
    return new Promise((resolve) => {
      // Only work in browser environment
      if (typeof document === 'undefined' || typeof window === 'undefined') {
        resolve();
        return;
      }

      const element = document.getElementById(elementId);
      if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        resolve();
        return;
      }

      const {
        duration = 800,
        easing = easingFunctions.easeInOutCubic,
        offset = 0,
      } = options;

      if (this.isScrolling) {
        this.cancelScroll();
      }

      this.isScrolling = true;
      const startTime = performance.now();
      const startPosition = window.pageYOffset;
      const targetPosition = element.offsetTop + offset;
      const distance = targetPosition - startPosition;

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);

        window.scrollTo(0, startPosition + distance * easedProgress);

        if (progress < 1) {
          this.rafId = requestAnimationFrame(animateScroll);
        } else {
          this.isScrolling = false;
          this.rafId = null;
          resolve();
        }
      };

      this.rafId = requestAnimationFrame(animateScroll);
    });
  }

  public scrollToTop(options: SmoothScrollOptions = {}): Promise<void> {
    return this.scrollToElement('', { ...options, offset: 0 });
  }

  private cancelScroll(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.isScrolling = false;
  }

  public destroy(): void {
    this.cancelScroll();
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
}

// Create singleton instance
const smoothScrollManager = new SmoothScrollManager();

// Export functions for easy use
export const scrollToElement = (elementId: string, options?: SmoothScrollOptions) => 
  smoothScrollManager.scrollToElement(elementId, options);

export const scrollToTop = (options?: SmoothScrollOptions) => 
  smoothScrollManager.scrollToTop(options);

export const destroySmoothScroll = () => 
  smoothScrollManager.destroy();

export default smoothScrollManager;
