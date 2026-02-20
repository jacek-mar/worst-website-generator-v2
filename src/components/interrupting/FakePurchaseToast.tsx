"use client";

import { useEffect, useRef, useState } from "react";

interface Toast {
  id: number;
  text: string;
  emoji: string;
}

const NAMES = ["Brenda", "Dave", "Karen", "Mike", "Chad", "Susan", "Tyler", "Linda", "Gary", "Tiffany"];
const CITIES = ["Ohio", "Florida", "Texas", "Canada", "The Internet", "Your ZIP Code", "New Jersey", "Somewhere Nearby"];
const ACTIONS = [
  "purchased this",
  "upgraded to Pro",
  "just signed up",
  "is viewing now",
  "left a 5-star review",
  "added to cart",
  "completed checkout",
  "referred a friend",
];
const EMOJIS = ["🛒", "⭐", "🔥", "✅", "💳", "🎉", "👀", "💼"];

const MAX_VISIBLE = 2;
const INTERVAL_MS = 4000;
const DISMISS_MS = 3000;

let toastIdCounter = 0;

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)] as T;
}

function generateToastText(): { text: string; emoji: string } {
  const name = randomItem(NAMES);
  const city = randomItem(CITIES);
  const action = randomItem(ACTIONS);
  const emoji = randomItem(EMOJIS);
  return { text: `${name} from ${city} just ${action}!`, emoji };
}

export function FakePurchaseToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dismissTimersRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  useEffect(() => {
    function addToast() {
      const { text, emoji } = generateToastText();
      const id = ++toastIdCounter;
      const toast: Toast = { id, text, emoji };

      setToasts((prev) => {
        // Keep max MAX_VISIBLE toasts
        const next = [...prev, toast];
        return next.slice(-MAX_VISIBLE);
      });

      // Auto-dismiss after DISMISS_MS
      const timer = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
        dismissTimersRef.current.delete(id);
      }, DISMISS_MS);

      dismissTimersRef.current.set(id, timer);
    }

    intervalRef.current = setInterval(addToast, INTERVAL_MS);

    const timersMap = dismissTimersRef.current;
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
      timersMap.forEach((timer) => clearTimeout(timer));
      timersMap.clear();
    };
  }, []);

  function dismissToast(id: number) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = dismissTimersRef.current.get(id);
    if (timer !== undefined) {
      clearTimeout(timer);
      dismissTimersRef.current.delete(id);
    }
  }

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "1.5rem",
        zIndex: 8700,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        pointerEvents: "none",
      }}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.65rem 0.85rem",
            background: "var(--surface, #f9f9f9)",
            border: "1px solid var(--border, #ccc)",
            borderLeft: "4px solid var(--a1, #7c3aed)",
            borderRadius: "6px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            fontFamily: "var(--font-body, sans-serif)",
            color: "var(--text, #111)",
            fontSize: "0.82rem",
            maxWidth: "280px",
            pointerEvents: "all",
            animation: "fadeInUp 0.25s ease",
          }}
        >
          <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{toast.emoji}</span>
          <span style={{ flex: 1, lineHeight: 1.4 }}>{toast.text}</span>
          <button
            onClick={() => dismissToast(toast.id)}
            aria-label="Dismiss"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "0.75rem",
              color: "var(--muted, #aaa)",
              padding: "0 0.1rem",
              lineHeight: 1,
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
