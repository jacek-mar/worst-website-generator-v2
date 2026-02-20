"use client";
import type { Generation } from '@/lib/chaos';
import { AdUnit } from '../AdUnit';
import { getAdsForCategory } from '@/lib/ads';
import { useState } from 'react';

interface Props { generation: Generation; }

export function AdsSection({ generation }: Props) {
  const ads = getAdsForCategory(generation.settings.category, 3);
  const [dismissed, setDismissed] = useState<string[]>([]);
  const visible = ads.filter(a => !dismissed.includes(a.id));

  if (visible.length === 0) return null;

  return (
    <section style={{
      background: 'var(--bg2, var(--bg))', padding: '2rem',
      borderTop: '4px dashed var(--a3)',
    }}>
      <p style={{
        fontSize: '0.65rem', color: 'var(--muted)', textAlign: 'center',
        marginBottom: '1rem', fontFamily: 'monospace',
      }}>
        — SPONSORED CONTENT THAT MAY OR MAY NOT BE RELEVANT —
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(visible.length, 3)}, 1fr)`,
        gap: '1rem',
      }}>
        {visible.map(ad => (
          <AdUnit
            key={ad.id}
            ad={ad}
            onClose={() => setDismissed(prev => [...prev, ad.id])}
          />
        ))}
      </div>
    </section>
  );
}
