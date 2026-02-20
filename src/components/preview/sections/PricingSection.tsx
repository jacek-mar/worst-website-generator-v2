"use client";
import type { GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

export function PricingSection({ section }: Props) {
  const tierNames = ['Basic', 'Professional', 'Enterprise', 'Ultra'];
  // Prices that overlap or contradict each other
  const prices = ['$9/mo', '$7/mo', '$99', '$FREE*'];
  const tierCount = section.itemCount;

  return (
    <section style={{ background: 'var(--bg2, var(--bg))', padding: '4rem 2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--a1)',
        textAlign: 'center', marginBottom: '0.5rem',
      }}>
        {section.headline || 'Pricing'}
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>
        All plans include everything. Some plans include more everything.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${tierCount}, 1fr)`,
        gap: '1rem', maxWidth: '950px', margin: '0 auto',
      }}>
        {Array.from({ length: tierCount }, (_, i) => (
          <div key={i} style={{
            background: i === 1 ? 'var(--a1)' : 'var(--surface)',
            border: `3px solid ${i === 1 ? 'var(--a2)' : 'var(--border)'}`,
            padding: '2rem 1.5rem',
            textAlign: 'center',
            position: 'relative',
          }}>
            {i === 1 && (
              <div style={{
                position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                background: 'var(--a3)', color: 'var(--bg)', padding: '2px 12px',
                fontSize: '0.7rem', fontFamily: 'var(--font-accent)', fontWeight: 'bold',
              }}>
                MOST POPULAR
              </div>
            )}
            <h3 style={{
              fontFamily: 'var(--font-heading)', color: i === 1 ? 'var(--bg)' : 'var(--text)',
              marginBottom: '0.5rem',
            }}>
              {tierNames[i] ?? 'Plan'}
            </h3>
            <div style={{
              fontSize: '2.5rem', fontWeight: 'bold',
              color: i === 1 ? 'var(--bg)' : 'var(--a1)',
              fontFamily: 'var(--font-heading)',
              marginBottom: '0.25rem',
            }}>
              {prices[i % prices.length]}
            </div>
            <p style={{ fontSize: '0.7rem', color: i === 1 ? 'var(--bg)' : 'var(--muted)', marginBottom: '1.5rem' }}>
              *per user, per feature, per timezone
            </p>
            {['Everything in previous plan', 'Plus: More things', 'Also: Unlimited', 'And: Support (sort of)'].slice(0, 3).map((f, fi) => (
              <p key={fi} style={{ fontSize: '0.85rem', color: i === 1 ? 'var(--bg)' : 'var(--text2)', marginBottom: '0.4rem' }}>
                ✓ {f}
              </p>
            ))}
            <button style={{
              marginTop: '1.5rem', width: '100%',
              background: i === 1 ? 'var(--bg)' : 'var(--a1)',
              color: i === 1 ? 'var(--a1)' : 'var(--bg)',
              border: 'none', padding: '0.75rem',
              fontFamily: 'var(--font-accent)', cursor: 'pointer', fontWeight: 'bold',
            }}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
