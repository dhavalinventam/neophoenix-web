"use client";

import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

import styles from "./galaxy-interactive-hero-section.module.scss"; // Import SCSS module

function HeroSplineBackground() {
  return (
    <div className={styles.heroBackground}>
      <Spline
        className={styles.splineCanvas}
        scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
      />
      <div className={styles.overlay} />
    </div>
  );
}

// Screenshot section
function ScreenshotSection({
  screenshotRef,
}: {
  screenshotRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <section className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
      <div ref={screenshotRef as React.RefObject<HTMLDivElement>} className={styles.screenshotWrapper}>
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80&auto=format&fit=crop"
          alt="AI Technology Dashboard"
          className={styles.screenshotImage}
        />
      </div>
    </section>
  );
}

// Hero content
function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <h1>
        Reimagining Enterprise <br /> 
        <span style={{ background: 'linear-gradient(135deg, #8200db 0%, #63cfe9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          AI Solutions with RAG & Prompting Innovation
        </span>
      </h1>
      <p>
        Secure. Scalable. Human-Centric AI Solutions.
      </p>
      <p style={{ fontSize: '1.1rem', opacity: 0.9, marginTop: '1rem' }}>
        At Neophoenix, we build next-generation AI products and enterprise solutions that
        combine the power of Retrieval-Augmented Generation (RAG) with precision-driven
        prompt engineering. From white-label platforms to plug-and-play extensions, we
        empower businesses to unlock real-time intelligence and transform workflows at
        scale.
      </p>
      <div className={styles.buttons}>
        <button 
          className={styles.primaryBtn}
          onClick={() => {
            window.location.hash = '#personalized-wishlist';
          }}
        >
          Explore Our Solutions
        </button>
        <button className={styles.secondaryBtn}>
          <span className={styles.icon}>&#9658;</span> Watch Demo
        </button>
      </div>
    </div>
  );
}


export const HeroSection = () => {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (screenshotRef.current && heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
          if (screenshotRef.current) {
            screenshotRef.current.style.transform = `translateY(-${
              scrollPosition * 0.5
            }px)`;
          }
          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
            heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroMain}>
        <HeroSplineBackground />
        <div ref={heroContentRef} className={styles.heroOverlay}>
          <HeroContent />
        </div>
      </div> 
    </div>
  );
};
