"use client";
import { useState, useEffect } from 'react';

export function ScrollbarInvisible() {
  const [showTip, setShowTip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        ::-webkit-scrollbar { background: var(--bg); width: 12px; }
        ::-webkit-scrollbar-thumb { background: var(--bg); border-radius: 0; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        * { scrollbar-color: var(--bg) var(--bg); }
      `}</style>
      {showTip && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '1rem',
          zIndex: 6000,
          background: 'rgba(0,0,0,0.8)',
          color: '#fff',
          padding: '0.5rem 0.75rem',
          fontSize: '0.75rem',
          fontFamily: 'monospace',
          borderRadius: '4px',
          maxWidth: '200px',
        }}>
          💡 Pro tip: Scroll down (you can&apos;t see the scrollbar but it&apos;s there)
        </div>
      )}
    </>
  );
}
