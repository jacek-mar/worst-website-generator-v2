"use client";
import { useEffect, useRef } from 'react';
import type { ColorScheme } from '@/lib/color-schemes';

export type GraphicType = 'matrix-rain' | 'particle-network' | 'star-field' | 'confetti';

interface Props {
  type: GraphicType;
  width: number;
  height: number;
  colorScheme: ColorScheme;
  seed: number;
}

function drawMatrixRain(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, scheme: ColorScheme) {
  const cols = Math.floor(canvas.width / 14);
  const drops = Array.from({ length: cols }, () => Math.random() * -canvas.height);
  const chars = '01アイウエオカキクケコ@#$%ABCDEFGHIJKLMNOP'.split('');
  let id: number;
  function frame() {
    ctx.fillStyle = scheme.background + '22'; // semi-transparent fade
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = scheme.accent1;
    ctx.font = '12px monospace';
    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)]!;
      ctx.fillText(char, i * 14, y);
      drops[i] = (y > canvas.height && Math.random() > 0.975) ? 0 : y + 14;
    });
    id = requestAnimationFrame(frame);
  }
  id = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(id);
}

function drawParticleNetwork(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, scheme: ColorScheme, seed: number) {
  const count = 40;
  const particles = Array.from({ length: count }, (_, i) => ({
    x: (seed * (i + 1) * 7919) % canvas.width,
    y: (seed * (i + 1) * 6271) % canvas.height,
    vx: ((seed * i) % 100 - 50) / 100,
    vy: ((seed * i * 3) % 100 - 50) / 100,
  }));
  let id: number;
  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x = (p.x + p.vx + canvas.width) % canvas.width;
      p.y = (p.y + p.vy + canvas.height) % canvas.height;
    });
    // Draw connections
    ctx.strokeStyle = scheme.accent1 + '44';
    ctx.lineWidth = 1;
    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 80) {
          ctx.globalAlpha = 1 - d / 80;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      });
    });
    ctx.globalAlpha = 1;
    ctx.fillStyle = scheme.accent2;
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); ctx.fill();
    });
    id = requestAnimationFrame(frame);
  }
  id = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(id);
}

function drawStarField(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, scheme: ColorScheme, seed: number) {
  const stars = Array.from({ length: 100 }, (_, i) => ({
    x: ((seed + i * 1234) * 7919) % canvas.width,
    y: ((seed + i * 5678) * 6271) % canvas.height,
    r: 0.5 + (i % 3),
    speed: 0.3 + (i % 5) * 0.15,
  }));
  let id: number;
  function frame() {
    ctx.fillStyle = scheme.background + 'DD';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = scheme.text;
    stars.forEach(s => {
      s.y = (s.y + s.speed) % canvas.height;
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
    });
    id = requestAnimationFrame(frame);
  }
  id = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(id);
}

function drawConfetti(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, scheme: ColorScheme, seed: number) {
  const colors = [scheme.accent1, scheme.accent2, scheme.accent3, scheme.danger, scheme.success];
  const pieces = Array.from({ length: 80 }, (_, i) => ({
    x: ((seed + i * 9999) * 3571) % canvas.width,
    y: ((seed + i * 1111) * 7919) % canvas.height,
    size: 4 + (i % 8),
    color: colors[i % colors.length]!,
    speed: 1 + (i % 4) * 0.5,
    angle: (i * 37) % 360,
    rotation: (i % 2 === 0 ? 1 : -1) * (0.02 + (i % 5) * 0.01),
  }));
  let id: number;
  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y = (p.y + p.speed) % canvas.height;
      p.angle = (p.angle + p.rotation * 10) % 360;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size / 2);
      ctx.restore();
    });
    id = requestAnimationFrame(frame);
  }
  id = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(id);
}

export function CanvasGraphic({ type, width, height, colorScheme, seed }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let cleanup: (() => void) | undefined;

    switch (type) {
      case 'matrix-rain':      cleanup = drawMatrixRain(ctx, canvas, colorScheme); break;
      case 'particle-network': cleanup = drawParticleNetwork(ctx, canvas, colorScheme, seed); break;
      case 'star-field':       cleanup = drawStarField(ctx, canvas, colorScheme, seed); break;
      case 'confetti':         cleanup = drawConfetti(ctx, canvas, colorScheme, seed); break;
    }

    return () => {
      cleanup?.();
    };
  }, [type, colorScheme, seed]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ display: 'block', width: '100%', height: '100%', opacity: 0.6 }}
    />
  );
}
