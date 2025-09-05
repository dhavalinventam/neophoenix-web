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

  // Scroll-animated section refs
  const scrollSectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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
        backgroundColor: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        textColor: '#ffffff',
        accentColor: '#63cfe9',
      },
      {
        id: 2,
        title: 'Task Prompt AI Chrome Extension',
        subtitle: 'AI-Powered Prompts Where Work Happens.',
        description:
          'Supercharge your workflows in Jira, ClickUp, Asana, and Trello with contextual, role-specific AI prompts. Cut task completion time in half while customizing prompts to match your team’s industry, style, and goals.',
        buttonText: 'Try the Extension',
        buttonLink: '#services',
        imageSrc:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        imageAlt: 'AI Technology Network',
        backgroundColor: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
        textColor: '#ffffff',
        accentColor: '#f59e0b',
      },
      // {
      //   id: 3,
      //   title: 'Scale Your Success',
      //   subtitle: 'AUTOMATED INTELLIGENCE',
      //   description:
      //     'Leverage our advanced machine learning algorithms to predict trends, optimize performance, and scale your business to new heights with intelligent automation.',
      //   buttonText: 'Learn More',
      //   buttonLink: '#about',
      //   imageSrc:
      //     'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      //   imageAlt: 'Machine Learning Visualization',
      //   backgroundColor: 'linear-gradient(135deg, #334155 0%, #475569 50%, #64748b 100%)',
      //   textColor: '#ffffff',
      //   accentColor: '#10b981',
      // },
      // {
      //   id: 4,
      //   title: 'Future-Ready Technology',
      //   subtitle: 'INNOVATION AT SCALE',
      //   description:
      //     'Stay ahead of the competition with our next-generation AI platform that adapts, learns, and evolves with your business needs in real-time.',
      //   buttonText: 'Start Now',
      //   buttonLink: '#contact',
      //   imageSrc:
      //   'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      //   imageAlt: 'Future Technology Concept',
      //   backgroundColor: 'linear-gradient(135deg, #475569 0%, #64748b 50%, #94a3b8 100%)',
      //   textColor: '#ffffff',
      //   accentColor: '#8b5cf6',
      // },
    ],
    []
  );

  const services = [
    {
      id: 1,
      title: 'Plug-and-Play RAG System',
      description:
        'Instantly connect your <strong>database</strong> and deploy a secure <em>AI chat</em> : no data ever leaves your environment, setup in minutes.',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8C18.21 8 20 9.79 20 12C20 14.21 18.21 16 16 16C13.79 16 12 14.21 12 12C12 9.79 13.79 8 16 8ZM16 18C19.31 18 22 20.69 22 24H10C10 20.69 12.69 18 16 18Z"
            fill="currentColor"
          />
          <path
            d="M24 8C25.1 8 26 8.9 26 10C26 11.1 25.1 12 24 12C22.9 12 22 11.1 22 10C22 8.9 22.9 8 24 8ZM24 14C26.21 14 28 15.79 28 18H20C20 15.79 21.79 14 24 14Z"
            fill="currentColor"
          />
          <path
            d="M8 8C9.1 8 10 8.9 10 10C10 11.1 9.1 12 8 12C6.9 12 6 11.1 6 10C6 8.9 6.9 8 8 8ZM8 14C10.21 14 12 15.79 12 18H4C4 15.79 5.79 14 8 14Z"
            fill="currentColor"
          />
        </svg>
      ),
      features: [
        'Seamlessly connect your existing <strong>databases</strong> with secure <em>local embedding</em> and instant AI-powered chat.',
        'Maintain full <strong>control</strong>: your data stays in your environment with <em>zero external storage</em>.',
        'Unlock powerful <strong>insights</strong> through real-time answers based on your <em>proprietary data</em>.',
      ],
    },
    {
      id: 2,
      title: 'Task Prompt AI Chrome Extension',
      description:
        'Auto-generates <strong>task-specific AI actions</strong> inside JIRA, ClickUp, and Asana: save <em>hours weekly</em> without changing your workflow.',
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4ZM16 26C10.48 26 6 21.52 6 16C6 10.48 10.48 6 16 6C21.52 6 26 10.48 26 16C26 21.52 21.52 26 16 26Z"
            fill="currentColor"
          />
          <path
            d="M16 8C11.58 8 8 11.58 8 16C8 20.42 11.58 24 16 24C20.42 24 24 20.42 24 16C24 11.58 20.42 8 16 8ZM16 22C12.69 22 10 19.31 10 16C10 12.69 12.69 10 16 10C19.31 10 22 12.69 22 16C22 19.31 19.31 22 16 22Z"
            fill="currentColor"
          />
          <path
            d="M16 12C13.79 12 12 13.79 12 16C12 18.21 13.79 20 16 20C18.21 20 20 18.21 20 16C20 13.79 18.21 12 16 12Z"
            fill="currentColor"
          />
        </svg>
      ),
      features: [
        'Integrate <strong>AI deeply</strong> into your Jira, ClickUp, Asana, and Trello <em>workflows</em>.',
        'Generate <strong>contextual, role-specific prompts</strong> that cut <em>task completion time</em> in half.',
        "Customize <strong>prompts</strong> to your team's unique needs and <em>industry jargon</em>.",
      ],
    },
  ];

  // Check if screen is mobile/tablet
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1200);
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
              }, index * 200);
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

  // GSAP ScrollTrigger animations for multiple vertical scroll sections
  useEffect(() => {
    if (!scrollSectionRef.current || !leftContentRef.current || !rightImageRef.current) return;

    // Ensure image is visible initially
    if (imageRef.current) {
      gsap.set(imageRef.current, {
        opacity: 1,
        display: 'block',
        visibility: 'visible',
      });
    }

    const ctx = gsap.context(() => {
      // Set initial states - content starts hidden for enhanced bottom to top animation
      gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0,
        y: 120,
        x: 0,
        scale: 0.95,
        clearProps: 'none',
      });

      gsap.set(rightImageRef.current, {
        opacity: 0,
        y: 150,
        x: 0,
        scale: 0.85,
        clearProps: 'none',
      });

      gsap.set(imageRef.current, {
        scale: 0.85,
        opacity: 0,
        y: 100,
        display: 'block',
        rotation: 0,
        clearProps: 'none',
      });

      // Create main vertical scroll timeline with pin
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          start: 'top top',
          end: `+=${scrollSectionsData.length * 100}vh`,
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const sectionIndex = Math.floor(progress * scrollSectionsData.length);
            const newSection = Math.min(sectionIndex, scrollSectionsData.length - 1);

            // Only update if section actually changed
            if (newSection !== currentSection) {
              // Fade out current content
              gsap.to(
                [
                  titleRef.current,
                  subtitleRef.current,
                  descriptionRef.current,
                  buttonRef.current,
                  imageRef.current,
                ],
                {
                  opacity: 0,
                  duration: 0.3,
                  ease: 'power2.inOut',
                  onComplete: () => {
                    // Update content after fade out
                    setCurrentSection(newSection);

                    // Fade in new content
                    gsap.fromTo(
                      [
                        titleRef.current,
                        subtitleRef.current,
                        descriptionRef.current,
                        buttonRef.current,
                        imageRef.current,
                      ],
                      {
                        opacity: 0,
                        y: 30,
                        scale: 0.99,
                      },
                      {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.5,
                        ease: 'power2.out',
                        stagger: 0.1,
                      }
                    );
                  },
                }
              );
            }
          },
        },
      });

      // Initial fade in animation for first load
      gsap.fromTo(
        [leftContentRef.current, rightImageRef.current],
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          delay: 0.2,
        }
      );

      // Initial content fade in
      gsap.fromTo(
        [titleRef.current, subtitleRef.current, descriptionRef.current, buttonRef.current],
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.2,
          delay: 0.3,
        }
      );

      // Smooth parallax effect for image
      gsap.to(imageRef.current, {
        y: -50,
        // rotation: 5,
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // No fade effects on scroll - content stays fully visible

      // Hover animations
      if (buttonRef.current) {
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
          });
        });
      }

      // Image hover effect
      if (imageRef.current) {
        imageRef.current.addEventListener('mouseenter', () => {
          gsap.to(imageRef.current, {
            rotation: 0,
            duration: 0.4,
            ease: 'power2.out',
          });
        });

        imageRef.current.addEventListener('mouseleave', () => {
          gsap.to(imageRef.current, {
            rotation: 0,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      }
    }, scrollSectionRef);

    return () => ctx.revert();
  }, [scrollSectionsData, currentSection]);

  return (
    <>
      {/* Scroll-Animated Section */}
      <section ref={scrollSectionRef} className={styles.scrollSection}>
        <div className={styles.scrollContainer}>
          <div className={styles.stickyContainer}>
            <div className={styles.contentPanel}>
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

              {/* Right Image */}
              <div ref={rightImageRef} className={styles.rightImage}>
                <div className={styles.imageContainer}>
                  <Image
                    ref={imageRef}
                    src={
                      scrollSectionsData[currentSection]?.imageSrc || scrollSectionsData[0].imageSrc
                    }
                    alt={
                      scrollSectionsData[currentSection]?.imageAlt || scrollSectionsData[0].imageAlt
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
                  <div className={styles.imageOverlay}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
