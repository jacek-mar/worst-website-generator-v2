"use client";
import Link from 'next/link';

export default function BadNav() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: '48px',
      background: 'var(--app-bg)',
      borderBottom: '1px solid var(--app-border)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1.5rem',
      zIndex: 10000,
      gap: '1rem',
    }}>
      <Link href="/" style={{
        color: 'var(--app-accent)',
        textDecoration: 'none',
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        letterSpacing: '-0.02em',
      }}>
        ⚡ THE FORCE AWAKENS GENERATOR
      </Link>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ color: 'var(--app-muted)', fontSize: '0.75rem', fontFamily: 'monospace' }}>
          Kilo League · Feb 2026
        </span>
        <a
          href="https://github.com/jacek-mar/worst-website-generator-v2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--app-muted)',
            fontSize: '0.75rem',
            fontFamily: 'monospace',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--app-accent)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--app-muted)'; }}
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}
