'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './CustomCursor.module.scss';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Calculate gradient position as percentage of viewport
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setGradientPosition({ x, y });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Smooth cursor animation
    const animateCursor = () => {
      setCursorPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));

      setFollowerPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.05,
        y: prev.y + (mousePosition.y - prev.y) * 0.05,
      }));

      animationRef.current = requestAnimationFrame(animateCursor);
    };

    // Start animation
    animateCursor();

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <>
      {/* Gradient background */}
      <div
        className={styles.gradientBackground}
        style={
          {
            '--gradient-x': `${gradientPosition.x}%`,
            '--gradient-y': `${gradientPosition.y}%`,
          } as React.CSSProperties
        }
      />

      {/* Main cursor ring */}
      <div
        className={`${styles.cursor} ${isHovering ? styles.hover : ''}`}
        style={{
          left: cursorPosition.x - 0,
          top: cursorPosition.y - 0,
        }}
      />

      {/* Cursor follower dot */}
      <div
        className={`${styles.cursorFollower} ${isHovering ? styles.hover : ''}`}
        style={{
          left: followerPosition.x - 10,
          top: followerPosition.y - 10,
        }}
      />
    </>
  );
};

export default CustomCursor;
