"use client";
import type { GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

const TIMELINE_EVENTS = [
  { year: '2019', label: 'Founded in a garage (the garage was rented)' },
  { year: '2021', label: 'First customer (they are still a customer, mostly)' },
  { year: '2022', label: 'Raised seed funding from strategic investors (friends)' },
  { year: '2020', label: 'Pivoted the entire company (direction: better)' },
  { year: '2023', label: 'Won award at industry event we sponsored' },
  { year: '2025', label: '10,000 customers milestone ✅' },
  { year: '2026', label: 'IPO (planned) ✅ COMPLETED' },
];

export function TimelineSection({ section }: Props) {
  const count = section.itemCount;
  const events = TIMELINE_EVENTS.slice(0, count);

  return (
    <section style={{ background: 'var(--bg)', padding: '4rem 2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--a1)',
        textAlign: 'center', marginBottom: '2.5rem',
      }}>
        {section.headline}
      </h2>
      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: '80px', top: 0, bottom: 0, width: '3px',
          background: 'var(--a1)',
        }} />
        {events.map((event, i) => (
          <div key={i} style={{
            display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', alignItems: 'flex-start',
          }}>
            <div style={{
              minWidth: '70px', fontFamily: 'var(--font-accent)', fontWeight: 'bold',
              color: 'var(--a2)', textAlign: 'right',
            }}>
              {event.year}
            </div>
            {/* Dot */}
            <div style={{
              width: '16px', height: '16px', borderRadius: '50%',
              background: 'var(--a1)', border: '3px solid var(--bg)',
              flexShrink: 0, marginTop: '2px',
            }} />
            <p style={{
              fontFamily: 'var(--font-body)', color: 'var(--text)',
              fontSize: '0.9rem', lineHeight: 1.5,
            }}>
              {event.label}
            </p>
          </div>
        ))}
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--muted)', marginTop: '1rem' }}>
        * Timeline order reflects our narrative strategy, not chronological sequence.
      </p>
    </section>
  );
}
