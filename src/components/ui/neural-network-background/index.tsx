'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './NeuralNetworkBackground.module.scss';

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

interface NeuralNetworkBackgroundProps {
  className?: string;
}

const NeuralNetworkBackground: React.FC<NeuralNetworkBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: null as number | null, y: null as number | null });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const mouseInfluence = 100; // Distance of mouse influence
  const numNodes = 100;
  const maxConnectionDist = 150;

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
      this.vx = Math.random() * 0.5 - 0.25;
      this.vy = Math.random() * 0.5 - 0.25;
      this.vz = Math.random() * 0.5 - 0.25;
      
      // Match CodePen color scheme - primarily cyan with variations
      this.color = `rgba(0, 229, 255, ${Math.random() * 0.5 + 0.1})`;
      this.size = 2;
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
      if (this.z > 500 || this.z < -500) {
        this.vz *= -1;
        this.z = Math.max(-500, Math.min(500, this.z));
      }

      // 3D projection - match CodePen projection
      const scale = 500 / (500 + this.z);
      const projectedX = (this.x - canvas.width / 2) * scale + canvas.width / 2;
      const projectedY = (this.y - canvas.height / 2) * scale + canvas.height / 2;

      return { x: projectedX, y: projectedY, scale };
    }
  }

  const initNodes = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const nodeCount = isMobile ? 60 : numNodes;
    nodesRef.current = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nodesRef.current.push(new Node3D(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 1000 - 500
      ));
    }
  };

  const drawConnections = (ctx: CanvasRenderingContext2D) => {
    const nodes = nodesRef.current;
    const mouse = mouseRef.current;
    const connectionDist = isMobile ? 120 : maxConnectionDist;
    
    // Match CodePen connection drawing style
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDist) {
          const opacity = 1 - (distance / connectionDist);
          ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`;
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

    // Clear canvas completely - match CodePen style
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw connections first
    drawConnections(ctx);
    
    // Update and draw nodes - match CodePen simple style
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
    // Reset mouse position when leaving the container
    mouseRef.current = { x: null, y: null };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;

    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();

    // Initial setup
    handleResize();
    
    // Start animation
    animate();

    // Event listeners
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
      className={`${styles.neuralNetworkBackground} ${className || ''}`}
    >
      <canvas
        ref={canvasRef}
        className={styles.neuralCanvas}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
};

export default NeuralNetworkBackground;
