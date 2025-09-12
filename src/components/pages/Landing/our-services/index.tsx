'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './OurServices.module.scss';
import Button from '@/components/ui/button';
import NeuralNetworkAccent from '@/components/ui/neural-network-accent';

const DemoAnimation = () => {
  const [activeVideoIndex, setActiveVideoIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const [refreshKey, setRefreshKey] = React.useState(0);
  const [autoRefreshEnabled, setAutoRefreshEnabled] = React.useState(true);

  // Synchronized slide change function
  const changeSlide = (newIndex: number) => {
    console.log('Changing slide to:', newIndex, 'Is mobile:', isMobile);
    setActiveVideoIndex(newIndex);
  };

  // Refresh function for mobile/tablet screens
  const handleRefresh = React.useCallback(() => {
    if (isMobile) {
      console.log('Refreshing content for mobile/tablet');
      setActiveVideoIndex(0);
      setRefreshKey((prev) => prev + 1);

      // Reset all active states
      setTimeout(() => {
        const allSections = document.querySelectorAll(`.${styles.locker__section}`);
        const allImages = document.querySelectorAll(
          `.${styles.locker__container} img, .${styles.locker__container} picture, .${styles.locker__container} video`
        );

        // Reset all sections and images
        allSections.forEach((section) => {
          section.classList.remove(styles.active, 'active');
        });
        allImages.forEach((media) => {
          media.classList.remove(styles.active, 'active');
        });

        // Set first section and image as active
        if (allSections[0]) {
          allSections[0].classList.add(styles.active, 'active');
        }
        if (allImages[0]) {
          allImages[0].classList.add(styles.active, 'active');
        }
      }, 100);
    }
  }, [isMobile]);

  // Toggle auto-refresh function
  const toggleAutoRefresh = () => {
    setAutoRefreshEnabled((prev) => !prev);
    console.log('Auto-refresh toggled:', !autoRefreshEnabled);
  };

  // Swipe functionality for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && activeVideoIndex < 1) {
      changeSlide(activeVideoIndex + 1);
    }
    if (isRightSwipe && activeVideoIndex > 0) {
      changeSlide(activeVideoIndex - 1);
    }
  };

  useEffect(() => {
    // Only apply scroll functionality for screens >= 992px
    const checkScreenSize = () => {
      return window.innerWidth >= 992;
    };

    // Check if mobile/tablet
    const checkMobile = () => {
      return window.innerWidth < 992;
    };

    // Set mobile state
    if (typeof window !== 'undefined') {
      const isMobileDevice = checkMobile();
      setIsMobile(isMobileDevice);
      console.log('Screen width:', window.innerWidth, 'Is mobile:', isMobileDevice);

      // For mobile/tablet, sync video navigation with content
      if (isMobileDevice) {
        setActiveVideoIndex(0);
      }
    }

    // Handle window resize
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener('resize', handleResize);

    // Auto-refresh for mobile/tablet screens
    let autoRefreshInterval: NodeJS.Timeout;
    if (typeof window !== 'undefined' && checkMobile() && autoRefreshEnabled) {
      autoRefreshInterval = setInterval(() => {
        console.log('Auto-refreshing content...');
        handleRefresh();
      }, 10000); // Auto-refresh every 10 seconds
    }

    // Intersection Observer for image swapping (only on desktop)
    if (typeof window !== 'undefined' && window.IntersectionObserver && checkScreenSize()) {
      console.log('Setting up intersection observer for desktop');
      const options = {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Multiple thresholds for better detection
        rootMargin: '0px 0px -10% 0px', // Trigger when section is 10% from bottom
      };

      const targets = document.querySelectorAll('.cb');
      console.log('Found targets:', targets.length);
      let currentActiveSection = 'image--1'; // Default to first image

      function handleIntersection(entries: IntersectionObserverEntry[]) {
        console.log('Intersection observer triggered:', entries.length, 'entries');
        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let activeSection = currentActiveSection;

        entries.forEach((entry) => {
          console.log(
            'Entry:',
            entry.target,
            'isIntersecting:',
            entry.isIntersecting,
            'ratio:',
            entry.intersectionRatio
          );
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            const currentImage = entry.target.getAttribute('data-swap');
            if (currentImage) {
              activeSection = currentImage;
            }
          }
        });

        // Only update if we have a new active section
        if (activeSection !== currentActiveSection) {
          currentActiveSection = activeSection;
          console.log('Switching to:', currentActiveSection);

          // Remove active class from all images and videos
          const allImages = document.querySelectorAll(
            `.${styles.locker__container} img, .${styles.locker__container} picture, .${styles.locker__container} video`
          );
          allImages.forEach((media) => {
            media.classList.remove(styles.active, 'active');
          });

          // Remove active class from all sections
          const allSections = document.querySelectorAll(`.${styles.locker__section}`);
          allSections.forEach((section) => {
            section.classList.remove(styles.active, 'active');
          });

          // Remove active class from all progress dots
          const allDots = document.querySelectorAll(`.${styles.progressDot}`);
          allDots.forEach((dot) => {
            dot.classList.remove(styles.active, 'active');
          });

          // Add active class to current image/video based on index
          const imageIndex = parseInt(currentActiveSection.replace('image--', '')) - 1;
          const images = document.querySelectorAll(
            `.${styles.locker__container} img, .${styles.locker__container} picture, .${styles.locker__container} video`
          );
          if (images[imageIndex]) {
            images[imageIndex].classList.add(styles.active, 'active');
            console.log('Media activated by index:', currentActiveSection, 'index:', imageIndex);
          } else {
            console.log('Media not found:', currentActiveSection, 'index:', imageIndex);
          }

          // Add active class to current section
          const activeSectionElement = document.querySelector(
            `[data-swap="${currentActiveSection}"]`
          );
          if (activeSectionElement) {
            activeSectionElement.classList.add(styles.active, 'active');
            console.log('Section activated:', currentActiveSection);
          }

          // Add active class to current progress dot
          const activeProgressDot = document.querySelector(
            `.${styles.progressDot}[data-section="${currentActiveSection}"]`
          );
          if (activeProgressDot) {
            activeProgressDot.classList.add(styles.active, 'active');
            console.log('Progress dot activated:', currentActiveSection);
          }
        }
      }

      const observer = new IntersectionObserver(handleIntersection, options);
      console.log('Observer created, observing targets:', targets.length);
      targets.forEach((target) => {
        console.log('Observing target:', target);
        observer.observe(target);
      });

      // Set first section and progress dot as active by default
      setTimeout(() => {
        const firstSection = document.querySelector('[data-swap="image--1"]');
        if (firstSection) {
          firstSection.classList.add(styles.active, 'active');
        }
        const firstProgressDot = document.querySelector(
          `.${styles.progressDot}[data-section="image--1"]`
        );
        if (firstProgressDot) {
          firstProgressDot.classList.add(styles.active, 'active');
        }
        // Set first image/video as active by index
        const images = document.querySelectorAll(
          `.${styles.locker__container} img, .${styles.locker__container} picture, .${styles.locker__container} video`
        );
        if (images[0]) {
          images[0].classList.add(styles.active, 'active');
          console.log('First media activated by index');
        }
      }, 100);

      // Store observer for cleanup
      const desktopObserver = observer;

      // Cleanup function
      return () => {
        if (autoRefreshInterval) {
          clearInterval(autoRefreshInterval);
        }
        window.removeEventListener('resize', handleResize);
        targets.forEach((target) => desktopObserver.unobserve(target));
      };
    } else {
      // For mobile/tablet, show all content without scroll functionality
      setTimeout(() => {
        const allSections = document.querySelectorAll(`.${styles.locker__section}`);
        const allImages = document.querySelectorAll(
          `.${styles.locker__container} img, .${styles.locker__container} picture, .${styles.locker__container} video`
        );

        // Show all sections and images on mobile
        allSections.forEach((section) => {
          section.classList.add(styles.active, 'active');
        });
        allImages.forEach((media) => {
          media.classList.add(styles.active, 'active');
        });
      }, 100);

      // Cleanup function for mobile
      return () => {
        if (autoRefreshInterval) {
          clearInterval(autoRefreshInterval);
        }
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [refreshKey, autoRefreshEnabled, handleRefresh]);

  return (
    <>
      <div className={styles.ourServices}>
        {/* Neural Network Accent Elements */}
        <NeuralNetworkAccent 
          size="medium" 
          position="top-right" 
          opacity={0.75}
          nodeCount={30}
          maxConnectionDist={100}
        />
        <NeuralNetworkAccent 
          size="small" 
          position="bottom-left" 
          opacity={0.65}
          nodeCount={15}
          maxConnectionDist={70}
        />
        <NeuralNetworkAccent 
          size="small" 
          position="top-left" 
          opacity={0.6}
          nodeCount={20}
          maxConnectionDist={85}
        />
        <NeuralNetworkAccent 
          size="medium" 
          position="bottom-right" 
          opacity={0.55}
          nodeCount={25}
          maxConnectionDist={95}
        />
        <NeuralNetworkAccent 
          size="small" 
          position="center" 
          opacity={0.45}
          nodeCount={18}
          maxConnectionDist={75}
        />

        <div className={styles.section}>
          <div className={styles.container}>
            <div
              className={`${styles.header} header`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-out-cubic"
            >
              <h2 className={`${styles.title} title`}>Our AI-Powered Services</h2>
              <p className={`${styles.description} description`}>
                Empower your team with <strong>secure, AI-driven insights</strong> and{' '}
                <em>workflow automation</em> tailored to your data, tools, and processes.
              </p>
            </div>
          </div>
        </div>
        <div
          className={styles.locker}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          <div className={styles.locker__image}>
            <div
              className={`${styles.locker__container} ${isMobile ? styles.sliderContainer : ''}`}
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchMove={isMobile ? handleTouchMove : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
            >
              <div
                className={`${styles.imagerow} ${activeVideoIndex === 0 ? styles.active : ''} ${isMobile ? styles.slide : ''}`}
              >
                <video
                  src="/video/Rag-product-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.video}
                />
              </div>
              <div
                className={`${styles.imagerow} ${activeVideoIndex === 1 ? styles.active : ''} ${isMobile ? styles.slide : ''}`}
              >
                <video
                  src="/video/task-prompt-ai-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.video}
                />
              </div>
            </div>
          </div>

          <div
            className={`${styles.locker__content} ${isMobile ? styles.contentSlider : ''}`}
            onTouchStart={isMobile ? handleTouchStart : undefined}
            onTouchMove={isMobile ? handleTouchMove : undefined}
            onTouchEnd={isMobile ? handleTouchEnd : undefined}
          >
            <div
              className={`${styles.locker__section} ${styles['locker__section--1']} cb ${activeVideoIndex === 0 ? styles.active : ''} ${isMobile ? styles.contentSlide : ''}`}
              data-swap="image--1"
              onClick={() => changeSlide(0)}
            >
              <h2>Plug-and-Play RAG System</h2>
              <p className={styles.subtitle}>Your data. your control. smarter insights.</p>
              <p>
                Seamlessly connect your databases with secure local embeddings and zero external
                storage. Our RAG system delivers instant AI-powered chat and real-time
                answers—keeping sensitive data fully in your environment while unlocking actionable
                intelligence.
              </p>
              <Button label="LEARN MORE ABOUT RAG SYSTEM" />
            </div>

            <div
              className={`${styles.locker__section} ${styles['locker__section--2']} cb ${activeVideoIndex === 1 ? styles.active : ''} ${isMobile ? styles.contentSlide : ''}`}
              data-swap="image--2"
              onClick={() => changeSlide(1)}
            >
              <h2>Task Prompt AI Chrome Extension</h2>
              <p className={styles.subtitle}>AI-Powered Prompts Where Work Happens.</p>
              <p>
                Supercharge your workflows in Jira, ClickUp, Asana, and Trello with contextual,
                role-specific AI prompts. Cut task completion time in half while customizing prompts
                to match your team's industry, style, and goals.
              </p>
              <Button label="Try the Extension" />
            </div>
          </div>
        </div>

        {/* Arrow navigation for mobile - moved to bottom */}
        {isMobile && (
          <div
            className={styles.arrowNavigation}
            // data-aos="fade-up"
            // data-aos-delay="600"
            // data-aos-duration="1000"
            // data-aos-easing="ease-out-cubic"
          >
            <button
              className={styles.arrowButton}
              onClick={() => changeSlide(activeVideoIndex === 0 ? 1 : 0)}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={styles.slideIndicator}>
              <span className={styles.currentSlide}>{activeVideoIndex + 1}</span>
              <span className={styles.slideSeparator}>/</span>
              <span className={styles.totalSlides}>2</span>
            </div>

            <button
              className={styles.arrowButton}
              onClick={() => changeSlide(activeVideoIndex === 1 ? 0 : 1)}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default DemoAnimation;
