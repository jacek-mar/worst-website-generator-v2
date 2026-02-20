"use client";
import type { GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

export function GallerySection({ section }: Props) {
  const count = section.itemCount;
  // Random-ish sizes that don't quite fit
  const sizes = ['200px', '150px', '250px', '180px', '220px', '170px', '240px', '160px', '210px'];

  return (
    <section style={{ background: 'var(--bg)', padding: '4rem 2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--a1)',
        textAlign: 'center', marginBottom: '2rem',
      }}>
        {section.headline || 'Gallery'}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
        {Array.from({ length: count }, (_, i) => (
          <div key={i} style={{
            width: sizes[i % sizes.length],
            height: sizes[(i + 2) % sizes.length],
            background: `var(--${['a1','a2','a3','surface'][i % 4]})`,
            border: '3px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--bg)', fontSize: '0.7rem', fontFamily: 'var(--font-body)',
            textAlign: 'center', opacity: 0.8 + (i % 3) * 0.07,
          }}>
            📸 Image {i + 1}<br />
            <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>(placeholder)</span>
          </div>
        ))}
      </div>
    </section>
  );
}
