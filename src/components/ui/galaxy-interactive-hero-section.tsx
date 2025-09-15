"use client";

import React, { useEffect, useRef, Suspense, lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));
import Button from "./button";

import styles from "./galaxy-interactive-hero-section.module.scss";

function HeroSplineBackground() {
  return (
    <div className={styles.splineWrapper}>
      <Spline
        className={styles.splineScene}
        scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
      />
      <div className={styles.splineOverlay} />
    </div>
  );
}


function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <h1>
        Reimagining Enterprise AI <br /> Solutions & Agentic innovation
      </h1> 
      <p>
        Secure. Scalable. Human-Centric AI Solutions.
      </p>
      <div className={styles.heroButtons}>
        <Button label="Explore Our Solutions" />
        {/* <Button variant="outline" label="Watch the Video" /> */}
      </div>
    </div>
  );
}


export const HeroSection = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
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
        <div className={styles.splineContainer}>
          <HeroSplineBackground />
        </div>
        <div ref={heroContentRef} className={styles.heroOverlay}>
          <div className={styles.heroOverlayContainer}>
            <HeroContent />
          </div>
        </div>
      </div>
    </div>
  );
};
