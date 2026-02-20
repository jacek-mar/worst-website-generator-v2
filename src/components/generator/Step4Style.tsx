"use client";

import { useEffect, useRef } from "react";
import { Interruptions } from "@/lib/chaos";

// ─── DATA ──────────────────────────────────────────────────────────────────

const COLOR_SCHEMES = [
  { id: "geocities-lagoon",  name: "GeoCities Lagoon" },
  { id: "miami-vice",        name: "Miami Vice" },
  { id: "primary-assault",   name: "Primary Colors Assault" },
  { id: "green-phosphor",    name: "Green Phosphor" },
  { id: "windows-95",        name: "Windows 95 Silver" },
  { id: "halloween",         name: "Halloween Forever" },
  { id: "acid-synthwave",    name: "Acid Synthwave" },
  { id: "crayon-explosion",  name: "Crayon Box Explosion" },
  { id: "cyberpunk-yellow",  name: "Cyberpunk Yellow Knife" },
  { id: "vaporwave-haze",    name: "Vaporwave Haze" },
] as const;

const FONT_SCHEMES = [
  { id: "classic-disaster",    name: "Classic Disaster (Impact + Comic Sans)" },
  { id: "corporate-madness",   name: "Corporate Madness (Arial Black + Times)" },
  { id: "hipster-gone-wrong",  name: "Hipster Gone Wrong (Lobster + Verdana)" },
  { id: "nineties-nostalgia",  name: "90s Nostalgia (Trebuchet + Georgia)" },
  { id: "all-caps-everything", name: "All Caps Everything (Impact × 3)" },
  { id: "too-many-weights",    name: "Too Many Weights (Roboto variants)" },
  { id: "script-overload",     name: "Script Overload (Dancing + Pacifico)" },
  { id: "serif-sans-chaos",    name: "Serif + Sans Chaos (Playfair + Helvetica)" },
  { id: "condensed-expanded",  name: "Condensed + Expanded (Barlow variants)" },
  { id: "pixel-monospace",     name: "Pixel / Monospace (Press Start 2P)" },
] as const;

// ─── CHAOS → INTERRUPTIONS MAPPING ────────────────────────────────────────

function interruptionsForLevel(level: number): Interruptions {
  return {
    ticker:           level >= 2,
    purchaseToasts:   level >= 3,
    urgencyBar:       level >= 4,
    newsletterPopup:  level >= 5,
    cookieBanner:     level >= 6,
    exitPopup:        level >= 7,
    floatingAd:       level >= 8,
  };
}

function chaosEmoji(level: number): string {
  if (level <= 3) return "😤";
  if (level <= 6) return "😱";
  return "💀";
}

// ─── COMPONENT ─────────────────────────────────────────────────────────────

interface Step4StyleProps {
  colorSchemeId: string;
  fontSchemeId: string;
  chaosLevel: number;
  onChange: (updates: {
    colorSchemeId?: string;
    fontSchemeId?: string;
    chaosLevel?: number;
    interruptions?: Interruptions;
  }) => void;
}

const SELECT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "0.5rem 0.75rem",
  background: "var(--app-surface)",
  border: "1px solid var(--app-border)",
  borderRadius: "6px",
  color: "var(--app-text)",
  fontSize: "0.9rem",
  cursor: "pointer",
  outline: "none",
  appearance: "none",
  WebkitAppearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.75rem center",
  paddingRight: "2.25rem",
};

const LABEL_STYLE: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: "bold",
  color: "var(--app-muted)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  marginBottom: "0.4rem",
};

export default function Step4Style({
  colorSchemeId,
  fontSchemeId,
  chaosLevel,
  onChange,
}: Step4StyleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  function handleChaosChange(level: number) {
    onChange({
      chaosLevel: level,
      interruptions: interruptionsForLevel(level),
    });
  }

  const emoji = chaosEmoji(chaosLevel);

  // ── Wizard infection: tilt + Comic Sans flicker at chaos > 7 ──────────────
  useEffect(() => {
    const container = containerRef.current;
    if (!container || chaosLevel <= 7) return;

    const tiltDeg = (chaosLevel - 7) * 0.4;
    const cards = Array.from(
      container.querySelectorAll(".app-card")
    ) as HTMLElement[];

    cards.forEach((card, i) => {
      const direction = i % 2 === 0 ? 1 : -1;
      card.style.transform = `rotate(${tiltDeg * direction}deg)`;
      card.style.transition = "transform 0.6s ease-out";
    });

    const intervalId = window.setInterval(() => {
      cards.forEach((card) => {
        card.style.fontFamily = '"Comic Sans MS", "Chalkboard SE", cursive';
      });
      window.setTimeout(() => {
        cards.forEach((card) => {
          card.style.fontFamily = "";
        });
      }, 150);
    }, 3000);

    return () => {
      cards.forEach((card) => {
        card.style.transform = "";
        card.style.transition = "";
        card.style.fontFamily = "";
      });
      window.clearInterval(intervalId);
    };
  }, [chaosLevel]);

  return (
    <div ref={containerRef} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

      {/* ── Color Scheme ── */}
      <div className="app-card">
        <label style={LABEL_STYLE}>Color Scheme</label>
        <div style={{ position: "relative" }}>
          <select
            value={colorSchemeId}
            onChange={(e) => onChange({ colorSchemeId: e.target.value })}
            style={SELECT_STYLE}
          >
            {COLOR_SCHEMES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Font Combination ── */}
      <div className="app-card">
        <label style={LABEL_STYLE}>Font Combination</label>
        <div style={{ position: "relative" }}>
          <select
            value={fontSchemeId}
            onChange={(e) => onChange({ fontSchemeId: e.target.value })}
            style={SELECT_STYLE}
          >
            {FONT_SCHEMES.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Chaos Level ── */}
      <div>
        <label style={LABEL_STYLE}>
          Chaos Level: {chaosLevel}/10{" "}
          <span style={{ fontSize: "1.1rem", marginLeft: "0.25rem" }}>{emoji}</span>
        </label>

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          value={chaosLevel}
          onChange={(e) => handleChaosChange(Number(e.target.value))}
          style={{
            width: "100%",
            accentColor: "var(--app-accent)",
            cursor: "pointer",
            height: "6px",
            marginBottom: "0.5rem",
          }}
        />

        {/* Markers */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.72rem",
            color: "var(--app-muted)",
            marginTop: "0.25rem",
          }}
        >
          <span>0 — Mild Inconvenience</span>
          <span>5 — Actively Hostile</span>
          <span>10 — Pure Chaos</span>
        </div>

        {/* Active interruptions preview */}
        {chaosLevel > 0 && (
          <div
            style={{
              marginTop: "0.75rem",
              padding: "0.5rem 0.75rem",
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: "6px",
              fontSize: "0.78rem",
              color: "var(--app-muted)",
              lineHeight: "1.6",
            }}
          >
            <span style={{ color: "var(--app-accent)", fontWeight: "bold" }}>
              Active interruptions:{" "}
            </span>
            {[
              chaosLevel >= 2 && "ticker",
              chaosLevel >= 3 && "purchase toasts",
              chaosLevel >= 4 && "urgency bar",
              chaosLevel >= 5 && "newsletter popup",
              chaosLevel >= 6 && "cookie banner",
              chaosLevel >= 7 && "exit popup",
              chaosLevel >= 8 && "floating ad",
            ]
              .filter(Boolean)
              .join(", ") || "none"}
          </div>
        )}
      </div>
    </div>
  );
}
