'use client';

import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.scss';
import Button from '@/components/ui/button';
import ParticlesBackground from '@/components/ui/particles-background';
// import NeuralNetworkBackground from '@/components/ui/neural-network-background';
import { Container } from 'react-bootstrap';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(true); // Set to true immediately for text

  // Keep useEffect for any future needs but text is now always visible
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className={`${styles.heroSection} hero`}>
        {/* Particles Background */}
        <ParticlesBackground />

        {/* Content Container */}
        <div className={styles.contentContainer}>
          <Container>
            {/* Main Headline */}
            <div className={`${styles.headline} ${isVisible ? styles.visible : ''}`}>
              <h1
                className={styles.title}
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                Reimagining Enterprise{' '}
                <span className={styles.highlight}>
                  AI Solutions & Agentic Innovation
                </span>
              </h1>

              <p
                className={styles.subtitle}
                style={{ color: '#0baeff' }}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                Secure. Scalable. Human-Centric AI Solutions.
                {/* <span
                  className={styles.subtitle}
                  style={{ color: '#00C6A7' }}
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-cubic"
                >
                  Scalable.
                </span>
                <span
                  className={styles.subtitle}
                  style={{ color: '#FFD93D' }}
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-cubic"
                >
                  Human-Centric AI Solutions.
                </span> */}
              </p>

              {/* CTA Section - Moved below subtitle */}
              <div
                className={styles.ctaSection}
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                <Button
                  variant="filled"
                  label="LEARN MORE →"
                  onClick={() => {
                    window.location.hash = '#personalized-wishlist';
                  }}
                />
              </div>
            </div>

            {/* Description Text */}
            <div className={styles.descriptionContainer}>
              <p
                className={styles.description}
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                Whether you need to explore and analyze your data, gain insights and predictions, automate tasks and processes, or create intelligent applications, we have the expertise and experience to help you achieve your goals.
              </p>
            </div>

            {/* Curved Arrow */}
            <div className={styles.curvedArrow} data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" data-aos-easing="ease-out-cubic">
              <svg viewBox="0 0 250 120" className={styles.arrowSvg}>
                <path
                  d="M 20 80 Q 80 50 150 60 Q 180 70 220 50"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="6"
                    markerHeight="4"
                    refX="5"
                    refY="2"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 6 2, 0 4"
                      fill="white"
                    />
                  </marker>
                </defs>
              </svg>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
