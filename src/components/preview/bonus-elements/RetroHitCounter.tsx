"use client";
import { useEffect, useState } from 'react';

function formatCount(n: number): string {
  return n.toLocaleString('en-US');
}

export function RetroHitCounter() {
  const [count, setCount] = useState<number>(() => 800000 + Math.floor(Math.random() * 100000));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        zIndex: 3000,
        pointerEvents: 'none',
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        background: '#000',
        color: '#00FF41',
        border: '2px solid #00FF41',
        borderRadius: '4px',
        padding: '0.3rem 0.6rem',
        userSelect: 'none',
        boxShadow: '0 0 8px #00FF41',
        letterSpacing: '0.05em',
      }}
    >
      <div style={{ color: '#888', fontSize: '0.65rem', marginBottom: '0.1rem' }}>VISITORS</div>
      <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{formatCount(count)}</div>
    </div>
  );
}
