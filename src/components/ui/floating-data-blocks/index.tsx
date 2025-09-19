'use client';
import { useEffect, useRef } from 'react';
import styles from './FloatingDataBlocks.module.scss';

interface FloatingDataBlocksProps {
  className?: string;
  blockCount?: number;
  intensity?: 'low' | 'medium' | 'high';
}

const FloatingDataBlocks = ({ 
  className = '', 
  blockCount = 12,
  intensity = 'medium' 
}: FloatingDataBlocksProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating blocks
    const blocks: HTMLDivElement[] = [];
    
    for (let i = 0; i < blockCount; i++) {
      const block = document.createElement('div');
      block.className = styles.floatingBlock;
      
      // Random positioning
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 40 + 20; // 20-60px
      const rotation = Math.random() * 360;
      const delay = Math.random() * 5; // 0-5s delay
      const duration = Math.random() * 20 + 15; // 15-35s duration
      
      // Set initial position and properties
      block.style.left = `${x}%`;
      block.style.top = `${y}%`;
      block.style.width = `${size}px`;
      block.style.height = `${size}px`;
      block.style.transform = `rotate(${rotation}deg)`;
      block.style.animationDelay = `${delay}s`;
      block.style.animationDuration = `${duration}s`;
      
      // Add intensity-based opacity
      const opacityMap = { low: 0.1, medium: 0.2, high: 0.3 };
      block.style.opacity = opacityMap[intensity].toString();
      
      container.appendChild(block);
      blocks.push(block);
    }

    return () => {
      blocks.forEach(block => {
        if (container.contains(block)) {
          container.removeChild(block);
        }
      });
    };
  }, [blockCount, intensity]);

  return (
    <div 
      ref={containerRef}
      className={`${styles.floatingDataBlocks} ${className}`}
      aria-hidden="true"
    />
  );
};

export default FloatingDataBlocks;
