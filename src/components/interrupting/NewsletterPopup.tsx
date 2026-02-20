"use client";

import { useEffect, useRef, useState } from "react";

interface NewsletterPopupProps {
  accentColor?: string;
}

const HEADLINES = [
  "Join Our Newsletter!",
  "Don't Miss Out On Updates You Didn't Ask For",
  "Stay In The Loop (The Loop Is Inescapable)",
];

const SUBTEXTS = [
  "Get exclusive content, deals, and updates delivered straight to your inbox. Unsubscribe anytime (button is very small).",
  "Thousands of people receive our emails. Most of them haven't figured out how to unsubscribe yet.",
  "Join our community of engaged readers who definitely opened at least one email.",
];

export function NewsletterPopup({ accentColor = "var(--a1)" }: NewsletterPopupProps) {
  const [visible, setVisible] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState<string | null>(null);
  const [closeMessage, setCloseMessage] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [headlineIndex] = useState<number>(() => Math.floor(Math.random() * HEADLINES.length));

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current);
      if (closeTimerRef.current !== null) clearTimeout(closeTimerRef.current);
    };
  }, []);

  function handleSubscribe() {
    setSubscribeMessage("You're subscribed! (and your data is being processed)");
    closeTimerRef.current = setTimeout(() => {
      setVisible(false);
      setSubscribeMessage(null);
    }, 2000);
  }

  function handleNoThanks() {
    setCloseMessage("Noted. You are still subscribed.");
    closeTimerRef.current = setTimeout(() => {
      setVisible(false);
      setCloseMessage(null);
    }, 1000);
  }

  function handleXClose() {
    setCloseMessage("You've unsubscribed. JK you're still subscribed.");
    closeTimerRef.current = setTimeout(() => {
      setVisible(false);
      setCloseMessage(null);
    }, 1200);
  }

  if (!visible) return null;

  const idx = headlineIndex;
  const headline = HEADLINES[idx] ?? HEADLINES[0]!;
  const subtext = SUBTEXTS[idx] ?? SUBTEXTS[0]!;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9100,
        background: "rgba(0,0,0,0.75)",
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
          maxWidth: "440px",
          width: "90%",
          textAlign: "center",
          boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
          fontFamily: "var(--font-body, sans-serif)",
          position: "relative",
        }}
      >
        {/* X close button */}
        <button
          onClick={handleXClose}
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

        {subscribeMessage || closeMessage ? (
          <div
            style={{
              padding: "1.5rem 0",
              color: subscribeMessage ? accentColor : "var(--muted, #888)",
              fontWeight: 600,
              fontSize: "0.95rem",
              lineHeight: 1.5,
            }}
          >
            {subscribeMessage ?? closeMessage}
          </div>
        ) : (
          <>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>📧</div>

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
                margin: "0 0 1.5rem 0",
                fontSize: "0.9rem",
                color: "var(--muted, #666)",
                lineHeight: 1.5,
              }}
            >
              {subtext}
            </p>

            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <input
                type="email"
                placeholder="your@email.com (required for unsubscribing)"
                style={{
                  flex: 1,
                  padding: "0.6rem 0.75rem",
                  border: "1px solid var(--border, #ccc)",
                  borderRadius: "4px",
                  fontSize: "0.85rem",
                  background: "var(--surface, #f9f9f9)",
                  color: "var(--text, #111)",
                  fontFamily: "var(--font-body, sans-serif)",
                  outline: "none",
                  minWidth: 0,
                }}
              />
              <button
                onClick={handleSubscribe}
                style={{
                  padding: "0.6rem 1.25rem",
                  background: accentColor,
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--bg, #fff)",
                  fontFamily: "var(--font-body, sans-serif)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                Subscribe
              </button>
            </div>

            <button
              onClick={handleNoThanks}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "0.78rem",
                color: "var(--muted, #aaa)",
                textDecoration: "underline",
                fontFamily: "var(--font-body, sans-serif)",
                padding: 0,
              }}
            >
              No Thanks (I Hate Free Value)
            </button>

            <p
              style={{
                marginTop: "0.75rem",
                fontSize: "0.68rem",
                color: "var(--muted, #bbb)",
                lineHeight: 1.4,
              }}
            >
              By entering your email you agree to receive emails. By not entering your email you
              also agree to receive emails. Unsubscribe link available in email footer (font size: 6px).
            </p>
          </>
        )}
      </div>
    </div>
  );
}
