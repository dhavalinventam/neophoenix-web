'use client';
import { useEffect, useRef, useState } from 'react';
import Button from '../../../ui/button';
import styles from './WhoWeAre.module.scss';

const WhoWeAre = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    // Use Intersection Observer for scroll-based animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Add animation classes to trigger CSS animations
            const sectionTitle = content.querySelector('.section-title');
            const headline = content.querySelector('.headline');
            const description = content.querySelector('.description');
            const ctaButton = content.querySelector('.cta-button');

            if (sectionTitle) sectionTitle.classList.add(styles.animateIn);
            if (headline) headline.classList.add(styles.animateIn);
            if (description) description.classList.add(styles.animateIn);
            if (ctaButton) ctaButton.classList.add(styles.animateIn);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -20% 0px',
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.whoWeAre}>
      {/* Smart Background Animation */}
      <div className={styles.backgroundAnimation}>
        {/* Floating Geometric Shapes */}
        <div className={styles.floatingShapes}>
          <div className={`${styles.shape} ${styles.shape1}`}></div>
          <div className={`${styles.shape} ${styles.shape2}`}></div>
          <div className={`${styles.shape} ${styles.shape3}`}></div>
          <div className={`${styles.shape} ${styles.shape4}`}></div>
          <div className={`${styles.shape} ${styles.shape5}`}></div>
          <div className={`${styles.shape} ${styles.shape6}`}></div>
        </div>

        {/* Gradient Orbs */}
        <div className={styles.gradientOrbs}>
          <div className={`${styles.orb} ${styles.orb1}`}></div>
          <div className={`${styles.orb} ${styles.orb2}`}></div>
          <div className={`${styles.orb} ${styles.orb3}`}></div>
        </div>

        {/* Neural Network Grid */}
        <div className={styles.neuralGrid}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={styles.gridNode}></div>
          ))}
        </div>

        {/* Particle System */}
        <div className={styles.particleSystem}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={styles.particle}
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${8 + i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* AI Circuit Pattern */}
        <div className={styles.circuitPattern}>
          <svg viewBox="0 0 1000 1000" className={styles.circuitSvg}>
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 107, 53, 0.3)" />
                <stop offset="50%" stopColor="rgba(46, 196, 182, 0.2)" />
                <stop offset="100%" stopColor="rgba(67, 97, 238, 0.3)" />
              </linearGradient>
            </defs>
            <path
              d="M100,100 L300,100 L300,200 L500,200 L500,300 L700,300 L700,400 L900,400"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              className={styles.circuitPath}
            />
            <path
              d="M200,500 L400,500 L400,600 L600,600 L600,700 L800,700"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              className={styles.circuitPath}
            />
            <circle cx="100" cy="100" r="4" fill="rgba(255, 107, 53, 0.6)" className={styles.circuitNode} />
            <circle cx="300" cy="100" r="4" fill="rgba(46, 196, 182, 0.6)" className={styles.circuitNode} />
            <circle cx="500" cy="200" r="4" fill="rgba(67, 97, 238, 0.6)" className={styles.circuitNode} />
            <circle cx="700" cy="300" r="4" fill="rgba(255, 107, 53, 0.6)" className={styles.circuitNode} />
            <circle cx="900" cy="400" r="4" fill="rgba(46, 196, 182, 0.6)" className={styles.circuitNode} />
            <circle cx="200" cy="500" r="4" fill="rgba(67, 97, 238, 0.6)" className={styles.circuitNode} />
            <circle cx="400" cy="500" r="4" fill="rgba(255, 107, 53, 0.6)" className={styles.circuitNode} />
            <circle cx="600" cy="600" r="4" fill="rgba(46, 196, 182, 0.6)" className={styles.circuitNode} />
            <circle cx="800" cy="700" r="4" fill="rgba(67, 97, 238, 0.6)" className={styles.circuitNode} />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div ref={contentRef} className={styles.contentContainer}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {/* Main Content */}
              <h2 className={`${styles.sectionTitle} section-title`}>
                Who We Are
              </h2>
              <div className={styles.mainContent}>
                {/* Headline */}
                <h2 className={`${styles.headline} headline`}>
                  An AI-First Team with Human Ingenuity
                </h2>

                {/* Description */}
                <div className={`${styles.description} description`}>
                  <p>
                    We believe the future of work is <strong>80% AI-enabled, 20% human-crafted.</strong> At Neophoenix, our team of model customizers, fine-tuners, LLM professionals, and product engineers is redefining how enterprises adopt AI. We bring together technical mastery and creative prompt engineering to deliver solutions that are powerful, practical, and built for scale.
                  </p>
                </div>

                {/* CTA Button */}
                <div className={`${styles.ctaSection} cta-button`}>
                  <Button
                    variant="filled"
                    label="Meet Our Team"
                    className={styles.meetTeamButton}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
