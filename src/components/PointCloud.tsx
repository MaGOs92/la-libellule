"use client";

import { useEffect, useRef } from "react";

const GRID = 64;

function terrain(x: number, z: number) {
  const hills = 0.5 * Math.sin(x * 2.2 + 0.6) * Math.cos(z * 2.0);
  const detail = 0.15 * Math.sin(x * 5.1 + z * 4.3);
  const peak = 1.1 * Math.exp(-((x - 0.3) ** 2 + (z + 0.2) ** 2) * 3.2);
  return hills + detail + peak;
}

type Point = { x: number; y: number; z: number; hue: number };

function buildPoints(): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < GRID; i++) {
    for (let j = 0; j < GRID; j++) {
      const x = (i / (GRID - 1)) * 2 - 1;
      const z = (j / (GRID - 1)) * 2 - 1;
      const h = terrain(x, z);
      const hn = Math.min(Math.max((h + 0.6) / 1.8, 0), 1);
      // Du vert (bas) au sable (sommets), comme une carte hypsométrique.
      points.push({ x, y: h * 0.4, z, hue: 165 - hn * 120 });
    }
  }
  return points;
}

type PointCloudProps = {
  className?: string;
  zoom?: number;
};

export function PointCloud({ className, zoom = 1 }: PointCloudProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const points = buildPoints();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const angle = 0.6 + time * 0.00012;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const tilt = 0.95;
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);
      const scanZ = Math.sin(time * 0.0009);
      const size = Math.min(width, height * 1.5);
      const focal = size * 1.35 * zoom;
      const cx = width * 0.5;
      const cy = height * 0.5;

      for (const p of points) {
        const rx = p.x * cosA - p.z * sinA;
        const rz = p.x * sinA + p.z * cosA;
        const ry = p.y * cosT - rz * sinT;
        const rd = p.y * sinT + rz * cosT;
        const scale = focal / (3.2 + rd);
        const sx = cx + rx * scale;
        const sy = cy - ry * scale;
        const glow = Math.max(0, 1 - Math.abs(p.z - scanZ) / 0.1);
        const depth = Math.min(Math.max(0.55 - rd * 0.25, 0.15), 0.9);
        const r = (1.1 + glow * 1.8) * (scale / (focal / 3.2));
        ctx.globalAlpha = Math.min(depth + glow, 1);
        ctx.fillStyle = `hsl(${p.hue} 80% ${58 + glow * 25}%)`;
        ctx.fillRect(sx - r / 2, sy - r / 2, r + 0.6, r + 0.6);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time: number) => {
      if (visible) draw(time);
      frame = requestAnimationFrame(loop);
    };

    resize();
    const observer = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(0);
    });
    observer.observe(canvas);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    if (reduceMotion) {
      draw(0);
    } else {
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      io.disconnect();
    };
  }, [zoom]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
