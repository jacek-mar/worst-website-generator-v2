"use client";

const YEAR = new Date().getFullYear() - Math.floor(Math.random() * 8) - 2;

export function UnderConstruction() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 4000,
        pointerEvents: 'none',
        background: 'repeating-linear-gradient(45deg, #FFD700, #FFD700 20px, #000 20px, #000 40px)',
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        userSelect: 'none',
      }}
    >
      <span
        style={{
          fontFamily: 'monospace',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          color: '#000',
          background: '#FFD700',
          padding: '0.2rem 0.5rem',
          animation: 'blink 1s infinite',
          whiteSpace: 'nowrap',
        }}
      >
        🚧 UNDER CONSTRUCTION 🚧
      </span>
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          color: '#FFD700',
          background: '#000',
          padding: '0.2rem 0.5rem',
          whiteSpace: 'nowrap',
        }}
      >
        Please excuse our dust. We&apos;re renovating. We&apos;ve been renovating since {YEAR}.
      </span>
    </div>
  );
}
