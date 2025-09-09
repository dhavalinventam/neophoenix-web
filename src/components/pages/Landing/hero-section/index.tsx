'use client';

import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.scss';
import Button from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          <div className="container">
            {/* Main Headline */}
            <div className={`${styles.headline} ${isVisible ? styles.visible : ''}`}>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>🚀</span>
                <span className={styles.badgeText}>Enterprise AI Solutions</span>
              </div>
              
              <h1 className={styles.title}>
                Reimagining Enterprise{' '}
                <span className={styles.highlight}> AI with RAG & Prompting Innovation</span>
              </h1>
              
              <p className={styles.subtitle}>
                Secure. Scalable. Human-Centric AI Solutions.
              </p>
              
              <p className={styles.description}>
                At Neophoenix, we build next-generation AI products and enterprise solutions that combine the power of Retrieval-Augmented Generation (RAG) with precision-driven prompt engineering. From white-label platforms to plug-and-play extensions, we empower businesses to unlock real-time intelligence and transform workflows at scale.
              </p>
            </div>

            {/* CTA Section */}
            <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
              <Button 
                variant="filled" 
                label="Explore Our Solutions"
                onClick={() => {
                  window.location.hash = "#personalized-wishlist";
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
