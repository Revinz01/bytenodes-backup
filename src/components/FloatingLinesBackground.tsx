"use client";

import { useEffect, useRef, useCallback } from "react";

interface FloatingLinesBackgroundProps {
  lineCount?: number;
  lineColor?: string;
  lineColorSecondary?: string;
  lineWidth?: number;
  speed?: number;
  interactive?: boolean;
  className?: string;
}

interface Line {
  x: number;
  y: number;
  length: number;
  angle: number;
  speed: number;
  amplitude: number;
  frequency: number;
  phase: number;
  opacity: number;
  isSecondary: boolean;
}

export const FloatingLinesBackground = ({
  lineCount = 12,
  lineColor = "hsl(217 91% 60%)",
  lineColorSecondary = "hsl(180 70% 50%)",
  lineWidth = 1.5,
  speed = 0.5,
  interactive = true,
  className = "",
}: FloatingLinesBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const linesRef = useRef<Line[]>([]);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);

  const initLines = useCallback((width: number, height: number) => {
    const lines: Line[] = [];
    for (let i = 0; i < lineCount; i++) {
      const isSecondary = i % 3 === 0;
      lines.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: 150 + Math.random() * 300,
        angle: (Math.random() - 0.5) * Math.PI * 0.3,
        speed: (0.2 + Math.random() * 0.5) * speed,
        amplitude: 30 + Math.random() * 60,
        frequency: 0.002 + Math.random() * 0.003,
        phase: Math.random() * Math.PI * 2,
        opacity: 0.15 + Math.random() * 0.25,
        isSecondary,
      });
    }
    return lines;
  }, [lineCount, speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      linesRef.current = initLines(rect.width, rect.height);
    };

    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const drawLine = (line: Line, time: number, width: number, height: number) => {
      const { x, y, length, angle, amplitude, frequency, phase, opacity, isSecondary } = line;
      
      // Calculate wave offset
      const waveOffset = Math.sin(time * frequency * 1000 + phase) * amplitude;
      
      // Mouse interaction
      const dx = mouseRef.current.x - x;
      const dy = mouseRef.current.y - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 200;
      let mouseInfluence = 0;
      let mouseAngle = 0;
      
      if (dist < maxDist && interactive) {
        mouseInfluence = (1 - dist / maxDist) * 30;
        mouseAngle = Math.atan2(dy, dx);
      }

      // Calculate start and end points with wave and mouse influence
      const centerX = x + Math.sin(time * 0.3 + phase) * 20;
      const centerY = y + waveOffset + Math.sin(mouseAngle) * mouseInfluence;
      
      const halfLength = length / 2;
      const startX = centerX - Math.cos(angle) * halfLength;
      const startY = centerY - Math.sin(angle) * halfLength;
      const endX = centerX + Math.cos(angle) * halfLength;
      const endY = centerY + Math.sin(angle) * halfLength;

      // Create gradient
      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
      const color = isSecondary ? lineColorSecondary : lineColor;
      
      gradient.addColorStop(0, `${color.replace(")", ` / 0)`)}`);
      gradient.addColorStop(0.3, `${color.replace(")", ` / ${opacity})`)}`);
      gradient.addColorStop(0.5, `${color.replace(")", ` / ${opacity * 1.2})`)}`);
      gradient.addColorStop(0.7, `${color.replace(")", ` / ${opacity})`)}`);
      gradient.addColorStop(1, `${color.replace(")", ` / 0)`)}`);

      // Draw line with bezier curve for smoothness
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = lineWidth + (mouseInfluence > 0 ? 0.5 : 0);
      ctx.lineCap = "round";
      
      // Add slight curve to the line
      const controlX = centerX + Math.sin(time * 0.5 + phase) * 15;
      const controlY = centerY + Math.cos(time * 0.4 + phase) * 10;
      
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(controlX, controlY, endX, endY);
      ctx.stroke();

      // Update line position for floating effect
      line.y += Math.sin(time * 0.2 + phase) * 0.3;
      line.x += Math.cos(time * 0.15 + phase) * 0.2;
      
      // Wrap around edges
      if (line.y < -100) line.y = height + 100;
      if (line.y > height + 100) line.y = -100;
      if (line.x < -200) line.x = width + 200;
      if (line.x > width + 200) line.x = -200;
    };

    const animate = () => {
      timeRef.current += 0.016 * speed;
      const rect = canvas.getBoundingClientRect();
      
      ctx.clearRect(0, 0, rect.width, rect.height);
      
      // Draw all lines
      linesRef.current.forEach((line) => {
        drawLine(line, timeRef.current, rect.width, rect.height);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [lineCount, lineColor, lineColorSecondary, lineWidth, speed, interactive, initLines]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
};
