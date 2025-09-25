'use client';

import React, { useEffect, useRef } from 'react';
import styles from './ParticlesBackground.module.scss';

// Declare particlesJS as a global function
declare global {
  interface Window {
    particlesJS: (id: string, config: any) => void;
  }
}

interface ParticlesBackgroundProps {
  id?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ id = 'particles-js' }) => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load particles.js script dynamically
    const loadParticlesScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (typeof window.particlesJS === 'function') {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load particles.js'));
        document.head.appendChild(script);
      });
    };

    const initParticles = async () => {
      try {
        await loadParticlesScript();

        if (window.particlesJS && particlesRef.current) {
          console.log('Initializing particles with reduced center density...');

          // Small delay to ensure DOM is ready
          setTimeout(() => {
            try {
              window.particlesJS(id, {
                particles: {
                  number: {
                    value: 70, // Increased from 60 to 90 for denser neural network effect
                    density: {
                      enable: true,
                    },
                  },
                  color: {
                    value: ['#35ebff', '#35ebff', '#35ebff', '#35ebff'],
                  },
                  opacity: {
                    value: 0.5, // Slightly reduced opacity for better text contrast
                    random: true,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false,
                    },
                  },
                  shape: {
                    type: 'circle',
                  },
                  size: {
                    value: 8, // Slightly smaller particles
                    random: true,
                    anim: {
                      enable: true,
                      speed: 2,
                      size_min: 1,
                      sync: false,
                    },
                  },
                  line_linked: {
                    enable: true,
                    distance: 130, // Increased connection distance for more connecting lines
                    color: '#35ebff',
                    opacity: 0.8, // Slightly reduced line opacity
                    width: 1,
                  },
                  move: {
                    enable: true,
                    speed: 1.2, // Slightly slower movement for calmer effect
                    random: true,
                    direction: 'none',
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                  },
                },
                interactivity: {
                  detect_on: 'window',
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'grab',
                    },
                    onclick: {
                      enable: true,
                      mode: 'push',
                    },
                    resize: true,
                  },
                  modes: {
                    grab: {
                      distance: 160, // Increased grab distance to work with more particles
                      line_linked: {
                        opacity: 1,
                      },
                    },
                    push: {
                      particles_nb: 2,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                    bubble: {
                      distance: 400,
                      size: 40,
                      duration: 2,
                      opacity: 8,
                      speed: 3,
                    },
                  },
                },
                retina_detect: true,
              });
            } catch (initError) {
              console.error('Error initializing particles:', initError);
            }
          }, 100); // 100ms delay
        }
      } catch (error) {
        console.error('Error initializing particles:', error);
      }
    };

    initParticles();

    // Cleanup function
    return () => {
      // Remove particles canvas if it exists
      const canvas = document.querySelector(`#${id} canvas`);
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, [id]);

  return (
    <div className={styles.particlesContainer}>
      <div id={id} ref={particlesRef} className={styles.particlesCanvas} />
    </div>
  );
};

export default ParticlesBackground;
