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
  nodeCount?: number;
  maxConnectionDist?: number;
  opacity?: number;
  color?: string;
  mouseInfluence?: number;
}

interface ViewState {
  x: number;
  y: number;
  scale: number;
}

const NeuralNetworkBackground: React.FC<NeuralNetworkBackgroundProps> = ({ 
  className,
  nodeCount = 100,
  maxConnectionDist = 150,
  opacity = 1,
  color = 'rgba(0, 229, 255, 0.8)',
  mouseInfluence = 100
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: null as number | null, y: null as number | null });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [viewState, setViewState] = useState<ViewState>({
    x: 0,
    y: 0,
    scale: 1
  });
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const canvasContainerRef = useRef<HTMLDivElement>(null);

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
      
      // Use provided color with variations
      this.color = color;
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
    const count = isMobile ? Math.floor(nodeCount * 0.6) : nodeCount;
    nodesRef.current = [];
    
    for (let i = 0; i < count; i++) {
      nodesRef.current.push(new Node3D(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 1000 - 500
      ));
    }
  };

  const drawConnections = (ctx: CanvasRenderingContext2D) => {
    const nodes = nodesRef.current;
    const connectionDist = isMobile ? 120 : maxConnectionDist;
    
    // Apply view transform
    ctx.save();
    ctx.translate(viewState.x, viewState.y);
    ctx.scale(viewState.scale, viewState.scale);
    
    // Track which nodes have connections
    const connectedNodes = new Set<number>();
    
    // First pass: draw all connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDist) {
          // Mark nodes as connected
          connectedNodes.add(i);
          connectedNodes.add(j);
          
          // Draw the connection line
          const connectionOpacity = (1 - (distance / connectionDist)) * opacity * 0.5;
          ctx.strokeStyle = `rgba(0, 229, 255, ${connectionOpacity})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    
    // Second pass: draw dots at line ends
    nodes.forEach((node, index) => {
      if (connectedNodes.has(index)) {
        // Calculate connection count for this node
        let connectionCount = 0;
        for (let i = 0; i < nodes.length; i++) {
          if (i !== index) {
            const dx = node.x - nodes[i].x;
            const dy = node.y - nodes[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < connectionDist) connectionCount++;
          }
        }
        
        // Draw dot with size based on connection count
        const size = 1 + (connectionCount * 0.3);
        const alpha = 0.3 + (connectionCount * 0.05);
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, size * 3
        );
        gradient.addColorStop(0, `rgba(0, 229, 255, ${alpha})`);
        gradient.addColorStop(1, 'rgba(0, 229, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Center dot
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha + 0.2})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    
    ctx.restore();
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx) return;

    // Clear canvas with transparent background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update nodes
    nodesRef.current.forEach(node => {
      node.update(canvas, mouseRef.current);
    });
    
    // Draw connections and dots
    drawConnections(ctx);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) { // Left mouse button
      setIsDragging(true);
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      if (canvasContainerRef.current) {
        canvasContainerRef.current.style.cursor = 'grabbing';
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      
      setViewState(prev => ({
        ...prev,
        x: prev.x + dx,
        y: prev.y + dy
      }));
      
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    }
    
    // Update mouse position for node interaction
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left - viewState.x) / viewState.scale,
        y: (e.clientY - rect.top - viewState.y) / viewState.scale
      };
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (canvasContainerRef.current) {
      canvasContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    
    // Get mouse position relative to canvas
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate new scale (limit between 0.5 and 3)
    const delta = -e.deltaY * 0.001;
    const newScale = Math.min(Math.max(0.5, viewState.scale + delta), 3);
    
    // Calculate new position to zoom toward mouse
    const scaleFactor = newScale / viewState.scale;
    
    setViewState(prev => ({
      x: mouseX - (mouseX - prev.x) * scaleFactor,
      y: mouseY - (mouseY - prev.y) * scaleFactor,
      scale: newScale
    }));
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
    container.addEventListener('mousemove', handleMouseMove as any);
    container.addEventListener('mouseleave', handleMouseUp);
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkMobile);
      container.removeEventListener('mousemove', handleMouseMove as any);
      container.removeEventListener('mouseleave', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`${styles.neuralNetworkBackground} ${className || ''}`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <canvas 
        ref={canvasRef} 
        className={styles.neuralCanvas}
        width={dimensions.width}
        height={dimensions.height}
        style={{
          transform: `translate(${viewState.x}px, ${viewState.y}px) scale(${viewState.scale})`,
          transformOrigin: '0 0',
          transition: isDragging ? 'none' : 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default NeuralNetworkBackground;
