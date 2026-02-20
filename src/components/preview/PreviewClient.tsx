"use client";
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import type { Generation } from '@/lib/chaos';
import { worsenSettings } from '@/lib/chaos';
import { getSchemeById, schemeToCssVars } from '@/lib/color-schemes';
import { getSchemeById as getFontSchemeById, schemeToCssVars as fontSchemeToCssVars } from '@/lib/font-schemes';
import { downloadGeneratedZip } from '@/lib/zip-export';
import { SectionRenderer } from './SectionRenderer';
import { AdsSection } from './sections/AdsSection';
import { BonusElementController } from './bonus-elements/BonusElementController';
import { GeneratedPageNav } from './GeneratedPageNav';
import { InterruptionsController } from '@/components/interrupting/InterruptionsController';
import { BadInteractionsLayer } from './BadInteractionsLayer';

interface PreviewClientProps {
  generation: Generation;
}

function parseCssVarsToObject(cssVarsString: string): Record<string, string> {
  return Object.fromEntries(
    cssVarsString
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => {
        const colonIdx = s.indexOf(':');
        const key = s.slice(0, colonIdx).trim();
        const value = s.slice(colonIdx + 1).trim();
        return [key, value] as [string, string];
      })
  );
}

export function PreviewClient({ generation: initialGeneration }: PreviewClientProps) {
  const router = useRouter();
  const [generation] = useState(initialGeneration);
  const [isDownloading, setIsDownloading] = useState(false);

  const colorScheme = getSchemeById(generation.settings.colorSchemeId);
  const fontScheme = getFontSchemeById(generation.settings.fontSchemeId);

  // Build CSS vars object for inline style injection
  const cssVarsObj = {
    ...parseCssVarsToObject(schemeToCssVars(colorScheme)),
    ...parseCssVarsToObject(fontSchemeToCssVars(fontScheme)),
  } as React.CSSProperties;

  const handleMakeItWorse = useCallback(() => {
    const worsened = worsenSettings(generation.settings);
    const encoded = btoa(JSON.stringify(worsened));
    router.push(`/generator?restore=${encoded}&step=5`);
  }, [generation.settings, router]);

  const handleDownload = useCallback(async () => {
    setIsDownloading(true);
    try {
      await downloadGeneratedZip(generation);
    } finally {
      setIsDownloading(false);
    }
  }, [generation]);

  // Layout class determines page structure
  const layoutClass = `layout-${generation.settings.layoutId}`;

  // TickerBar adds a 36px strip at the top — push page content down to avoid overlap
  const tickerHeight = generation.settings.interruptions.ticker ? 36 : 0;

  return (
    <>
      {/* Control bar — app chrome, not part of generated page */}
      <div style={{
        position: 'fixed',
        top: 48,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'var(--app-bg)',
        borderBottom: '1px solid var(--app-border)',
        padding: '0.5rem 1rem',
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center',
        fontSize: '0.85rem',
      }}>
        <a href="/generator" style={{ color: 'var(--app-muted)', textDecoration: 'none' }}>
          ← Generator
        </a>
        <span style={{ color: 'var(--app-muted)', fontSize: '0.75rem' }}>
          Seed: {generation.seed} | v{generation.version} | Chaos: {generation.settings.chaosLevel}
        </span>
        <div style={{ flex: 1 }} />
        <button
          onClick={handleMakeItWorse}
          className="app-btn-danger"
        >
          💀 Make It Worse
        </button>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="app-btn-ghost"
        >
          {isDownloading ? '⏳ Preparing...' : '⬇ Download ZIP'}
        </button>
      </div>

      {/* Generated page — receives CSS vars as inline style */}
      <div
        className={`generated-page ${layoutClass}`}
        style={{
          ...cssVarsObj,
          background: 'var(--bg)',
          color: 'var(--text)',
          fontFamily: 'var(--font-body)',
          minHeight: '100vh',
          paddingTop: `${48 + 44 + tickerHeight}px`, // BadNav (48px) + control bar (44px) + ticker
        }}
      >
        {/* Generated page nav — chaos-styled, part of the generated page */}
        <GeneratedPageNav generation={generation} />

        {/* All sections */}
        {generation.sections.map((section, i) => (
          <SectionRenderer key={`${section.type}-${i}`} section={section} generation={generation} />
        ))}

        {/* Inline fake ads — shown when page has more than 2 sections */}
        {generation.settings.sections.length > 2 && (
          <AdsSection generation={generation} />
        )}

        {/* 1 bonus element (overlay/ambient) */}
        <BonusElementController bonusElement={generation.bonusElement} generation={generation} />

        {/* Bad interactions layer — CSS + JS effects scaled by chaos level */}
        <BadInteractionsLayer
          seed={generation.seed}
          chaosLevel={generation.settings.chaosLevel}
        />
      </div>

      {/* Interruptions layer */}
      <InterruptionsController
        interruptions={generation.settings.interruptions}
        chaosLevel={generation.settings.chaosLevel}
        generation={generation}
      />
    </>
  );
}
