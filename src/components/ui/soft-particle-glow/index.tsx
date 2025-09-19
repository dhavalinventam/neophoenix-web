'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './SoftParticleGlow.module.scss';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  shimmerPhase: number;
}

const SoftParticleGlow: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Color palette for particles
  const colors = [
    'rgba(255, 255, 255, 0.8)', // White
    'rgba(53, 235, 255, 0.6)',  // Cyan
    'rgba(138, 43, 226, 0.5)',  // Violet
    'rgba(255, 255, 255, 0.4)', // Lighter white
    'rgba(53, 235, 255, 0.4)',  // Lighter cyan
    'rgba(138, 43, 226, 0.3)',  // Lighter violet
  ];

  // Initialize particles
  const initParticles = () => {
    const particles: Particle[] = [];
    const particleCount = Math.min(40, Math.floor((dimensions.width * dimensions.height) / 15000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 3 + 1, // 1-4px
        speedX: (Math.random() - 0.5) * 0.5, // Very slow horizontal movement
        speedY: Math.random() * -0.8 - 0.2, // Upward movement
        opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8 opacity
        color: colors[Math.floor(Math.random() * colors.length)],
        shimmerPhase: Math.random() * Math.PI * 2, // Random shimmer phase
      });
    }

    particlesRef.current = particles;
  };

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    // Update and draw particles
    particlesRef.current.forEach((particle) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Update shimmer phase
      particle.shimmerPhase += 0.02;

      // Reset particle if it goes off screen
      if (particle.y < -10 || particle.x < -10 || particle.x > dimensions.width + 10) {
        particle.x = Math.random() * dimensions.width;
        particle.y = dimensions.height + 10;
        particle.speedY = Math.random() * -0.8 - 0.2;
        particle.speedX = (Math.random() - 0.5) * 0.5;
        particle.opacity = Math.random() * 0.6 + 0.2;
        particle.color = colors[Math.floor(Math.random() * colors.length)];
      }

      // Calculate shimmer effect
      const shimmerIntensity = 0.3 + 0.2 * Math.sin(particle.shimmerPhase);
      const currentOpacity = particle.opacity * shimmerIntensity;

      // Create gradient for glow effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      
      // Extract color values from rgba string
      const colorMatch = particle.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]+)?\)/);
      if (colorMatch) {
        const [, r, g, b] = colorMatch;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${currentOpacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      }

      // Draw particle with glow
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();

      // Draw core particle
      ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${currentOpacity})`);
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  // Handle resize
  const handleResize = () => {
    const container = canvasRef.current?.parentElement;
    if (container) {
      const rect = container.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles();
      animate();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div className={styles.particleContainer}>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className={styles.particleCanvas}
      />
    </div>
  );
};

export default SoftParticleGlow;
