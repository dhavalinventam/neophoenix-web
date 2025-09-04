'use client';

import React, { useState } from 'react';
import styles from './HeroSection.module.scss';
import Button from '@/components/ui/button';

const HeroSection = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log('Email submitted:', email);
  };

  return (
    <>
      <section className={`${styles.heroSection} hero`}>
        {/* Phoenix Rising Effect */}
        <div className={styles.phoenixRising}>
          <div className={styles.phoenixGlow} />
          <div className={styles.phoenixTrail}>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={styles.trailParticle}
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Fire Rings */}
        <div className={styles.fireRings}>
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className={styles.fireRing}
              style={{
                animationDelay: `${i * 3}s`,
                animationDuration: `${8 + i * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="container text-center">
          {/* Main Headline */}
          <div className={styles.headline}>
            <h1 className={styles.title}>
              Master AI Tools Designed to Transform Work From Data to Daily Tasks
            </h1>
            <p className={styles.description}>
              Join 10,000+ innovators unlocking exclusive early access to our ever expanding suite
              of AI-powered solutions secure, smart, and built for real impact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
