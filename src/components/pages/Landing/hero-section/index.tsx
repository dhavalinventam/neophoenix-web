'use client';

import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.scss';
import Button from '@/components/ui/button';
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
        {/* Smart Background Animation */}
        <div className={styles.backgroundAnimation}>
          {/* Floating Geometric Shapes */}
          <div className={styles.floatingShapes}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`${styles.shape} ${styles[`shape${i + 1}`]}`}
                style={{
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${8 + i * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Gradient Orbs */}
          <div className={styles.gradientOrbs}>
            <div className={`${styles.orb} ${styles.orb1}`} />
            <div className={`${styles.orb} ${styles.orb2}`} />
            <div className={`${styles.orb} ${styles.orb3}`} />
          </div>

          {/* Neural Network Grid */}
          <div className={styles.neuralGrid}>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={styles.gridNode}
                style={{
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>

          {/* Particle System */}
          <div className={styles.particleSystem}>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={styles.particle}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${6 + i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

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
                  AI Solutions with RAG & Prompting Innovation
                </span>
              </h1>

              <p
                className={styles.subtitle}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                Secure. Scalable. Human-Centric AI Solutions.
              </p>

              <p
                className={styles.description}
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
              >
                At Neophoenix, we build next-generation AI products and enterprise solutions that
                combine the power of Retrieval-Augmented Generation (RAG) with precision-driven
                prompt engineering. From white-label platforms to plug-and-play extensions, we
                empower businesses to unlock real-time intelligence and transform workflows at
                scale.
              </p>
            </div>

            {/* CTA Section */}
            <div
              className={styles.ctaSection}
              data-aos="fade-up"
              data-aos-delay="900"
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
          </Container>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
