'use client';

import React, { useEffect, useRef } from 'react';
import styles from './NeuralNetwork.module.scss';

interface Connection {
  x: number;
  y: number;
  z: number;
  size: number;
  screen: {
    x: number;
    y: number;
    z: number;
    scale: number;
    color: string;
  };
  links: Connection[];
  probabilities: number[];
  isEnd: boolean;
  glowSpeed: number;
  step: () => void;
  link: () => void;
  setScreen: () => void;
  draw: () => void;
}

interface Data {
  glowSpeed: number;
  speed: number;
  screen: {
    x: number;
    y: number;
    z: number;
    scale: number;
    color: string;
    lastX: number;
    lastY: number;
  };
  connection: Connection;
  nextConnection: Connection;
  ox: number;
  oy: number;
  oz: number;
  os: number;
  nx: number;
  ny: number;
  nz: number;
  ns: number;
  dx: number;
  dy: number;
  dz: number;
  ds: number;
  proportion: number;
  size: number;
  x: number;
  y: number;
  z: number;
  ended: number;
  step: () => void;
  draw: () => void;
  setConnection: (connection: Connection) => void;
  reset: () => void;
  setScreen: () => void;
}

const NeuralNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const optsRef = useRef<any>(null);
  const connectionsRef = useRef<Connection[]>([]);
  const dataRef = useRef<Data[]>([]);
  const allRef = useRef<any[]>([]);
  const toDevelopRef = useRef<Connection[]>([]);
  const tickRef = useRef(0);
  const sinXRef = useRef(0);
  const sinYRef = useRef(0);
  const cosXRef = useRef(0);
  const cosYRef = useRef(0);
  const animatingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize options
    const opts = {
      range: 180,
      baseConnections: 3,
      addedConnections: 5,
      baseSize: 5,
      minSize: 1,
      dataToConnectionSize: 0.4,
      sizeMultiplier: 0.7,
      allowedDist: 40,
      baseDist: 40,
      addedDist: 30,
      connectionAttempts: 100,
      dataToConnections: 1,
      baseSpeed: 0.04,
      addedSpeed: 0.05,
      baseGlowSpeed: 0.4,
      addedGlowSpeed: 0.4,
      rotVelX: 0.003,
      rotVelY: 0.002,
      repaintColor: '#111',
      connectionColor: 'hsla(200,60%,light%,alp)',
      rootColor: 'hsla(0,60%,light%,alp)',
      endColor: 'hsla(160,20%,light%,alp)',
      dataColor: 'hsla(40,80%,light%,alp)',
      wireframeWidth: 0.1,
      wireframeColor: '#88f',
      depth: 250,
      focalLength: 250,
      vanishPoint: {
        x: canvas.width / 2,
        y: canvas.height / 2,
      },
    };

    optsRef.current = opts;

    const squareRange = opts.range * opts.range;
    const squareAllowed = opts.allowedDist * opts.allowedDist;
    const mostDistant = opts.depth + opts.range;
    const Tau = Math.PI * 2;

    // Connection class
    class Connection {
      x: number;
      y: number;
      z: number;
      size: number;
      screen: any;
      links: Connection[];
      probabilities: number[];
      isEnd: boolean;
      glowSpeed: number;
      step: () => void;

      constructor(x: number, y: number, z: number, size: number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.screen = {};
        this.links = [];
        this.probabilities = [];
        this.isEnd = false;
        this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
        this.step = this.connectionStep.bind(this);
      }

      link() {
        if (this.size < opts.minSize) {
          return (this.isEnd = true);
        }

        const links: any[] = [];
        const connectionsNum = (opts.baseConnections + Math.random() * opts.addedConnections) | 0;
        let attempt = opts.connectionAttempts;

        while (links.length < connectionsNum && --attempt > 0) {
          const alpha = Math.random() * Math.PI;
          const beta = Math.random() * Tau;
          const len = opts.baseDist + opts.addedDist * Math.random();

          const cosA = Math.cos(alpha);
          const sinA = Math.sin(alpha);
          const cosB = Math.cos(beta);
          const sinB = Math.sin(beta);

          const pos = {
            x: this.x + len * cosA * sinB,
            y: this.y + len * sinA * sinB,
            z: this.z + len * cosB,
          };

          if (pos.x * pos.x + pos.y * pos.y + pos.z * pos.z < squareRange) {
            let passedExisting = true;
            let passedBuffered = true;

            for (let i = 0; i < connectionsRef.current.length; ++i) {
              if (squareDist(pos, connectionsRef.current[i]) < squareAllowed) {
                passedExisting = false;
              }
            }

            if (passedExisting) {
              for (let i = 0; i < links.length; ++i) {
                if (squareDist(pos, links[i]) < squareAllowed) {
                  passedBuffered = false;
                }
              }
            }

            if (passedExisting && passedBuffered) {
              links.push({ x: pos.x, y: pos.y, z: pos.z });
            }
          }
        }

        if (links.length === 0) {
          this.isEnd = true;
        } else {
          for (let i = 0; i < links.length; ++i) {
            const pos = links[i];
            const connection = new Connection(pos.x, pos.y, pos.z, this.size * opts.sizeMultiplier);
            this.links[i] = connection;
            allRef.current.push(connection);
            connectionsRef.current.push(connection);
          }
          for (let i = 0; i < this.links.length; ++i) {
            toDevelopRef.current.push(this.links[i]);
          }
        }
      }

      connectionStep() {
        this.setScreen();
        this.screen.color = (this.isEnd ? opts.endColor : opts.connectionColor)
          .replace('light', 30 + ((tickRef.current * this.glowSpeed) % 30))
          .replace('alp', 0.2 + (1 - this.screen.z / mostDistant) * 0.8);

        for (let i = 0; i < this.links.length; ++i) {
          ctx.moveTo(this.screen.x, this.screen.y);
          ctx.lineTo(this.links[i].screen.x, this.links[i].screen.y);
        }
      }

      rootStep() {
        this.setScreen();
        this.screen.color = opts.rootColor
          .replace('light', 30 + ((tickRef.current * this.glowSpeed) % 30))
          .replace('alp', (1 - this.screen.z / mostDistant) * 0.8);

        for (let i = 0; i < this.links.length; ++i) {
          ctx.moveTo(this.screen.x, this.screen.y);
          ctx.lineTo(this.links[i].screen.x, this.links[i].screen.y);
        }
      }

      setScreen() {
        let x = this.x;
        let y = this.y;
        let z = this.z;

        // Apply rotation on X axis
        const Y = y;
        y = y * cosXRef.current - z * sinXRef.current;
        z = z * cosXRef.current + Y * sinXRef.current;

        // rot on Y
        const Z = z;
        z = z * cosYRef.current - x * sinYRef.current;
        x = x * cosYRef.current + Z * sinYRef.current;

        this.screen.z = z;

        // translate on Z
        z += opts.depth;

        this.screen.scale = opts.focalLength / z;
        this.screen.x = opts.vanishPoint.x + x * this.screen.scale;
        this.screen.y = opts.vanishPoint.y + y * this.screen.scale;
      }

      draw() {
        ctx.fillStyle = this.screen.color;
        ctx.beginPath();
        ctx.arc(this.screen.x, this.screen.y, this.screen.scale * this.size, 0, Tau);
        ctx.fill();
      }
    }

    // Data class
    class Data {
      glowSpeed: number;
      speed: number;
      screen: any;
      connection: Connection;
      nextConnection: Connection;
      ox: number;
      oy: number;
      oz: number;
      os: number;
      nx: number;
      ny: number;
      nz: number;
      ns: number;
      dx: number;
      dy: number;
      dz: number;
      ds: number;
      proportion: number;
      size: number;
      x: number;
      y: number;
      z: number;
      ended: number;

      constructor(connection: Connection) {
        this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
        this.speed = opts.baseSpeed + opts.addedSpeed * Math.random();
        this.screen = {};
        this.ended = 0;
        this.setConnection(connection);
      }

      reset() {
        this.setConnection(connectionsRef.current[0]);
        this.ended = 2;
      }

      step() {
        this.proportion += this.speed;

        if (this.proportion < 1) {
          this.x = this.ox + this.dx * this.proportion;
          this.y = this.oy + this.dy * this.proportion;
          this.z = this.oz + this.dz * this.proportion;
          this.size = (this.os + this.ds * this.proportion) * opts.dataToConnectionSize;
        } else {
          this.setConnection(this.nextConnection);
        }

        this.screen.lastX = this.screen.x;
        this.screen.lastY = this.screen.y;
        this.setScreen();
        this.screen.color = opts.dataColor
          .replace('light', 40 + ((tickRef.current * this.glowSpeed) % 50))
          .replace('alp', 0.2 + (1 - this.screen.z / mostDistant) * 0.6);
      }

      draw() {
        if (this.ended) {
          return --this.ended;
        }

        ctx.beginPath();
        ctx.strokeStyle = this.screen.color;
        ctx.lineWidth = this.size * this.screen.scale;
        ctx.moveTo(this.screen.lastX, this.screen.lastY);
        ctx.lineTo(this.screen.x, this.screen.y);
        ctx.stroke();
      }

      setConnection(connection: Connection) {
        if (connection.isEnd) {
          this.reset();
        } else {
          this.connection = connection;
          this.nextConnection = connection.links[(connection.links.length * Math.random()) | 0];

          this.ox = connection.x;
          this.oy = connection.y;
          this.oz = connection.z;
          this.os = connection.size;

          this.nx = this.nextConnection.x;
          this.ny = this.nextConnection.y;
          this.nz = this.nextConnection.z;
          this.ns = this.nextConnection.size;

          this.dx = this.nx - this.ox;
          this.dy = this.ny - this.oy;
          this.dz = this.nz - this.oz;
          this.ds = this.ns - this.os;

          this.proportion = 0;
        }
      }

      setScreen() {
        let x = this.x;
        let y = this.y;
        let z = this.z;

        // Apply rotation on X axis
        const Y = y;
        y = y * cosXRef.current - z * sinXRef.current;
        z = z * cosXRef.current + Y * sinXRef.current;

        // rot on Y
        const Z = z;
        z = z * cosYRef.current - x * sinYRef.current;
        x = x * cosYRef.current + Z * sinYRef.current;

        this.screen.z = z;

        // translate on Z
        z += opts.depth;

        this.screen.scale = opts.focalLength / z;
        this.screen.x = opts.vanishPoint.x + x * this.screen.scale;
        this.screen.y = opts.vanishPoint.y + y * this.screen.scale;
      }
    }

    function squareDist(a: any, b: any) {
      const x = b.x - a.x;
      const y = b.y - a.y;
      const z = b.z - a.z;
      return x * x + y * y + z * z;
    }

    function init() {
      connectionsRef.current.length = 0;
      dataRef.current.length = 0;
      allRef.current.length = 0;
      toDevelopRef.current.length = 0;

      const connection = new Connection(0, 0, 0, opts.baseSize);
      connection.step = connection.rootStep.bind(connection);
      connectionsRef.current.push(connection);
      allRef.current.push(connection);
      connection.link();

      while (toDevelopRef.current.length > 0) {
        toDevelopRef.current[0].link();
        toDevelopRef.current.shift();
      }

      if (!animatingRef.current) {
        animatingRef.current = true;
        anim();
      }
    }

    function anim() {
      animationRef.current = requestAnimationFrame(anim);

      ctx.globalCompositeOperation = 'source-over';

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(0.5, '#1a1a2e');
      gradient.addColorStop(1, '#16213e');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ++tickRef.current;

      const rotX = tickRef.current * opts.rotVelX;
      const rotY = tickRef.current * opts.rotVelY;

      cosXRef.current = Math.cos(rotX);
      sinXRef.current = Math.sin(rotX);
      cosYRef.current = Math.cos(rotY);
      sinYRef.current = Math.sin(rotY);

      if (dataRef.current.length < connectionsRef.current.length * opts.dataToConnections) {
        const datum = new Data(connectionsRef.current[0]);
        dataRef.current.push(datum);
        allRef.current.push(datum);
      }

      ctx.globalCompositeOperation = 'lighter';
      ctx.beginPath();
      ctx.lineWidth = opts.wireframeWidth;
      ctx.strokeStyle = opts.wireframeColor;
      allRef.current.forEach((item: any) => item.step());
      ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
      allRef.current.sort((a: any, b: any) => b.screen.z - a.screen.z);
      allRef.current.forEach((item: any) => item.draw());
    }

    // Show loading screen
    const loadingGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    loadingGradient.addColorStop(0, '#0a0a0a');
    loadingGradient.addColorStop(0.5, '#1a1a2e');
    loadingGradient.addColorStop(1, '#16213e');

    ctx.fillStyle = loadingGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ccc';
    ctx.font = '50px Verdana';
    ctx.fillText(
      'Calculating Nodes',
      canvas.width / 2 - ctx.measureText('Calculating Nodes').width / 2,
      canvas.height / 2 - 15
    );

    setTimeout(init, 4);

    // Click to regenerate
    const handleClick = () => {
      init();
    };

    canvas.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.neuralNetwork}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default NeuralNetwork;
