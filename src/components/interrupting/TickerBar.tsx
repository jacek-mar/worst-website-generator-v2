"use client";

import { useEffect, useRef } from "react";

interface TickerBarProps {
  messages: string[];
  position?: "top" | "bottom";
  speed?: number;
  bgColor?: string;
  textColor?: string;
  height?: string;
}

export function TickerBar({
  messages,
  position = "top",
  speed = 80,
  bgColor = "var(--a1)",
  textColor = "var(--bg)",
  height = "36px",
}: TickerBarProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const lastTsRef = useRef<number | null>(null);

  // Build the scrolling text: join with separator and double for seamless loop
  const separator = "  •  ";
  const singlePass = messages.join(separator) + separator;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure the width of one full pass (half of the doubled content)
    const fullWidth = track.scrollWidth / 2;
    if (fullWidth <= 0) return;

    let rafId: number;

    function step(ts: number) {
      if (lastTsRef.current === null) {
        lastTsRef.current = ts;
      }
      const delta = ts - lastTsRef.current;
      lastTsRef.current = ts;

      offsetRef.current += (speed * delta) / 1000;

      // Reset when we've scrolled one full pass to create seamless loop
      if (offsetRef.current >= fullWidth) {
        offsetRef.current -= fullWidth;
      }

      if (track) {
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speed, singlePass]);

  const positionStyle: React.CSSProperties =
    position === "top"
      ? { top: 0, left: 0, right: 0 }
      : { bottom: 0, left: 0, right: 0 };

  return (
    <div
      style={{
        position: "fixed",
        ...positionStyle,
        height,
        backgroundColor: bgColor,
        color: textColor,
        zIndex: 8000,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "0.03em",
        whiteSpace: "nowrap",
        userSelect: "none",
      }}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        style={{
          display: "inline-block",
          willChange: "transform",
          paddingLeft: "100vw",
        }}
      >
        {/* Double the content for seamless looping */}
        <span>{singlePass}</span>
        <span>{singlePass}</span>
      </div>
    </div>
  );
}
