"use client";

import { useEffect, useRef, useState } from "react";

interface UrgencyProgressBarProps {
  /** Top offset in pixels — set to 32 if TickerBar is active, otherwise 0 */
  topOffset?: number;
  barColor?: string;
}

const TOTAL_SECONDS = 11 * 60 + 59; // 11:59 = 719 seconds

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function UrgencyProgressBar({
  topOffset = 0,
  barColor = "var(--danger, #ef4444)",
}: UrgencyProgressBarProps) {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return TOTAL_SECONDS; // reset — urgency is permanent
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, []);

  const progress = ((TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS) * 100;
  const timeStr = formatTime(secondsLeft);

  return (
    <div
      style={{
        position: "fixed",
        top: topOffset,
        left: 0,
        right: 0,
        zIndex: 8200,
        fontFamily: "var(--font-body, sans-serif)",
      }}
    >
      {/* Progress bar track */}
      <div
        style={{
          height: "8px",
          background: "var(--surface, #f0f0f0)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${progress}%`,
            background: barColor,
            transition: "width 0.9s linear",
          }}
        />
      </div>

      {/* Countdown text */}
      <div
        style={{
          background: "var(--bg, #fff)",
          borderBottom: "1px solid var(--border, #ccc)",
          padding: "0.2rem 1rem",
          fontSize: "0.72rem",
          color: "var(--text, #111)",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          justifyContent: "center",
        }}
      >
        <span style={{ color: barColor, fontWeight: 700 }}>⏰</span>
        <span>
          <strong style={{ color: barColor }}>Offer ends in {timeStr}</strong>
          {" — "}
          <span style={{ color: "var(--muted, #888)" }}>
            This offer has been ending for a while. It will continue to end.
          </span>
        </span>
      </div>
    </div>
  );
}
