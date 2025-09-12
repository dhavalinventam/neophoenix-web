'use client';

import React, { useEffect, useState } from 'react';
import styles from './HolographicText.module.scss';

interface HolographicTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const HolographicText: React.FC<HolographicTextProps> = ({ 
  text, 
  className = '', 
  delay = 100,
  duration = 500 
}) => {
  const [visibleChars, setVisibleChars] = useState<number[]>([]);

  useEffect(() => {
    const letters = text.split('');
    const timeouts: NodeJS.Timeout[] = [];

    letters.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleChars(prev => [...prev, index]);
      }, index * delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [text, delay]);

  return (
    <h1 className={`${styles.holographicText} ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`${styles.hologramChar} ${
            visibleChars.includes(index) ? styles.visible : ''
          }`}
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${index * delay}ms`
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};

export default HolographicText;
