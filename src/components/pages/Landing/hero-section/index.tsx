"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [counts, setCounts] = useState({ tools: 0, readers: 0, satisfaction: 0 });
  const statsRef = useRef<HTMLDivElement>(null);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log("Email submitted:", email);
  };

  // Counting animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounts();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    const targets = { tools: 200, readers: 25, satisfaction: 98 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        tools: Math.floor(targets.tools * progress),
        readers: Math.floor(targets.readers * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);
  };

  return (
    <section className={styles.heroSection}>
      {/* Phoenix Wings */}
      <div className={styles.phoenixWings}>
        <div className={styles.wingLeft} />
        <div className={styles.wingRight} />
      </div>

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

      <div className={styles.container}>
        {/* AI Innovation Hub Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>🚀</span>
          <span className={styles.badgeText}>AI Innovation Hub</span>
        </div>

        {/* Main Headline */}
        <div className={styles.headline}>
          <h1 className={styles.title}>
            Master AI Tools
            <span className={styles.gradientText}> Before Your Competition Does</span>
          </h1>
          <p className={styles.description}>
            AI Tools are evolving fast dont get left behind. Tech Pilot helps you stay ahead with
            deep-dive reviews, hands-on insights, and the latest breakthroughs in AI technology.
          </p>
        </div>

        {/* Feature Cards */}
        {/* <div className={styles.featureCards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <span>🔍</span>
            </div>
            <h3 className={styles.cardTitle}>Discover Best AI Tools</h3>
            <p className={styles.cardDescription}>Curated reviews of cutting-edge AI solutions.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <span>📚</span>
            </div>
            <h3 className={styles.cardTitle}>Guides, News, Actionable Strategies</h3>
            <p className={styles.cardDescription}>
              Read Our Blog for expert insights and tutorials.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <span>🎯</span>
            </div>
            <h3 className={styles.cardTitle}>Need Help Integrating AI Into Your Business?</h3>
            <p className={styles.cardDescription}>
              Checkout Our Service Offerings for custom solutions.
            </p>
          </div>
        </div> */}

        {/* Email Subscription Section */}
        <div className={styles.subscriptionCard}>
          <h2 className={styles.subscriptionTitle}>Join 8,967+ AI Innovators</h2>
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
            <button type="submit" className={styles.submitButton}>
              Get Started →
            </button>
          </form>

          <div className={styles.disclaimer}>
            <span className={styles.sparkle}>✨</span>
            Every Tuesday. No spam. Unsubscribe anytime.
          </div>

          {/* Community Proof */}
          <div className={styles.communityProof}>
            <div className={styles.profiles}>
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
              ].map((imageUrl, i) => (
                <div key={i} className={styles.profile} style={{ zIndex: 4 - i }}>
                  <img
                    src={imageUrl}
                    alt={`User ${i + 1}`}
                    className={styles.profileImage}
                    loading="lazy"
                  />
                </div>
              ))}
              <span className={styles.profileCount}>+8K</span>
            </div>
            <div className={styles.rating}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={styles.star}>
                    ⭐
                  </span>
                ))}
              </div>
              <span className={styles.ratingText}>4.9/5 from our community</span>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className={styles.statistics} ref={statsRef}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>
              {counts.tools}+<span className={styles.statDot}>•</span>
            </span>
            <span className={styles.statLabel}>AI Tools Reviewed</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>
              {counts.readers}K+
              <span className={styles.statDot}>•</span>
            </span>
            <span className={styles.statLabel}>Monthly Readers</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>
              {counts.satisfaction}%<span className={styles.statDot}>•</span>
            </span>
            <span className={styles.statLabel}>Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
