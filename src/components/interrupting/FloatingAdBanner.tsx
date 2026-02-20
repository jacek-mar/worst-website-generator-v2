"use client";

import { useState } from "react";

interface FloatingAdBannerProps {
  accentColor?: string;
}

const AD_HEADLINES = [
  "You May Have Won!",
  "Congratulations, Visitor #1,000,000!",
  "A Special Offer Just For You (And Everyone Else)",
  "Your Computer Has Been Selected!",
];

const AD_SUBTEXTS = [
  "Click to claim your prize. Taxes not included. Prize not confirmed.",
  "You are the 1,000,000th visitor! Your prize is waiting. (Prize availability subject to change.)",
  "This offer expires in [TIME]. Act now before you forget about it.",
  "You have been pre-approved for something. Click to find out what.",
];

// Corner positions: [bottom, right] in rem
const CORNER_POSITIONS: Array<[string, string, string, string]> = [
  ["auto", "1.5rem", "1.5rem", "auto"],   // bottom-right
  ["auto", "auto", "1.5rem", "1.5rem"],   // bottom-left
  ["1.5rem", "1.5rem", "auto", "auto"],   // top-right
  ["1.5rem", "auto", "auto", "1.5rem"],   // top-left
];

// Close button positions within the card: [top, right, bottom, left]
const BUTTON_POSITIONS: Array<{ top?: string; right?: string; bottom?: string; left?: string }> = [
  { top: "0.5rem", right: "0.5rem" },
  { top: "0.5rem", left: "0.5rem" },
  { bottom: "0.5rem", right: "0.5rem" },
  { bottom: "0.5rem", left: "0.5rem" },
];

const MAX_DODGES = 3;

export function FloatingAdBanner({ accentColor = "var(--a1)" }: FloatingAdBannerProps) {
  const [visible, setVisible] = useState(true);
  const [cornerIndex, setCornerIndex] = useState(0);
  const [buttonPosIndex, setButtonPosIndex] = useState(0);
  const [dodgeCount, setDodgeCount] = useState(0);
  const [adIndex] = useState<number>(() => Math.floor(Math.random() * AD_HEADLINES.length));

  function handleButtonMouseEnter() {
    if (dodgeCount >= MAX_DODGES) return;
    setDodgeCount((prev) => prev + 1);
    // Move card to a different corner
    setCornerIndex((prev) => (prev + 1) % CORNER_POSITIONS.length);
    // Move button to a different position within the card
    setButtonPosIndex((prev) => (prev + 1) % BUTTON_POSITIONS.length);
  }

  function handleClose() {
    setVisible(false);
  }

  if (!visible) return null;

  const [top, right, bottom, left] = CORNER_POSITIONS[cornerIndex]!;
  const btnPos = BUTTON_POSITIONS[buttonPosIndex]!;
  const headline = AD_HEADLINES[adIndex] ?? AD_HEADLINES[0]!;
  const subtext = AD_SUBTEXTS[adIndex] ?? AD_SUBTEXTS[0]!;
  const canClose = dodgeCount >= MAX_DODGES;

  return (
    <div
      style={{
        position: "fixed",
        top,
        right,
        bottom,
        left,
        zIndex: 8800,
        width: "280px",
        background: "var(--bg, #fff)",
        border: `2px solid ${accentColor}`,
        borderRadius: "8px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
        fontFamily: "var(--font-body, sans-serif)",
        color: "var(--text, #111)",
        overflow: "hidden",
        transition: "top 0.2s ease, right 0.2s ease, bottom 0.2s ease, left 0.2s ease",
      }}
    >
      {/* Ad header bar */}
      <div
        style={{
          background: accentColor,
          padding: "0.3rem 0.75rem",
          fontSize: "0.65rem",
          color: "var(--bg, #fff)",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        🎉 ADVERTISEMENT — NOT A SCAM
      </div>

      {/* Ad body */}
      <div style={{ padding: "1rem 1rem 1.25rem", position: "relative" }}>
        {/* Close button — dodges cursor */}
        <button
          onMouseEnter={handleButtonMouseEnter}
          onClick={canClose ? handleClose : undefined}
          aria-label={canClose ? "Close" : "Close (keep trying)"}
          style={{
            position: "absolute",
            top: btnPos.top,
            right: btnPos.right,
            bottom: btnPos.bottom,
            left: btnPos.left,
            background: "transparent",
            border: "1px solid var(--border, #ccc)",
            borderRadius: "50%",
            width: "22px",
            height: "22px",
            cursor: canClose ? "pointer" : "default",
            fontSize: "0.7rem",
            color: "var(--muted, #888)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
            padding: 0,
            transition: "top 0.15s ease, right 0.15s ease, bottom 0.15s ease, left 0.15s ease",
          }}
        >
          ✕
        </button>

        <div style={{ fontSize: "2rem", marginBottom: "0.5rem", textAlign: "center" }}>🎁</div>

        <h3
          style={{
            margin: "0 0 0.5rem 0",
            fontSize: "1rem",
            fontWeight: 800,
            fontFamily: "var(--font-heading, sans-serif)",
            color: "var(--text, #111)",
            lineHeight: 1.2,
            paddingRight: "1.5rem",
          }}
        >
          {headline}
        </h3>

        <p
          style={{
            margin: "0 0 1rem 0",
            fontSize: "0.78rem",
            color: "var(--muted, #666)",
            lineHeight: 1.4,
          }}
        >
          {subtext}
        </p>

        <button
          style={{
            width: "100%",
            padding: "0.55rem",
            background: accentColor,
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "var(--bg, #fff)",
            fontFamily: "var(--font-body, sans-serif)",
          }}
        >
          CLAIM PRIZE NOW →
        </button>

        {!canClose && (
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.65rem",
              color: "var(--muted, #bbb)",
              textAlign: "center",
            }}
          >
            {dodgeCount === 0
              ? "Hover the × to close"
              : `${MAX_DODGES - dodgeCount} more attempt${MAX_DODGES - dodgeCount !== 1 ? "s" : ""} to close`}
          </p>
        )}
      </div>
    </div>
  );
}
