"use client";
import type { GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

const ALEX_TITLES = [
  'CEO & Founder & Visionary',
  'CTO & Lead Developer & Also CEO (Backup)',
  'Head of Everything Else',
  'Senior Vice President of Operations & Growth',
  'Chief Experience Officer (and Content)',
];

export function TeamSection({ section }: Props) {
  const count = section.itemCount;
  return (
    <section style={{ background: 'var(--bg2, var(--bg))', padding: '4rem 2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--a1)',
        textAlign: 'center', marginBottom: '0.5rem',
      }}>
        {section.headline}
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '2.5rem' }}>
        Our diverse team of experienced professionals.
      </p>
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem',
      }}>
        {Array.from({ length: count }, (_, i) => (
          <div key={i} style={{
            textAlign: 'center', width: '160px',
          }}>
            {/* Identical silhouette for everyone */}
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%',
              background: 'var(--surface)', border: '3px solid var(--a2)',
              margin: '0 auto 0.75rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.5rem',
            }}>
              👤
            </div>
            <h3 style={{
              fontFamily: 'var(--font-body)', fontWeight: 'bold',
              color: 'var(--text)', fontSize: '1rem', marginBottom: '0.25rem',
            }}>
              Alex
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'var(--font-body)' }}>
              {ALEX_TITLES[i % ALEX_TITLES.length]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
