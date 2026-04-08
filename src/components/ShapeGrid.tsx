"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { useTheme } from "next-themes";

interface ShapeGridProps {
  gridSize?: number;
  duration?: number;
  maxActiveShapes?: number;
  className?: string;
}

interface Shape {
  id: string;
  row: number;
  col: number;
  type: "circle" | "square" | "triangle" | "cross" | "diamond";
  opacity: number;
  scale: number;
  rotation: number;
  color: string;
  isAnimating: boolean;
  animationProgress: number;
}

const SHAPE_TYPES = ["circle", "square", "triangle", "cross", "diamond"] as const;

const LIGHT_COLORS = [
  "hsl(217 91% 50%)",   // Primary blue
  "hsl(217 91% 60%)",   // Light blue
  "hsl(186 85% 45%)",   // Cyan
  "hsl(220 15% 70%)",   // Muted gray-blue
];

const DARK_COLORS = [
  "hsl(217 91% 60%)",   // Primary blue
  "hsl(217 91% 70%)",   // Light blue
  "hsl(186 85% 55%)",   // Cyan
  "hsl(220 20% 45%)",   // Muted gray-blue
];

export const ShapeGrid = ({
  gridSize = 60,
  duration = 3000,
  maxActiveShapes = 8,
  className = "",
}: ShapeGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Map<string, Shape>>(new Map());
  const animationRef = useRef<number>(0);
  const lastActivationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getColors = useCallback(() => {
    return resolvedTheme === "dark" ? DARK_COLORS : LIGHT_COLORS;
  }, [resolvedTheme]);

  const drawShape = useCallback((
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    shape: Shape
  ) => {
    const { type, opacity, scale, rotation, color } = shape;
    const scaledSize = size * scale * 0.35;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.globalAlpha = opacity;

    ctx.strokeStyle = color;
    ctx.fillStyle = `${color.replace(")", " / 0.15)")}`;
    ctx.lineWidth = 1.5;

    switch (type) {
      case "circle":
        ctx.beginPath();
        ctx.arc(0, 0, scaledSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        break;

      case "square":
        ctx.beginPath();
        ctx.rect(-scaledSize, -scaledSize, scaledSize * 2, scaledSize * 2);
        ctx.fill();
        ctx.stroke();
        break;

      case "triangle":
        ctx.beginPath();
        ctx.moveTo(0, -scaledSize);
        ctx.lineTo(scaledSize, scaledSize);
        ctx.lineTo(-scaledSize, scaledSize);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;

      case "cross":
        const thickness = scaledSize * 0.35;
        ctx.beginPath();
        ctx.moveTo(-thickness, -scaledSize);
        ctx.lineTo(thickness, -scaledSize);
        ctx.lineTo(thickness, -thickness);
        ctx.lineTo(scaledSize, -thickness);
        ctx.lineTo(scaledSize, thickness);
        ctx.lineTo(thickness, thickness);
        ctx.lineTo(thickness, scaledSize);
        ctx.lineTo(-thickness, scaledSize);
        ctx.lineTo(-thickness, thickness);
        ctx.lineTo(-scaledSize, thickness);
        ctx.lineTo(-scaledSize, -thickness);
        ctx.lineTo(-thickness, -thickness);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;

      case "diamond":
        ctx.beginPath();
        ctx.moveTo(0, -scaledSize);
        ctx.lineTo(scaledSize, 0);
        ctx.lineTo(0, scaledSize);
        ctx.lineTo(-scaledSize, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;
    }

    ctx.restore();
  }, []);

  const activateRandomShape = useCallback((cols: number, rows: number) => {
    const colors = getColors();
    const activeCount = Array.from(shapesRef.current.values()).filter(s => s.isAnimating).length;
    
    if (activeCount >= maxActiveShapes) return;

    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    const id = `${row}-${col}`;

    if (shapesRef.current.has(id) && shapesRef.current.get(id)!.isAnimating) return;

    const shape: Shape = {
      id,
      row,
      col,
      type: SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)],
      opacity: 0,
      scale: 0,
      rotation: Math.random() * 45 - 22.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      isAnimating: true,
      animationProgress: 0,
    };

    shapesRef.current.set(id, shape);
  }, [maxActiveShapes, getColors]);

  const activateNearMouse = useCallback((cols: number, rows: number, cellWidth: number, cellHeight: number) => {
    const colors = getColors();
    const { x, y } = mouseRef.current;
    if (x < 0 || y < 0) return;

    const col = Math.floor(x / cellWidth);
    const row = Math.floor(y / cellHeight);

    // Activate nearby cells
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (Math.random() > 0.3) continue;
        
        const r = row + dr;
        const c = col + dc;
        if (r < 0 || r >= rows || c < 0 || c >= cols) continue;

        const id = `${r}-${c}`;
        if (shapesRef.current.has(id) && shapesRef.current.get(id)!.isAnimating) continue;

        const shape: Shape = {
          id,
          row: r,
          col: c,
          type: SHAPE_TYPES[Math.floor(Math.random() * SHAPE_TYPES.length)],
          opacity: 0,
          scale: 0,
          rotation: Math.random() * 30 - 15,
          color: colors[Math.floor(Math.random() * colors.length)],
          isAnimating: true,
          animationProgress: 0,
        };

        shapesRef.current.set(id, shape);
      }
    }
  }, [getColors]);

  useEffect(() => {
    if (!mounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let cellWidth = 0;
    let cellHeight = 0;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      cols = Math.ceil(width / gridSize) + 1;
      rows = Math.ceil(height / gridSize) + 1;
      cellWidth = width / cols;
      cellHeight = height / rows;
    };

    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw grid dots
      ctx.fillStyle = resolvedTheme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellWidth + cellWidth / 2;
          const y = row * cellHeight + cellHeight / 2;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Activate random shapes periodically
      if (timestamp - lastActivationRef.current > 400) {
        activateRandomShape(cols, rows);
        lastActivationRef.current = timestamp;
      }

      // Activate shapes near mouse
      if (mouseRef.current.x > 0 && Math.random() > 0.7) {
        activateNearMouse(cols, rows, cellWidth, cellHeight);
      }

      // Update and draw shapes
      shapesRef.current.forEach((shape, id) => {
        if (!shape.isAnimating) return;

        shape.animationProgress += 16 / duration;

        // Easing function for smooth animation
        const progress = shape.animationProgress;
        const easeOut = 1 - Math.pow(1 - Math.min(progress, 1), 3);
        const fadeIn = Math.min(progress * 3, 1);
        const fadeOut = progress > 0.7 ? 1 - ((progress - 0.7) / 0.3) : 1;

        shape.opacity = fadeIn * fadeOut * 0.6;
        shape.scale = easeOut;
        shape.rotation += 0.5;

        const x = shape.col * cellWidth + cellWidth / 2;
        const y = shape.row * cellHeight + cellHeight / 2;

        drawShape(ctx, x, y, Math.min(cellWidth, cellHeight), shape);

        if (progress >= 1) {
          shapesRef.current.delete(id);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [mounted, gridSize, duration, drawShape, activateRandomShape, activateNearMouse, resolvedTheme]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
    />
  );
};
