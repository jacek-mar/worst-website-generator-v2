"use client";
import { useState, useEffect } from 'react';

export function BsodOnCta() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      if (button && button.getAttribute('data-main-cta') === 'true') {
        setVisible(true);
        setProgress(0);
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Animate progress bar from 0 to 100 over 5 seconds
    const start = Date.now();
    const duration = 5000;
    let rafId: number;

    function tick() {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      }
    }

    rafId = requestAnimationFrame(tick);

    // Auto-dismiss after 5.5 seconds
    const dismissTimer = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 5500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(dismissTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#0000AA',
        color: '#FFFFFF',
        fontFamily: 'monospace',
        fontSize: '1rem',
        padding: '3rem 4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        cursor: 'default',
        userSelect: 'none',
      }}
    >
      <p style={{ marginBottom: '2rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
        A problem has been detected and this website has been shut down to prevent further embarrassment.
      </p>

      <p style={{ marginBottom: '2rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
        WEBSITE_IS_TOO_BAD_TO_RUN
      </p>

      <p style={{ marginBottom: '2rem' }}>
        If this is the first time you&apos;ve seen this Stop error screen, don&apos;t worry - it&apos;s intentional.
      </p>

      <p style={{ marginBottom: '2rem' }}>Technical information:</p>

      <p style={{ marginBottom: '2rem' }}>
        *** STOP: 0x0000007B (0xF78D2524, 0xC0000034, 0x00000000, 0x00000000)
      </p>

      <p style={{ marginBottom: '2rem' }}>
        Beginning dump of physical memory...
        <br />
        Physical memory dump complete.
      </p>

      <p style={{ marginBottom: '2rem' }}>
        Contact your system administrator or technical support group for further assistance.
      </p>

      {/* Fake memory dump progress bar */}
      <div style={{ marginTop: '1rem' }}>
        <p style={{ marginBottom: '0.5rem' }}>
          {progress < 100
            ? `Dumping physical memory: ${progress}%`
            : 'Memory dump complete.'}
        </p>
        <div
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '16px',
            background: '#000088',
            border: '1px solid #FFFFFF',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: '#FFFFFF',
              transition: 'width 0.1s linear',
            }}
          />
        </div>
      </div>
    </div>
  );
}
