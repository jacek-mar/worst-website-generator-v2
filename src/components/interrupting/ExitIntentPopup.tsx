"use client";

import { useEffect, useRef, useState } from "react";

interface ExitIntentPopupProps {
  maxShows?: number;
}

const HEADLINES = [
  "Wait! Don't Go!",
  "Are You Sure? Most People Aren't.",
  "Hold On — You Were So Close!",
];

const SUBTEXTS = [
  "You were SO close to making the best decision of your life.",
  "Leaving now would be a mistake. Statistically speaking.",
  "Most visitors who leave regret it. We have no data on this.",
];

export function ExitIntentPopup({ maxShows = 3 }: ExitIntentPopupProps) {
  const [visible, setVisible] = useState(false);
  const [showCount, setShowCount] = useState(0);
  const showCountRef = useRef(0);
  const headlineIndex = useRef(0);

  useEffect(() => {
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY > 10) return;
      if (showCountRef.current >= maxShows) return;

      headlineIndex.current = showCountRef.current % HEADLINES.length;
      showCountRef.current += 1;
      setShowCount(showCountRef.current);
      setVisible(true);
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxShows]);

  function handleClose() {
    setVisible(false);
  }

  if (!visible) return null;

  const idx = (showCount - 1) % HEADLINES.length;
  const headline = HEADLINES[idx] ?? HEADLINES[0]!;
  const subtext = SUBTEXTS[idx] ?? SUBTEXTS[0]!;

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "all",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg, #fff)",
          color: "var(--text, #111)",
          border: "2px solid var(--border, #ccc)",
          borderRadius: "8px",
          padding: "2.5rem 2rem",
          maxWidth: "420px",
          width: "90%",
          textAlign: "center",
          boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
          fontFamily: "var(--font-body, sans-serif)",
          position: "relative",
        }}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "1.2rem",
            color: "var(--muted, #888)",
            lineHeight: 1,
            padding: "0.25rem",
          }}
        >
          ✕
        </button>

        <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>😱</div>

        <h2
          style={{
            margin: "0 0 0.75rem 0",
            fontSize: "1.4rem",
            fontWeight: 800,
            fontFamily: "var(--font-heading, sans-serif)",
            color: "var(--text, #111)",
            lineHeight: 1.2,
          }}
        >
          {headline}
        </h2>

        <p
          style={{
            margin: "0 0 1.75rem 0",
            fontSize: "0.95rem",
            color: "var(--muted, #666)",
            lineHeight: 1.5,
          }}
        >
          {subtext}
        </p>

        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={handleClose}
            style={{
              padding: "0.65rem 1.5rem",
              background: "var(--a1, #7c3aed)",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "var(--bg, #fff)",
              fontFamily: "var(--font-body, sans-serif)",
            }}
          >
            OK I&apos;ll Stay
          </button>
          <button
            onClick={handleClose}
            style={{
              padding: "0.65rem 1.5rem",
              background: "transparent",
              border: "1px solid var(--border, #ccc)",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.9rem",
              color: "var(--muted, #888)",
              fontFamily: "var(--font-body, sans-serif)",
            }}
          >
            No, I Hate Good Things
          </button>
        </div>

        {showCount < maxShows && (
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.72rem",
              color: "var(--muted, #aaa)",
            }}
          >
            This message will appear {maxShows - showCount} more time{maxShows - showCount !== 1 ? "s" : ""} if you try to leave again.
          </p>
        )}
      </div>
    </div>
  );
}
