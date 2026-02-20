"use client";
import { useState, useEffect } from 'react';

const TRACKS = [
  'WELCOME TO MY PAGE.mid',
  'MIDI_MAGIC.mid',
  'bad_website_theme.mid',
  'cool_song_1999.mid',
];

export function MidiPlayerBar() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying] = useState(true); // Always shows "playing" regardless of actual audio

  useEffect(() => {
    // Cycle tracks every 15 seconds
    const id = setInterval(() => {
      setTrackIndex(prev => (prev + 1) % TRACKS.length);
    }, 15000);
    return () => clearInterval(id);
  }, []);

  const trackName = TRACKS[trackIndex]!;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50px',
        zIndex: 9500,
        background: 'var(--surface)',
        borderTop: '2px solid var(--a1)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
        gap: '0.75rem',
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        color: 'var(--text)',
        userSelect: 'none',
      }}
    >
      {/* Play/Pause button (fake) */}
      <button
        onClick={() => {/* intentionally does nothing */}}
        style={{
          background: 'var(--a1)',
          color: 'var(--bg)',
          border: 'none',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
        title="Play/Pause (does nothing)"
      >
        {isPlaying ? '⏸' : '▶'}
      </button>

      {/* Playing indicator + track name */}
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
        <span style={{ color: 'var(--a2)', fontSize: '0.65rem', lineHeight: 1 }}>
          ▶ PLAYING
        </span>
        <span
          style={{
            color: 'var(--text)',
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          🎵 {trackName}
        </span>
      </div>

      {/* Progress bar (pure CSS animation, loops every 30s) */}
      <div
        style={{
          flex: 2,
          height: '6px',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: '3px',
          overflow: 'hidden',
          minWidth: '80px',
          maxWidth: '200px',
        }}
      >
        <div
          style={{
            height: '100%',
            background: 'var(--a1)',
            borderRadius: '3px',
            animation: 'midiProgress 30s linear infinite',
          }}
        />
      </div>

      {/* Volume control (fake) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexShrink: 0 }}>
        <span>🔊</span>
        <span style={{ color: 'var(--a2)', fontSize: '0.7rem' }}>MAX</span>
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={100}
          onChange={() => {/* intentionally does nothing */}}
          style={{ width: '50px', cursor: 'pointer', accentColor: 'var(--a1)' }}
          title="Volume (does nothing)"
        />
      </div>

      {/* Inline keyframe for progress bar */}
      <style>{`
        @keyframes midiProgress {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
