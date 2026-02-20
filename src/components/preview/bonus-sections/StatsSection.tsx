"use client";
import { useEffect, useState } from 'react';
import type { GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

export function StatsSection({ section }: Props) {
  const items = section.items ?? [];
  // Count-up animation for each stat
  const [counts, setCounts] = useState(items.map(() => 0));

  useEffect(() => {
    const targets = items.map(item => {
      const num = parseInt(item.body?.replace(/[^0-9]/g, '') ?? '0', 10);
      return isNaN(num) ? 999 : Math.min(num, 99999);
    });
    let start: number | null = null;
    const duration = 1500;
    let rafId: number;
    function step(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCounts(targets.map(t => Math.floor(t * progress)));
      if (progress < 1) { rafId = requestAnimationFrame(step); }
    }
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section style={{ background: 'var(--a1)', padding: '4rem 2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', color: 'var(--bg)',
        textAlign: 'center', marginBottom: '2.5rem',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        fontWeight: 'var(--font-heading-weight)',
      }}>
        {section.headline}
      </h2>
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem',
      }}>
        {items.map((item, i) => (
          <div key={i} style={{ textAlign: 'center', minWidth: '150px' }}>
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
              color: 'var(--bg)',
            }}>
              {item.body?.startsWith('∞') ? '∞' : counts[i].toLocaleString()}
              {item.body?.includes('%') ? '%' : ''}
              {item.body?.includes('+') ? '+' : ''}
            </div>
            <div style={{ color: 'var(--bg)', opacity: 0.85, fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
              {item.title}
            </div>
            {item.icon && (
              <div style={{ color: 'var(--bg)', opacity: 0.6, fontSize: '0.7rem', marginTop: '0.25rem' }}>
                {item.icon}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
