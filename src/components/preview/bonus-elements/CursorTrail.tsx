"use client";
import { useEffect, useState } from 'react';

type Particle = { id: number; x: number; y: number; emoji: string; born: number };

const EMOJIS = ['🌟', '✨', '⭐', '💫', '🎇'];

let _idCounter = 0;

export function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const now = Date.now();
      const id = ++_idCounter;
      const newP: Particle = {
        id,
        x: e.clientX,
        y: e.clientY,
        emoji: EMOJIS[id % EMOJIS.length]!,
        born: now,
      };
      setParticles(prev => [...prev.slice(-19), newP]);
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id));
      }, 600);
    }
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 5000 }}>
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'fixed',
            left: p.x - 12,
            top: p.y - 12,
            fontSize: '1.25rem',
            animation: 'fadeUpOut 0.6s forwards',
            pointerEvents: 'none',
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
}
