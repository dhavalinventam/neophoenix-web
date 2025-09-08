'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import styles from './OurServices.module.scss';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const OurServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const isMountedRef = useRef(true);

  // Scroll-animated section refs
  const scrollSectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const contentPanelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Multiple scroll sections data
  const scrollSectionsData = useMemo(
    () => [
      {
        id: 1,
        title: 'Plug-and-Play RAG System',
        subtitle: 'Your Data. Your Control. Smarter Insights.',
        description:
          'Seamlessly connect your databases with secure local embeddings and zero external storage. Our RAG system delivers instant AI-powered chat and real-time answers—keeping sensitive data fully in your environment while unlocking actionable intelligence.',
        buttonText: 'Learn More About RAG System',
        buttonLink: '#contact',
        imageSrc:
          'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        imageAlt: 'AI Dashboard Preview',
        videoSrc: '/video/Rag-product-video.mp4',
        backgroundColor: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        textColor: '#ffffff',
        accentColor: '#63cfe9',
      },
      {
        id: 2,
        title: 'Task Prompt AI Chrome Extension',
        subtitle: 'AI-Powered Prompts Where Work Happens.',
        description:
          "Supercharge your workflows in Jira, ClickUp, Asana, and Trello with contextual, role-specific AI prompts. Cut task completion time in half while customizing prompts to match your team's industry, style, and goals.",
        buttonText: 'Try the Extension',
        buttonLink: '#services',
        imageSrc:
          'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        imageAlt: 'Chrome Extension Preview',
        videoSrc: '/video/task-prompt-ai-video.mp4',
        backgroundColor: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
        textColor: '#ffffff',
        accentColor: '#f59e0b',
      },
      {
        id: 3,
        title: '12312312312',
        subtitle: 'AI-Powered Prompts Where Work Happens.',
        description:
          "Supercharge your workflows in Jira, ClickUp, Asana, and Trello with contextual, role-specific AI prompts. Cut task completion time in half while customizing prompts to match your team's industry, style, and goals.",
        buttonText: 'Try the Extension',
        buttonLink: '#services',
        imageSrc:
          'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        imageAlt: 'Chrome Extension Preview',
        videoSrc: '/video/task-prompt-ai-video.mp4',
        backgroundColor: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
        textColor: '#ffffff',
        accentColor: '#f59e0b',
      },
      {
        id: 4,
        title: '11111111',
        subtitle: 'AI-Powered Prompts Where Work Happens.',
        description:
          "Supercharge your workflows in Jira, ClickUp, Asana, and Trello with contextual, role-specific AI prompts. Cut task completion time in half while customizing prompts to match your team's industry, style, and goals.",
        buttonText: 'Try the Extension',
        buttonLink: '#services',
        imageSrc:
          'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        imageAlt: 'Chrome Extension Preview',
        videoSrc: '/video/task-prompt-ai-video.mp4',
        backgroundColor: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
        textColor: '#ffffff',
        accentColor: '#f59e0b',
      },
    ],
    []
  );
  // Check if screen is mobile/tablet (under 992px)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Mouse tracking for interactive background effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const currentSection = sectionRef.current;
    if (currentSection) {
      currentSection.addEventListener('mousemove', handleMouseMove);
      return () => {
        currentSection.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  // Smooth scroll to section function
  const scrollToSection = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    // Use Intersection Observer for scroll-based animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Add animation classes to trigger CSS animations
            const header = entry.target.querySelector('.header');
            const serviceCards = entry.target.querySelectorAll('.serviceCard');
            const progressContainer = entry.target.querySelector('.progressContainer');

            if (header) {
              const title = header.querySelector('.title');
              const description = header.querySelector('.description');
              if (title) title.classList.add(styles.animateIn);
              if (description) description.classList.add(styles.animateIn);
            }

            if (progressContainer) {
              progressContainer.classList.add(styles.animateIn);
            }

            // Animate service cards with stagger
            serviceCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add(styles.animateIn);
              }, index * 100);
            });
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Mobile-only animations - handled by CSS
  useEffect(() => {
    if (!isMobile) return;

    // Mobile animations are now handled by CSS classes
    // The intersection observer will trigger the animations
  }, [isMobile]);

  // GSAP ScrollTrigger animations for multiple vertical scroll sections (desktop only)
  useEffect(() => {
    if (isMobile) return; // Skip GSAP animations on mobile
    if (!scrollSectionRef.current || !leftContentRef.current || !rightImageRef.current) return;

    // Check if elements are still connected to DOM
    const elements = [
      scrollSectionRef.current,
      leftContentRef.current,
      rightImageRef.current,
      titleRef.current,
      subtitleRef.current,
      descriptionRef.current,
      buttonRef.current,
    ];

    if (elements.some((el) => !el || !el.isConnected)) {
      return;
    }

    // Ensure image/video is visible initially
    if (imageRef.current) {
      gsap.set(imageRef.current, {
        opacity: 1,
        display: 'block',
        visibility: 'visible',
      });
    }
    if (videoRef.current) {
      gsap.set(videoRef.current, {
        opacity: 1,
        display: 'block',
        visibility: 'visible',
      });
    }

    // Force video to be visible if it's the first section
    if (currentSection === 0 && videoRef.current) {
      gsap.set(videoRef.current, {
        opacity: 1,
        display: 'block',
        visibility: 'visible',
        scale: 1,
        y: 0,
      });
    }

    const ctx = gsap.context(() => {
      // Set initial states - content starts visible to prevent blinking
      gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        clearProps: 'none',
      });

      gsap.set(rightImageRef.current, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        clearProps: 'none',
      });

      // Set initial states for image and video refs (only if they exist)
      const mediaElements = [imageRef.current, videoRef.current].filter(Boolean);
      if (mediaElements.length > 0) {
        gsap.set(mediaElements, {
          scale: 1,
          opacity: 1,
          y: 0,
          display: 'block',
          rotation: 0,
          clearProps: 'none',
        });
      }

      // Create main vertical scroll timeline with pinning via GSAP only
      const computeEnd = () => {
        const viewport = window.innerHeight || 1000;
        const sections = Math.max(1, scrollSectionsData.length - 1);
        const contentEl = contentPanelRef.current;
        const contentScroll = contentEl ? Math.max(0, contentEl.scrollHeight - viewport) : 0;
        const bySections = viewport * sections;
        const distance = Math.max(bySections, contentScroll || viewport);
        return `+=${distance}`;
      };
      gsap.timeline({
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          start: 'top top',
          end: computeEnd(),
          scrub: 0.2,
          pin: true,
          pinSpacing: true,
          anticipatePin: 0.1,
          invalidateOnRefresh: true,
          onRefreshInit: () => {
            // ensure end recalculates on refresh
            // no-op; computeEnd will re-evaluate due to invalidateOnRefresh
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const sectionIndex = Math.floor(progress * scrollSectionsData.length);
            const newSection = Math.min(sectionIndex, scrollSectionsData.length - 1);

            if (newSection !== currentSection) {
              // Smooth transition without complete fade out
              const transitionElements = [
                titleRef.current,
                subtitleRef.current,
                descriptionRef.current,
                buttonRef.current,
                imageRef.current,
                videoRef.current,
              ].filter(Boolean);

              // Create a smooth crossfade effect
              gsap.to(transitionElements, {
                opacity: 0.3,
                y: -10,
                scale: 0.98,
                duration: 0.15,
                ease: 'power2.inOut',
                onComplete: () => {
                  setCurrentSection(newSection);

                  // Smooth fade back in with new content
                  gsap.to(transitionElements, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.25,
                    ease: 'power2.out',
                    stagger: 0.05,
                  });
                },
              });
            }
          },
        },
      });

      // Content is already visible, no initial fade needed

      // Smooth parallax effect for image/video
      const parallaxElements = [imageRef.current, videoRef.current].filter(Boolean);
      if (parallaxElements.length > 0) {
        gsap.to(parallaxElements, {
          y: -30,
          // rotation: 5,
          scrollTrigger: {
            trigger: scrollSectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // No fade effects on scroll - content stays fully visible

      // Hover animations
      if (buttonRef.current) {
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.2,
            ease: 'power2.out',
          });
        });

        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.2,
            ease: 'power2.out',
          });
        });
      }

      // Image/Video hover effect
      if (imageRef.current) {
        imageRef.current.addEventListener('mouseenter', () => {
          gsap.to(imageRef.current, {
            rotation: 0,
            duration: 0.2,
            ease: 'power2.out',
          });
        });

        imageRef.current.addEventListener('mouseleave', () => {
          gsap.to(imageRef.current, {
            rotation: 0,
            duration: 0.2,
            ease: 'power2.out',
          });
        });
      }

      if (videoRef.current) {
        const handleVideoMouseEnter = () => {
          gsap.to(videoRef.current, {
            rotation: 0,
            duration: 0.2,
            ease: 'power2.out',
          });
        };

        const handleVideoMouseLeave = () => {
          gsap.to(videoRef.current, {
            rotation: 0,
            duration: 0.2,
            ease: 'power2.out',
          });
        };

        videoRef.current.addEventListener('mouseenter', handleVideoMouseEnter);
        videoRef.current.addEventListener('mouseleave', handleVideoMouseLeave);

        // Store the handlers for cleanup
        (videoRef.current as any)._mouseEnterHandler = handleVideoMouseEnter;
        (videoRef.current as any)._mouseLeaveHandler = handleVideoMouseLeave;
      }
    }, scrollSectionRef);

    return () => {
      // Only cleanup if component is still mounted
      if (!isMountedRef.current) return;

      // Clean up video event listeners
      const videoElement = videoRef.current;
      if (videoElement) {
        const video = videoElement as any;
        if (video._mouseEnterHandler && video._mouseLeaveHandler) {
          video.removeEventListener('mouseenter', video._mouseEnterHandler);
          video.removeEventListener('mouseleave', video._mouseLeaveHandler);
          delete video._mouseEnterHandler;
          delete video._mouseLeaveHandler;
        }
      }

      try {
        ctx.revert();
        // Clean up ScrollTrigger instances without refresh to avoid DOM issues
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger && trigger.trigger.isConnected) {
            trigger.kill();
          }
        });
      } catch (error) {
        console.warn('Error during GSAP cleanup:', error);
      }
    };
  }, [scrollSectionsData, currentSection, isMobile]);

  // Ensure video is visible when component mounts (desktop only)
  useEffect(() => {
    if (isMobile) return; // Skip on mobile

    console.log(
      'Current section:',
      currentSection,
      'VideoSrc:',
      scrollSectionsData[currentSection]?.videoSrc
    );

    if (currentSection === 0 && videoRef.current) {
      // Small delay to ensure video element is rendered
      setTimeout(() => {
        if (videoRef.current) {
          gsap.set(videoRef.current, {
            opacity: 1,
            display: 'block',
            visibility: 'visible',
            scale: 1,
            y: 0,
          });
        }
      }, 100);
    }
  }, [currentSection, scrollSectionsData, isMobile]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return (
    <>
      {isMobile ? (
        // Mobile/Tablet Static Layout (under 992px) - Both Services
        <section className={styles.mobileSection}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h2 className={styles.title}>Our AI-Powered Services</h2>
              <p className={styles.description}>
                Empower your team with <strong>secure, AI-driven insights</strong> and{' '}
                <em>workflow automation</em> tailored to your data, tools, and processes.
              </p>
            </div>

            <div className={styles.mobileServicesGrid}>
              {/* RAG System Card */}
              <div className={styles.mobileServiceCard}>
                <div className={styles.mobileImageContainer}>
                  <video className={styles.mobileVideo} autoPlay muted loop playsInline>
                    <source src={scrollSectionsData[0]?.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className={styles.mobileTextContent}>
                  <h2 className={styles.mobileTitle}>{scrollSectionsData[0]?.title}</h2>
                  <h3 className={styles.mobileSubtitle}>{scrollSectionsData[0]?.subtitle}</h3>
                  <p className={styles.mobileDescription}>{scrollSectionsData[0]?.description}</p>
                  <a href={scrollSectionsData[0]?.buttonLink} className={styles.mobileButton}>
                    {scrollSectionsData[0]?.buttonText}
                  </a>
                </div>
              </div>

              {/* Chrome Extension Card */}
              <div className={styles.mobileServiceCard}>
                <div className={styles.mobileImageContainer}>
                  <video className={styles.mobileVideo} autoPlay muted loop playsInline>
                    <source src={scrollSectionsData[1]?.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className={styles.mobileTextContent}>
                  <h2 className={styles.mobileTitle}>{scrollSectionsData[1]?.title}</h2>
                  <h3 className={styles.mobileSubtitle}>{scrollSectionsData[1]?.subtitle}</h3>
                  <p className={styles.mobileDescription}>{scrollSectionsData[1]?.description}</p>
                  <a href={scrollSectionsData[1]?.buttonLink} className={styles.mobileButton}>
                    {scrollSectionsData[1]?.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Desktop Scroll-Animated Section (992px and larger)
        <section ref={scrollSectionRef} className={styles.scrollSection}>
          <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
              <div className={`${styles.header} header`}>
                <h2 className={`${styles.title} title`}>Our AI-Powered Services</h2>
                <p className={`${styles.description} description`}>
                  Empower your team with <strong>secure, AI-driven insights</strong> and{' '}
                  <em>workflow automation</em> tailored to your data, tools, and processes.
                </p>
              </div>
            </div>
          </section>
          <div className={styles.scrollContainer}>
            <div className={styles.stickyContainer}>
              <div ref={contentPanelRef} className={styles.contentPanel}>
                {/* Left Content */}
                <div ref={leftContentRef} className={styles.leftContent}>
                  <h2 ref={titleRef} className={styles.scrollTitle}>
                    {scrollSectionsData[currentSection]?.title || scrollSectionsData[0].title}
                  </h2>
                  <h3 ref={subtitleRef} className={styles.scrollSubtitle}>
                    {scrollSectionsData[currentSection]?.subtitle || scrollSectionsData[0].subtitle}
                  </h3>
                  <p ref={descriptionRef} className={styles.scrollDescription}>
                    {scrollSectionsData[currentSection]?.description ||
                      scrollSectionsData[0].description}
                  </p>
                  <a
                    ref={buttonRef}
                    href={
                      scrollSectionsData[currentSection]?.buttonLink ||
                      scrollSectionsData[0].buttonLink
                    }
                    className={styles.scrollButton}
                  >
                    {scrollSectionsData[currentSection]?.buttonText ||
                      scrollSectionsData[0].buttonText}
                  </a>
                </div>

                {/* Right Image/Video */}
                <div ref={rightImageRef} className={styles.rightImage}>
                  <div className={styles.imageContainer}>
                    {/* Video or Image based on data */}
                    {scrollSectionsData[currentSection]?.videoSrc ? (
                      <video
                        key={scrollSectionsData[currentSection]?.videoSrc}
                        ref={videoRef}
                        className={styles.scrollVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ opacity: 1, display: 'block' }}
                        onLoadedData={() => {
                          console.log(
                            'Video loaded successfully:',
                            scrollSectionsData[currentSection]?.videoSrc
                          );
                          if (videoRef.current) {
                            gsap.set(videoRef.current, {
                              opacity: 1,
                              display: 'block',
                              visibility: 'visible',
                            });
                          }
                        }}
                        onError={(e) => {
                          console.error('Video failed to load:', e);
                          console.error(
                            'Video source:',
                            scrollSectionsData[currentSection]?.videoSrc
                          );
                        }}
                        onLoadStart={() => {
                          console.log(
                            'Video loading started:',
                            scrollSectionsData[currentSection]?.videoSrc
                          );
                        }}
                      >
                        <source
                          src={scrollSectionsData[currentSection]?.videoSrc}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        ref={imageRef}
                        src={
                          scrollSectionsData[currentSection]?.imageSrc ||
                          scrollSectionsData[0]?.imageSrc ||
                          ''
                        }
                        alt={
                          scrollSectionsData[currentSection]?.imageAlt ||
                          scrollSectionsData[0]?.imageAlt ||
                          ''
                        }
                        className={styles.scrollImage}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onLoad={() => {
                          // Ensure image is visible after load
                          if (imageRef.current) {
                            gsap.set(imageRef.current, { opacity: 1 });
                          }
                        }}
                      />
                    )}
                    <div className={styles.imageOverlay}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OurServices;
