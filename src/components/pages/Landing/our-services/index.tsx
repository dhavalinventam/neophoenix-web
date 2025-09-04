'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './OurServices.module.scss';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const OurServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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

  // Smooth scroll to section function
  const scrollToSection = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: element,
          offsetY: 0,
        },
        ease: 'power2.inOut',
      });
    }
  };

  // Smooth scroll to specific service
  const scrollToService = (serviceId: number) => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      const cardIndex = serviceId - 1;
      const cardWidth = 490 + 48; // card width + gap
      const scrollOffset = cardIndex * cardWidth;

      gsap.to(window, {
        duration: 2,
        scrollTo: {
          y: sectionTop + scrollOffset,
          offsetY: 0,
        },
        ease: 'power2.inOut',
      });
    }
  };

  useEffect(() => {
    if (!sectionRef.current || !horizontalContainerRef.current || isMobile) return;

    // Calculate the total width of the horizontal container
    const horizontalContainer = horizontalContainerRef.current;
    const totalWidth = horizontalContainer.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    // Create the horizontal scroll animation with smooth easing
    const horizontalScroll = gsap.to(horizontalContainer, {
      x: -scrollDistance,
      ease: 'power2.inOut', // Smooth easing for better feel
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: 'top top',
        end: `+=${scrollDistance}`,
        scrub: 1, // Smooth scrubbing with 1 second delay
        onUpdate: (self) => {
          // Update progress bar with smooth animation
          if (progressBarRef.current) {
            const progress = self.progress;
            gsap.to(progressBarRef.current, {
              width: `${progress * 100}%`,
              duration: 0.1,
              ease: 'power2.out',
            });
          }
        },
        onEnter: () => {
          // Enhanced entrance animation with smooth transitions
          gsap.fromTo(
            '.serviceCard',
            {
              opacity: 0,
              y: 80,
              scale: 0.8,
              rotationY: -15,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 1.2,
              stagger: 0.15,
              ease: 'power3.out',
            }
          );

          // Animate header elements
          gsap.fromTo(
            '.header .title',
            { y: -30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
          );

          gsap.fromTo(
            '.header .description',
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power2.out' }
          );

          gsap.fromTo(
            '.progressContainer',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power2.out' }
          );
        },
        onLeave: () => {
          // Smooth exit animation
          gsap.to('.serviceCard', {
            opacity: 0.7,
            scale: 0.95,
            duration: 0.5,
            ease: 'power2.inOut',
          });
        },
        onEnterBack: () => {
          // Smooth re-entry animation
          gsap.to('.serviceCard', {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          // Smooth exit when scrolling back up
          gsap.to('.serviceCard', {
            opacity: 0.7,
            scale: 0.95,
            duration: 0.5,
            ease: 'power2.inOut',
          });
        },
      },
    });

    // Create individual card animations with smooth transitions
    services.forEach((service, index) => {
      const card = horizontalContainer.querySelector(`[data-service-id="${service.id}"]`);
      if (!card) return;

      // Calculate when this card should animate (based on scroll progress)
      const cardScrollPoint = index / (services.length - 1);

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top+=${cardScrollPoint * scrollDistance} top`,
        end: `top+=${(cardScrollPoint + 0.1) * scrollDistance} top`,
        onEnter: () => {
          // Enhanced icon animation with smooth rotation
          const icon = card.querySelector('.cardIcon');
          if (icon) {
            gsap.to(icon, {
              rotation: 360,
              scale: 1.15,
              duration: 1,
              ease: 'back.out(1.7)',
            });
          }

          // Smooth title animation
          const title = card.querySelector('.cardTitle');
          if (title) {
            gsap.fromTo(
              title,
              { y: 30, opacity: 0.6, scale: 0.9 },
              { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
            );
          }

          // Animate features with stagger
          const features = card.querySelectorAll('.featureItem');
          gsap.fromTo(
            features,
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
          );

          // Add a subtle glow effect
          gsap.to(card, {
            duration: 0.8,
            ease: 'power2.out',
          });
        },
        onLeave: () => {
          // Remove glow effect
          gsap.to(card, {
            duration: 0.4,
            ease: 'power2.inOut',
          });
        },
      });
    });

    // Add smooth scroll behavior to the entire page
    gsap.set('html, body', { scrollBehavior: 'smooth' });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      horizontalScroll.kill();
    };
  }, [services.length, isMobile]);

  // Mobile-only animations
  useEffect(() => {
    if (!isMobile) return;

    // Simple fade-in animation for mobile
    gsap.fromTo(
      '.serviceCard',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' }
    );

    // Animate header
    gsap.fromTo(
      '.header .title',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.header .description',
      { y: -15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power2.out' }
    );
  }, [isMobile]);

  return (
    <>
      {/* GSAP Horizontal Scroll Section */}
      <div ref={sectionRef} className={styles.servicesSection} id="services">
        <div className={styles.header}>
          <h2 className={styles.title}>Our AI-Powered Services</h2>
          <p className={styles.description}>
            Empower your team with <strong>secure, AI-driven insights</strong> and{' '}
            <em>workflow automation</em> tailored to your data, tools, and processes.
          </p>
        </div>

        {/* Progress Bar - Only show on desktop */}
        {!isMobile && (
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div
                ref={progressBarRef}
                className={styles.progressFill}
                style={{ width: '0%' }}
              ></div>
            </div>
          </div>
        )}

        {/* Horizontal Scrolling Container */}
        <div className={styles.horizontalWrapper}>
          <div ref={horizontalContainerRef} className={styles.horizontalContainer}>
            {services.map((service) => (
              <div key={service.id} data-service-id={service.id} className={styles.serviceCard}>
                <div className={styles.cardIcon}>
                  <span className={styles.iconText}>{service.icon}</span>
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p
                  className={styles.cardDescription}
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />

                <ul className={styles.featuresList}>
                  {service.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkmark}>✓</span>
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
