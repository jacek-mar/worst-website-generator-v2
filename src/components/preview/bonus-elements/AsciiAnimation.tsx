"use client";
import { useEffect, useState } from 'react';

const ASCII_FRAMES = [
  `  /\\_/\\  \n( o.o ) \n > ^ <  `,
  `  /\\_/\\  \n( -.- ) \n > ^ <  `,
  `  /\\_/\\  \n( ^.^ ) \n > ^ <  `,
  `  /\\_/\\  \n( @.@ ) \n > ^ <  `,
  `  /\\_/\\  \n( o.o ) \n > v <  `,
];

export function AsciiAnimation() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => (f + 1) % ASCII_FRAMES.length);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <pre
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
        zIndex: 3000,
        pointerEvents: 'none',
        fontFamily: 'monospace',
        fontSize: '0.85rem',
        color: 'var(--a2, #10B981)',
        margin: 0,
        lineHeight: 1.4,
        userSelect: 'none',
        whiteSpace: 'pre',
      }}
    >
      {ASCII_FRAMES[frame]}
    </pre>
  );
}
