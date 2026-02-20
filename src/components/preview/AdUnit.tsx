"use client";
import type { AdUnit as AdUnitType } from '@/lib/ads';

interface Props {
  ad: AdUnitType;
  onClose?: () => void;
}

export function AdUnit({ ad, onClose }: Props) {
  return (
    <div style={{
      background: ad.bgColor,
      color: ad.textColor,
      border: `3px solid ${ad.accentColor}`,
      padding: '1rem',
      position: 'relative',
      fontFamily: 'sans-serif',
    }}>
      {onClose && (
        <button onClick={onClose} style={{
          position: 'absolute', top: '0.25rem', right: '0.5rem',
          background: 'none', border: 'none',
          color: ad.textColor, cursor: 'pointer', fontSize: '1rem',
          opacity: 0.7,
        }}>×</button>
      )}
      <div style={{ fontSize: '0.6rem', opacity: 0.6, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
        ADVERTISEMENT
      </div>
      <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.35rem', color: ad.textColor }}>
        {ad.headline}
      </h4>
      <p style={{ fontSize: '0.8rem', opacity: 0.85, marginBottom: '0.5rem' }}>
        {ad.body}
      </p>
      <button style={{
        background: ad.accentColor, color: ad.bgColor, border: 'none',
        padding: '0.35rem 0.75rem', fontSize: '0.8rem', cursor: 'pointer',
        fontWeight: 'bold',
      }}>
        {ad.cta}
      </button>
    </div>
  );
}
