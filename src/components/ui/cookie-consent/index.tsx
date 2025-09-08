'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieConsent.module.scss';
import Button from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'neophoenix-cookie-consent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (!hasConsent) {
      // Small delay to ensure smooth animation
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Save consent to localStorage
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    
    // Start hide animation
    setIsAnimating(false);
    
    // Hide popup after animation completes
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleLearnMore = () => {
    // Navigate to privacy policy page
    window.location.href = '/privacy-policy';
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`${styles.cookieConsent} ${isAnimating ? styles.show : styles.hide}`}>
      <div className={styles.content}>
        <p className={styles.text}>
          We use cookies to improve your browsing experience. By continuing to use Neophoenix, you agree to our{' '}
          <Link href="/privacy-policy" className={styles.text}>
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/terms-conditions" className={styles.text}>
            Terms & Conditions
          </Link>
          .
        </p>
        
        <div className={styles.buttons}>
          <Button 
            label="Accept"
            onClick={handleAccept}
            className={`${styles.button} ${styles.accept}`}
          />
          
          <Button 
            label="Learn More"
            variant="outline"
            onClick={handleLearnMore}
            className={`${styles.button} ${styles.learnMore}`}
          />
        </div>
      </div>
    </div>
  );
}
