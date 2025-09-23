'use client';
import { useEffect, useRef } from 'react';
import styles from './HexagonMeshOverlay.module.scss';

interface HexagonMeshOverlayProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
}

const HexagonMeshOverlay = ({ 
  className = '', 
  intensity = 'medium',
  speed = 'slow' 
}: HexagonMeshOverlayProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation settings based on props
    const speedMultiplier = speed === 'slow' ? 0.5 : speed === 'medium' ? 1 : 1.5;
    const opacityMultiplier = intensity === 'low' ? 0.3 : intensity === 'medium' ? 0.6 : 0.9;

    // Hexagon configuration
    const hexSize = 40;
    const hexSpacing = 60;
    const glowRadius = 2;

    const drawHexagon = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity * opacityMultiplier;
      ctx.strokeStyle = '#00bfff';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = '#00bfff';
      ctx.shadowBlur = glowRadius * 3;
      
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hexX = x + size * Math.cos(angle);
        const hexY = y + size * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(hexX, hexY);
        } else {
          ctx.lineTo(hexX, hexY);
        }
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      timeRef.current += 0.01 * speedMultiplier;

      // Calculate grid dimensions
      const cols = Math.ceil(rect.width / hexSpacing) + 2;
      const rows = Math.ceil(rect.height / (hexSpacing * 0.866)) + 2;

      // Draw hexagon grid
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexSpacing + (row % 2) * (hexSpacing / 2);
          const y = row * hexSpacing * 0.866;

          // Create wave-like opacity animation
          const distance = Math.sqrt(
            Math.pow(x - rect.width / 2, 2) + Math.pow(y - rect.height / 2, 2)
          );
          const wave = Math.sin(distance * 0.01 - timeRef.current * 2) * 0.5 + 0.5;
          const rotation = Math.sin(distance * 0.005 + timeRef.current) * 0.1;
          
          // Fade effect based on distance from center
          const centerDistance = Math.sqrt(
            Math.pow(x - rect.width / 2, 2) + Math.pow(y - rect.height / 2, 2)
          );
          const maxDistance = Math.sqrt(
            Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2)
          );
          const fadeOpacity = Math.max(0, 1 - (centerDistance / maxDistance) * 1.5);

          const opacity = wave * fadeOpacity * 0.8;

          if (opacity > 0.1) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            drawHexagon(0, 0, hexSize, opacity);
            ctx.restore();
          }
        }
      }

      // Add some floating particles for extra effect
      for (let i = 0; i < 8; i++) {
        const particleX = (Math.sin(timeRef.current * 0.5 + i) * 0.5 + 0.5) * rect.width;
        const particleY = (Math.cos(timeRef.current * 0.3 + i * 0.7) * 0.5 + 0.5) * rect.height;
        const particleOpacity = (Math.sin(timeRef.current * 2 + i) * 0.5 + 0.5) * 0.6;
        
        ctx.save();
        ctx.globalAlpha = particleOpacity * opacityMultiplier;
        ctx.fillStyle = '#00bfff';
        ctx.shadowColor = '#00bfff';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, speed]);

  return (
    <div className={`${styles.hexagonMeshOverlay} ${className}`}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </div>
  );
};

export default HexagonMeshOverlay;
