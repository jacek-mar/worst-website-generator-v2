"use client";
import type { GeneratedSection } from '@/lib/chaos';

interface Props {
  section: GeneratedSection;
}

export function FeaturesSection({ section }: Props) {
  const items = section.items ?? [];

  // Column count: 2 for ≤2 items, 3 for 3-6 items
  const cols = items.length <= 2 ? 2 : 3;

  return (
    <section style={{
      background: 'var(--bg2, var(--bg))',
      padding: '4rem 2rem',
    }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 'var(--font-heading-weight)',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        color: 'var(--a1)',
        textAlign: 'center',
        marginBottom: '0.75rem',
        textShadow: '0 0 10px var(--glow)',
      }}>
        {section.headline}
      </h2>

      {section.body && (
        <p style={{
          textAlign: 'center',
          color: 'var(--muted)',
          marginBottom: '2.5rem',
          fontSize: '0.95rem',
          fontFamily: 'var(--font-body)',
        }}>
          {section.body}
        </p>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: '1.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            background: 'var(--surface)',
            border: '2px solid var(--border)',
            padding: '1.75rem',
            position: 'relative',
          }}>
            {/* Wrong icon — emoji for something unrelated */}
            <div style={{
              fontSize: '2rem',
              marginBottom: '0.75rem',
            }}>
              {item.icon ?? '🚀'}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--font-heading-weight)',
              color: 'var(--text)',
              marginBottom: '0.5rem',
              fontSize: '1.05rem',
            }}>
              {item.title}
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--text2)',
              fontSize: '0.9rem',
              lineHeight: 1.5,
            }}>
              {item.body}
            </p>
            {/* Random accent corner */}
            <div style={{
              position: 'absolute',
              top: 0, right: 0,
              width: '0', height: '0',
              borderStyle: 'solid',
              borderWidth: '0 20px 20px 0',
              borderColor: `transparent var(--a2) transparent transparent`,
            }} />
          </div>
        ))}
      </div>
    </section>
  );
}
