'use client';

import React, { useState, useRef } from 'react';
import styles from './HeroSection.module.scss';
import Button from '@/components/ui/button';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const heroRef = useRef<HTMLElement>(null);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log('Email submitted:', email);
  };

  return (
    <section ref={heroRef} className={`${styles.heroSection} hero`}>
      {/* Phoenix Wings */}

      {/* Phoenix Rising Effect */}
      <div className={styles.phoenixRising}>
        <div className={styles.phoenixGlow} />
        <div className={styles.phoenixTrail}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={styles.trailParticle}
              style={{
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Fire Rings */}
      <div className={styles.fireRings}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={styles.fireRing}
            style={{
              animationDelay: `${i * 2.5}s`,
              animationDuration: `${6 + i}s`,
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
            Join 10,000+ innovators unlocking exclusive early access to our ever-expanding suite of
            AI-powered solutions—secure, smart, and built for real impact.
          </p>
        </div>

        {/* Email Subscription Section */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className={styles.subscriptionCard}>
              <h2 className={styles.subscriptionTitle}>
                Get Early Access to All Upcoming AI Tools
              </h2>
              <p className={styles.subscriptionSubtitle}>
                Get weekly AI insights delivered to your inbox
              </p>

              <form onSubmit={handleEmailSubmit} className={styles.emailForm}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.emailInput}
                  required
                />
                <div className="d-flex justify-content-center">
                  <Button label="Get Started →" />
                </div>
              </form>

              <div className={styles.disclaimer}>
                <span className={styles.sparkle}>✨</span>
                Every Tuesday. No spam. Unsubscribe anytime.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
