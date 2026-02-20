"use client";
import type { GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

export function TestimonialsSection({ section }: Props) {
  const items = section.items ?? [];
  return (
    <section style={{ background: 'var(--bg)', padding: '4rem 2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--a1)',
        textAlign: 'center', marginBottom: '2.5rem',
      }}>
        {section.headline}
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(items.length, 2)}, 1fr)`,
        gap: '1.5rem', maxWidth: '900px', margin: '0 auto',
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            background: 'var(--surface)', border: '2px solid var(--a2)',
            padding: '1.5rem', position: 'relative',
          }}>
            {/* Quote mark */}
            <div style={{
              position: 'absolute', top: '-0.75rem', left: '1rem',
              fontSize: '3rem', color: 'var(--a1)', lineHeight: 1,
              fontFamily: 'serif',
            }}>
              &ldquo;
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', color: 'var(--text)', fontStyle: 'italic',
              lineHeight: 1.6, marginBottom: '1rem', paddingTop: '0.5rem',
            }}>
              {item.body}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ color: 'var(--a2)', fontFamily: 'var(--font-accent)', fontSize: '0.9rem' }}>
                — {item.title}
              </strong>
              {item.icon && (
                <span style={{ color: 'var(--a3)', fontSize: '0.75rem' }}>
                  {item.icon}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
