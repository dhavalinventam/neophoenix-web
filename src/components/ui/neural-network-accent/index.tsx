'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './NeuralNetworkAccent.module.scss';

interface Node {
  [x: string]: any;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  color: string;
  size: number;
  originalX: number;
  originalY: number;
  originalZ: number;
}

interface NeuralNetworkAccentProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  opacity?: number;
  nodeCount?: number;
  maxConnectionDist?: number;
  color?: string;
}

const   NeuralNetworkAccent: React.FC<NeuralNetworkAccentProps> = ({
  className = '',
  size = 'medium',
  position = 'top-right',
  opacity = 0.6,
  nodeCount = 30,
  maxConnectionDist = 100,
  color = 'rgba(0, 229, 255, 0.8)'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: null as number | null, y: null as number | null });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const mouseInfluence = 80;

  class Node3D {
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
    color: string;
    size: number;
    originalX: number;
    originalY: number;
    originalZ: number;

    constructor(x: number, y: number, z: number) {
      this.originalX = x;
      this.originalY = y;
      this.originalZ = z;
      this.x = x;
      this.y = y;
      this.z = z;
      this.vx = Math.random() * 0.3 - 0.15;
      this.vy = Math.random() * 0.3 - 0.15;
      this.vz = Math.random() * 0.3 - 0.15;
      
      this.color = color;
      this.size = 1.5;
    }

    update(canvas: HTMLCanvasElement, mouse: { x: number | null; y: number | null }) {
      // Apply velocity
      this.x += this.vx;
      this.y += this.vy;
      this.z += this.vz;

      // Boundary collision - bounce off edges
      if (this.x > canvas.width || this.x < 0) {
        this.vx *= -1;
        this.x = Math.max(0, Math.min(canvas.width, this.x));
      }
      if (this.y > canvas.height || this.y < 0) {
        this.vy *= -1;
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }
      if (this.z > 300 || this.z < -300) {
        this.vz *= -1;
        this.z = Math.max(-300, Math.min(300, this.z));
      }

      // 3D projection
      const scale = 300 / (300 + this.z);
      const projectedX = (this.x - canvas.width / 2) * scale + canvas.width / 2;
      const projectedY = (this.y - canvas.height / 2) * scale + canvas.height / 2;

      return { x: projectedX, y: projectedY, scale };
    }
  }

  const initNodes = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const count = isMobile ? Math.floor(nodeCount * 0.7) : nodeCount;
    nodesRef.current = [];
    
    for (let i = 0; i < count; i++) {
      nodesRef.current.push(new Node3D(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 600 - 300
      ));
    }
  };

  const drawConnections = (ctx: CanvasRenderingContext2D) => {
    const nodes = nodesRef.current;
    const connectionDist = isMobile ? maxConnectionDist * 0.8 : maxConnectionDist;
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDist) {
          const connectionOpacity = (1 - (distance / connectionDist)) * opacity;
          ctx.strokeStyle = `rgba(0, 229, 255, ${connectionOpacity})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawConnections(ctx);
    
    nodesRef.current.forEach(node => {
      const projected = node.update(canvas, mouseRef.current);
      
      ctx.fillStyle = node.color;
      ctx.beginPath();
      ctx.arc(projected.x, projected.y, node.size * projected.scale, 0, Math.PI * 2);
      ctx.fill();
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    if (!containerRef.current || !canvasRef.current) return;
    
    const container = containerRef.current;
    const canvas = canvasRef.current;
    
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    setDimensions({ width: rect.width, height: rect.height });
    initNodes();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: null, y: null };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    handleResize();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', checkMobile);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkMobile);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`${styles.neuralNetworkAccent} ${styles[size]} ${styles[position]} ${className}`}
    >
      <canvas
        ref={canvasRef}
        className={styles.neuralCanvas}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          opacity: opacity
        }}
      />
    </div>
  );
};

export default NeuralNetworkAccent;
