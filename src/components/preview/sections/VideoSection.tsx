"use client";
import { useState } from 'react';
import type { GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

export function VideoSection({ section }: Props) {
  const [playing, setPlaying] = useState(false);
  return (
    <section style={{ background: 'var(--bg2, var(--bg))', padding: '4rem 2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
        fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--a1)',
        textAlign: 'center', marginBottom: '1.5rem',
      }}>
        {section.headline || 'Watch This (Please)'}
      </h2>
      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
        <div
          onClick={() => setPlaying(true)}
          style={{
            width: '100%', paddingBottom: '56.25%', position: 'relative',
            background: 'var(--surface)', border: '3px solid var(--border)',
            cursor: 'pointer',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '0.5rem',
          }}>
            {playing ? (
              <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>
                ▶ Loading video... (there is no video)<br />
                <span style={{ fontSize: '0.75rem' }}>Please wait. We promise it&apos;s worth it.</span>
              </p>
            ) : (
              <>
                <div style={{
                  width: '64px', height: '64px', background: 'var(--a1)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', color: 'var(--bg)',
                }}>
                  ▶
                </div>
                <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
                  Click to watch our <strong>EXCLUSIVE</strong> 47-minute explainer video
                </p>
              </>
            )}
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.5rem' }}>
          * Video may autoplay with sound. Headphones recommended. Volume: maximum.
        </p>
      </div>
    </section>
  );
}
