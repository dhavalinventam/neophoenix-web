'use client';

import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.scss';
import Button from '@/components/ui/button';
import ParticlesBackground from '@/components/ui/particles-background';
import { Container } from 'react-bootstrap';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className={`${styles.heroSection} hero`}>
        {/* Black Gradient Background */}
        <div className={styles.gradientBackground} />
        
        {/* Particles Background */}
        <ParticlesBackground />

        {/* Content Container */}
        <div className={styles.contentContainer}>
          <Container>
            {/* Main Content - Centered */}
            <div className={styles.mainContent}>
              
              {/* Main Headline */}
              <div className={`${styles.headline} ${isVisible ? styles.visible : ''}`}>
                <h1
                  className={styles.title}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-cubic"
                >
                  Reimagining Enterprise AI Solutions & Agentic innovation.
                </h1>
              </div>

              {/* Tagline */}
              <div 
                className={styles.tagline}
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                <p className={styles.taglineText}>
                  <span className={styles.highlight}>Secure. Scalable. Human-Centric AI Solutions.</span>
                </p>
              </div>

              {/* Supporting Text */}
              <div 
                className={styles.supportingText}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                <p className={styles.description}>
                  At Neophoenix, we build next-generation AI products and enterprise solutions that combine the power of Retrieval-Augmented Generation (RAG) with precision-driven prompt engineering. From white-label platforms to plug-and-play extensions, we empower businesses to unlock real-time intelligence and transform workflows at scale.
                </p>
              </div>

              {/* CTA Section */}
              <div
                className={styles.ctaSection}
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                <Button
                  variant="filled"
                  label="Explore Our Solutions"
                  onClick={() => {
                    window.location.hash = '#personalized-wishlist';
                  }}
                />
              </div>

            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
