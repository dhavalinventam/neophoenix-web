'use client';

import React, { useEffect, useRef } from 'react';
import styles from './ParticlesBackground.module.scss';

// Declare particlesJS as a global function
declare global {
  interface Window {
    particlesJS: (id: string, config: any) => void;
  }
}

const ParticlesBackground: React.FC = () => {
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
          console.log('Initializing particles with interactivity...');

          // Small delay to ensure DOM is ready
          setTimeout(() => {
            try {
              window.particlesJS('particles-js', {
                particles: {
                  number: {
                    value: 80,
                    density: {
                      enable: true,
                    },
                  },
                  color: {
                    value: ['#35ebff', '#35ebff', '#35ebff', '#35ebff'],
                  },
                  opacity: {
                    value: 0.6,
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
                    value: 9,
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
                    distance: 120,
                    color: '#35ebff',
                    opacity: 1,
                    width: 1.2,
                  },
                  move: {
                    enable: true,
                    speed: 1.5,
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
                      distance: 140,
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
      const canvas = document.querySelector('#particles-js canvas');
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div className={styles.particlesContainer}>
      <div id="particles-js" ref={particlesRef} className={styles.particlesCanvas} />
    </div>
  );
};

export default ParticlesBackground;
