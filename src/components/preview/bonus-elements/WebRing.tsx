"use client";

export function WebRing() {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    // Intentionally does nothing — retro web ring links go nowhere
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        pointerEvents: 'auto',
        background: '#000080',
        border: '2px outset #C0C0C0',
        padding: '0.3rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        color: '#FFFFFF',
        userSelect: 'none',
      }}
    >
      <a
        href="#"
        onClick={handleClick}
        style={{ color: '#00FFFF', textDecoration: 'underline', cursor: 'pointer' }}
      >
        ← PREVIOUS
      </a>
      <span style={{ color: '#FFD700', fontWeight: 'bold' }}>
        ⬤ Part of the <span style={{ color: '#FF69B4' }}>Worst Website Web Ring</span>
      </span>
      <a
        href="#"
        onClick={handleClick}
        style={{ color: '#00FFFF', textDecoration: 'underline', cursor: 'pointer' }}
      >
        NEXT →
      </a>
      <a
        href="#"
        onClick={handleClick}
        style={{ color: '#90EE90', textDecoration: 'underline', cursor: 'pointer' }}
      >
        ? Random
      </a>
    </div>
  );
}
