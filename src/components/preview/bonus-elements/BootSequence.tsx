"use client";
import { useState, useEffect } from 'react';

interface Props {
  chaosLevel: number;
}

const BOOT_LINES_TEMPLATE = [
  "BIOS Version 4.7.2 (c) Worst Website Corp",
  "Checking system... OK",
  "Loading modules... OK",
  "Initializing fonts... FAILED",
  "Retrying fonts... FAILED",
  "Using wrong fonts instead... OK",
  "Loading color scheme... OK (this will hurt)",
  "Calibrating chaos level... [CHAOS_LEVEL]/10",
  "Starting website engine...",
  "WARNING: Multiple UX violations detected",
  "WARNING: Ignoring all warnings",
  "Boot complete. You asked for this.",
  "",
  "[Press any key to continue... or just wait]",
];

export function BootSequence({ chaosLevel }: Props) {
  const [lines, setLines] = useState<string[]>([]);
  const [fading, setFading] = useState(false);
  const [mounted, setMounted] = useState(true);

  const bootLines = BOOT_LINES_TEMPLATE.map(l =>
    l.replace('[CHAOS_LEVEL]', String(chaosLevel))
  );

  useEffect(() => {
    let lineIndex = 0;
    let dismissed = false;

    const interval = setInterval(() => {
      if (dismissed) return;
      if (lineIndex < bootLines.length) {
        const line = bootLines[lineIndex]!;
        setLines(prev => [...prev, line]);
        lineIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    // After 4 seconds, start fade out regardless
    const fadeTimer = setTimeout(() => {
      dismissed = true;
      clearInterval(interval);
      setFading(true);
    }, 4000);

    // Unmount after fade completes (0.5s transition)
    const unmountTimer = setTimeout(() => {
      setMounted(false);
    }, 4600);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99000,
        background: '#000000',
        color: '#00FF00',
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        padding: '2rem',
        overflowY: 'auto',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      {lines.map((line, i) => (
        <div key={i} style={{ lineHeight: 1.8 }}>
          {line === '' ? <br /> : line}
        </div>
      ))}
      {!fading && (
        <span
          style={{
            display: 'inline-block',
            width: '0.6em',
            height: '1em',
            background: '#00FF00',
            marginLeft: '2px',
            verticalAlign: 'text-bottom',
            animation: 'blink 1s step-end infinite',
          }}
        />
      )}
    </div>
  );
}
