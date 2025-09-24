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

interface ExclusionZone {
  x: number;
  y: number;
  width: number;
  height: number;
  densityReduction?: number; // 0-1, where 0 = no nodes, 1 = normal density
}

interface NeuralNetworkBackgroundProps {
  className?: string;
  nodeCount?: number;
  maxConnectionDist?: number;
  opacity?: number;
  color?: string;
  mouseInfluence?: number;
  exclusionZones?: ExclusionZone[];
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
  mouseInfluence = 100,
  exclusionZones = []
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

  // Helper function to check if a point is within any exclusion zone
  const isInExclusionZone = (x: number, y: number): boolean => {
    return exclusionZones.some(zone => 
      x >= zone.x && x <= zone.x + zone.width &&
      y >= zone.y && y <= zone.y + zone.height
    );
  };

  // Helper function to get density reduction factor for a point
  const getDensityReduction = (x: number, y: number): number => {
    const zone = exclusionZones.find(zone => 
      x >= zone.x && x <= zone.x + zone.width &&
      y >= zone.y && y <= zone.y + zone.height
    );
    return zone ? (zone.densityReduction ?? 0.3) : 1;
  };

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
    isInExclusionZone: boolean;
    densityReduction: number;

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
      
      // Check if node is in exclusion zone
      this.isInExclusionZone = isInExclusionZone(x, y);
      this.densityReduction = getDensityReduction(x, y);
      
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
    const baseCount = isMobile ? Math.floor(nodeCount * 0.6) : nodeCount;
    nodesRef.current = [];
    
    // Calculate total area and exclusion zone areas
    const totalArea = canvas.width * canvas.height;
    let exclusionArea = 0;
    
    exclusionZones.forEach(zone => {
      exclusionArea += zone.width * zone.height;
    });
    
    const normalArea = totalArea - exclusionArea;
    const exclusionDensity = exclusionZones.length > 0 ? 
      (exclusionZones[0].densityReduction ?? 0.3) : 1;
    
    // Calculate node counts for each area
    const normalNodeCount = Math.floor(baseCount * (normalArea / totalArea));
    const exclusionNodeCount = Math.floor(baseCount * (exclusionArea / totalArea) * exclusionDensity);
    
    // Generate nodes for normal areas
    for (let i = 0; i < normalNodeCount; i++) {
      let x, y;
      let attempts = 0;
      
      // Try to place node outside exclusion zones
      do {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
        attempts++;
      } while (isInExclusionZone(x, y) && attempts < 50);
      
      // If we couldn't find a spot outside exclusion zones, place it anyway
      if (attempts >= 50) {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      }
      
      nodesRef.current.push(new Node3D(x, y, Math.random() * 1000 - 500));
    }
    
    // Generate nodes for exclusion areas (with reduced density)
    for (let i = 0; i < exclusionNodeCount; i++) {
      let x, y;
      let attempts = 0;
      
      // Try to place node inside exclusion zones
      do {
        const zone = exclusionZones[Math.floor(Math.random() * exclusionZones.length)];
        x = zone.x + Math.random() * zone.width;
        y = zone.y + Math.random() * zone.height;
        attempts++;
      } while (!isInExclusionZone(x, y) && attempts < 50);
      
      // If we couldn't find a spot inside exclusion zones, place it randomly
      if (attempts >= 50) {
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
      }
      
      nodesRef.current.push(new Node3D(x, y, Math.random() * 1000 - 500));
    }
  };

  const drawConnections = (ctx: CanvasRenderingContext2D) => {
    const nodes = nodesRef.current;
    const connectionDist = isMobile ? 120 : maxConnectionDist;
    
    // Apply view transform
    ctx.save();
    ctx.translate(viewState.x, viewState.y);
    ctx.scale(viewState.scale, viewState.scale);
    
    // Add subtle pulsing effect
    const time = Date.now() * 0.001;
    const pulseFactor = 1 + Math.sin(time * 2) * 0.1;
    
    // Track which nodes have connections
    const connectedNodes = new Set<number>();
    
    // First pass: draw all connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDist) {
          // Check if either node is in an exclusion zone
          const nodeIInExclusion = nodes[i].isInExclusionZone;
          const nodeJInExclusion = nodes[j].isInExclusionZone;
          
          // Apply density reduction for connections involving exclusion zone nodes
          const densityReduction = nodeIInExclusion || nodeJInExclusion ? 
            Math.min(nodes[i].densityReduction, nodes[j].densityReduction) : 1;
          
          // Reduce the impact of density reduction on connection visibility
          // Only skip connections if density reduction is very low (less than 0.3)
          if (densityReduction < 0.3 && Math.random() > densityReduction) {
            continue;
          }
          
          // Mark nodes as connected
          connectedNodes.add(i);
          connectedNodes.add(j);
          
          // Draw the connection line with improved visibility
          const baseOpacity = (1 - (distance / connectionDist)) * opacity * 0.8;
          const connectionOpacity = Math.max(baseOpacity * densityReduction * pulseFactor, 0.2); // Ensure minimum visibility with pulse
          
          // Create gradient for the connection line
          const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
          gradient.addColorStop(0, `rgba(0, 229, 255, ${connectionOpacity})`);
          gradient.addColorStop(0.5, `rgba(0, 255, 255, ${connectionOpacity * 1.2})`);
          gradient.addColorStop(1, `rgba(0, 229, 255, ${connectionOpacity})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5 * pulseFactor; // Dynamic line width with pulse
          ctx.shadowColor = 'rgba(0, 229, 255, 0.4)'; // Enhanced glow
          ctx.shadowBlur = 3 * pulseFactor;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
          ctx.shadowBlur = 0; // Reset shadow
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
        
        // Apply density reduction for nodes in exclusion zones
        const densityReduction = node.densityReduction;
        const size = (1 + (connectionCount * 0.3)) * densityReduction;
        const alpha = (0.3 + (connectionCount * 0.05)) * densityReduction;
        
        // Skip drawing very small nodes in exclusion zones
        if (size < 0.5) return;
        
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
