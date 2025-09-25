/**
 * Scroll Performance Optimization Utilities
 * Provides throttling, debouncing, and performance monitoring for scroll events
 */

interface ScrollPerformanceOptions {
  throttleMs?: number;
  debounceMs?: number;
  enableMonitoring?: boolean;
}

class ScrollPerformanceManager {
  private throttleMs: number;
  private debounceMs: number;
  private enableMonitoring: boolean;
  private scrollHandlers: Set<() => void> = new Set();
  private isThrottling = false;
  private debounceTimeout: NodeJS.Timeout | null = null;
  private lastScrollTime = 0;
  private frameCount = 0;
  private lastFrameTime = 0;

  constructor(options: ScrollPerformanceOptions = {}) {
    this.throttleMs = options.throttleMs || 16; // ~60fps
    this.debounceMs = options.debounceMs || 100;
    this.enableMonitoring = options.enableMonitoring || false;
  }

  /**
   * Throttled scroll handler - limits execution to specified interval
   */
  public addThrottledScrollHandler(handler: () => void): () => void {
    this.scrollHandlers.add(handler);

    const throttledHandler = () => {
      if (this.isThrottling) return;

      this.isThrottling = true;
      requestAnimationFrame(() => {
        handler();
        this.isThrottling = false;
      });
    };

    return throttledHandler;
  }

  /**
   * Debounced scroll handler - delays execution until scroll stops
   */
  public addDebouncedScrollHandler(handler: () => void): () => void {
    this.scrollHandlers.add(handler);

    const debouncedHandler = () => {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }

      this.debounceTimeout = setTimeout(() => {
        handler();
        this.debounceTimeout = null;
      }, this.debounceMs);
    };

    return debouncedHandler;
  }

  /**
   * Optimized scroll handler with both throttling and debouncing
   */
  public addOptimizedScrollHandler(handler: () => void): () => void {
    this.scrollHandlers.add(handler);

    let ticking = false;
    let debounceTimeout: NodeJS.Timeout | null = null;

    const optimizedHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handler();
          ticking = false;
        });
        ticking = true;
      }

      // Debounce for final execution
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
      debounceTimeout = setTimeout(() => {
        handler();
        debounceTimeout = null;
      }, this.debounceMs);
    };

    return optimizedHandler;
  }

  /**
   * Monitor scroll performance
   */
  private monitorPerformance(): void {
    if (!this.enableMonitoring) return;

    const now = performance.now();
    this.frameCount++;

    if (now - this.lastFrameTime >= 1000) {
      const fps = this.frameCount;
      this.frameCount = 0;
      this.lastFrameTime = now;

      if (fps < 30) {
        console.warn(`Low scroll performance detected: ${fps} FPS`);
      }
    }
  }

  /**
   * Remove a scroll handler
   */
  public removeScrollHandler(handler: () => void): void {
    this.scrollHandlers.delete(handler);
  }

  /**
   * Clear all scroll handlers
   */
  public clearAllHandlers(): void {
    this.scrollHandlers.clear();
  }

  /**
   * Get performance metrics
   */
  public getPerformanceMetrics() {
    return {
      activeHandlers: this.scrollHandlers.size,
      isThrottling: this.isThrottling,
      hasDebounceTimeout: !!this.debounceTimeout,
    };
  }
}

// Create singleton instance
const scrollPerformanceManager = new ScrollPerformanceManager({
  throttleMs: 16,
  debounceMs: 100,
  enableMonitoring: process.env.NODE_ENV === 'development',
});

export default scrollPerformanceManager;

/**
 * Hook for optimized scroll handling
 */
export const useOptimizedScroll = (handler: () => void, options?: ScrollPerformanceOptions) => {
  const manager = new ScrollPerformanceManager(options);
  
  return manager.addOptimizedScrollHandler(handler);
};

/**
 * Utility to check if element is in viewport
 */
export const isElementInViewport = (element: HTMLElement, threshold = 0.1): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= -windowHeight * threshold &&
    rect.left >= -windowWidth * threshold &&
    rect.bottom <= windowHeight * (1 + threshold) &&
    rect.right <= windowWidth * (1 + threshold)
  );
};

/**
 * Utility to get scroll progress (0-1)
 */
export const getScrollProgress = (element: HTMLElement): number => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  const elementTop = rect.top;
  const elementHeight = rect.height;
  const viewportHeight = windowHeight;
  
  if (elementTop > viewportHeight) return 0;
  if (elementTop + elementHeight < 0) return 1;
  
  return Math.max(0, Math.min(1, -elementTop / (elementHeight + viewportHeight)));
};
