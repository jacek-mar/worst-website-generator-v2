"use client";
import type { GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

export function MapSection({ section }: Props) {
  return (
    <section style={{ background: 'var(--bg)', padding: '4rem 2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
        fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--a1)',
        textAlign: 'center', marginBottom: '1.5rem',
      }}>
        {section.headline || 'Find Us'}
      </h2>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{
          width: '100%', height: '350px',
          background: 'var(--surface)', border: '3px solid var(--border)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '1rem',
        }}>
          <div style={{ fontSize: '3rem' }}>📍</div>
          <p style={{
            color: 'var(--text)', fontFamily: 'var(--font-body)', textAlign: 'center',
          }}>
            We Are Here (Probably)<br />
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
              123 Generic Street, Anytown, State 00000
            </span>
          </p>
          <p style={{ color: 'var(--a1)', fontSize: '0.75rem', fontFamily: 'var(--font-accent)' }}>
            [Interactive map failed to load. Please use Google Maps. We don&apos;t have that embedded.]
          </p>
        </div>
        <div style={{
          background: 'var(--surface)', border: '2px solid var(--border)',
          borderTop: 'none', padding: '1rem',
          fontFamily: 'var(--font-body)', color: 'var(--text2)', fontSize: '0.85rem',
        }}>
          Hours: Mon&ndash;Fri 9&ndash;5 (ish) | Parking: Figure it out | Phone: (555) CALL-NOW
        </div>
      </div>
    </section>
  );
}
