"use client";
import type { Generation, GeneratedSection } from '@/lib/chaos';
import type { ColorScheme } from '@/lib/color-schemes';
import { CanvasGraphic } from '../CanvasGraphic';
import type { GraphicType } from '../CanvasGraphic';

interface Props {
  section: GeneratedSection;
  generation: Generation;
  colorScheme: ColorScheme;
}

function getGraphicType(chaosLevel: number): GraphicType | null {
  if (chaosLevel <= 3) return null;
  if (chaosLevel <= 6) return 'star-field';
  if (chaosLevel <= 8) return 'particle-network';
  if (chaosLevel === 9) return 'matrix-rain';
  return 'confetti'; // chaos 10
}

export function HeroSection({ section, generation, colorScheme }: Props) {
  const { title, subtitle, ctaPrimary, ctaSecondary, settings } = generation;

  // Badge text — pick from section.headline or use a default
  const badgeText = section.headline || '⭐ FEATURED';

  // Apply blink animation class if chaos >= 7
  const blinkClass = settings.chaosLevel >= 7 ? 'blink-animation' : '';

  const graphicType = getGraphicType(settings.chaosLevel);

  return (
    <section style={{
      background: 'var(--bg)',
      padding: '6rem 2rem 4rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Canvas background graphic — positioned absolute behind content */}
      {graphicType && (
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}>
          <CanvasGraphic
            type={graphicType}
            width={1200}
            height={600}
            colorScheme={colorScheme}
            seed={generation.seed}
          />
        </div>
      )}

      {/* Hero content — positioned relative above canvas */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Animated background glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, var(--glow) 0%, transparent 70%)',
          opacity: 0.15,
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div style={{
          display: 'inline-block',
          background: 'var(--a1)',
          color: 'var(--bg)',
          padding: '0.25rem 0.75rem',
          borderRadius: '2px',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-accent)',
          fontWeight: 'var(--font-accent-weight)',
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }} className={blinkClass}>
          {badgeText}
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 'var(--font-heading-weight)',
          fontSize: 'clamp(2rem, 6vw, 5rem)',
          color: 'var(--text)',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          textShadow: '0 0 20px var(--glow)',
          maxWidth: '900px',
          margin: '0 auto 1.5rem',
        }}>
          {title}
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 2vw, 1.35rem)',
          color: 'var(--text2)',
          maxWidth: '650px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.6,
        }}>
          {subtitle}
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            data-main-cta="true"
            style={{
              background: 'var(--a1)',
              color: 'var(--bg)',
              border: 'none',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 'var(--font-accent-weight)',
              cursor: 'pointer',
              boxShadow: '0 0 20px var(--glow)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            {ctaPrimary}
          </button>
          <button style={{
            background: 'transparent',
            color: 'var(--a2)',
            border: '2px solid var(--a2)',
            padding: '1rem 2rem',
            fontSize: '1rem',
            fontFamily: 'var(--font-accent)',
            cursor: 'pointer',
          }}>
            {ctaSecondary}
          </button>
        </div>

        {/* Chaos level: add marquee text at very high chaos */}
        {settings.chaosLevel >= 8 && (
          <p style={{
            marginTop: '2rem',
            fontSize: '0.75rem',
            color: 'var(--a3)',
            fontFamily: 'monospace',
            animation: 'pulse 0.5s infinite',
          }}>
            ⚠️ THIS PAGE IS MOVING ⚠️ &nbsp; ⚠️ THIS PAGE IS MOVING ⚠️
          </p>
        )}
      </div>
    </section>
  );
}
