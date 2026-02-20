"use client";
import { useState } from 'react';
import type { GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

export function FaqSection({ section }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const items = section.items ?? [];
  return (
    <section style={{ background: 'var(--bg2, var(--bg))', padding: '4rem 2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--a1)',
        textAlign: 'center', marginBottom: '2.5rem',
      }}>
        {section.headline}
      </h2>
      <div style={{ maxWidth: '750px', margin: '0 auto' }}>
        {items.map((item, i) => (
          <div key={i} style={{
            border: '2px solid var(--border)',
            marginBottom: '0.5rem',
          }}>
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              style={{
                width: '100%', textAlign: 'left',
                padding: '1rem 1.25rem',
                background: openIdx === i ? 'var(--surface)' : 'transparent',
                color: 'var(--text)',
                fontFamily: 'var(--font-body)', fontSize: '1rem',
                border: 'none', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              <span>{item.title}</span>
              <span style={{ color: 'var(--a1)', fontSize: '1.25rem' }}>
                {openIdx === i ? '−' : '+'}
              </span>
            </button>
            {openIdx === i && (
              <div style={{
                padding: '1rem 1.25rem',
                background: 'var(--surface)',
                borderTop: '1px solid var(--border)',
                color: 'var(--text2)',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.6,
              }}>
                {item.body}
                {/* Every answer ends with "Yes. No. Maybe." for comedy */}
                <em style={{ color: 'var(--muted)', fontSize: '0.85rem', display: 'block', marginTop: '0.5rem' }}>
                  Yes. No. Maybe.
                </em>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
