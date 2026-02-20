"use client";

import { PageCategory } from "@/lib/chaos";

interface CategoryTile {
  id: PageCategory;
  emoji: string;
  name: string;
  desc: string;
}

const CATEGORY_TILES: CategoryTile[] = [
  { id: "portfolio",  emoji: "💼", name: "Portfolio",          desc: "Show off your genius. Or pretend to." },
  { id: "startup",    emoji: "🚀", name: "Startup / SaaS",     desc: "Disrupt something. Anything." },
  { id: "product",    emoji: "📦", name: "Product",            desc: "Sell items people may or may not need." },
  { id: "finance",    emoji: "💰", name: "Finance / Crypto",   desc: "Numbers go up (or down)." },
  { id: "local",      emoji: "🏪", name: "Local Business",     desc: "Best service in town. Probably." },
  { id: "event",      emoji: "🎟️", name: "Event / Conference", desc: "People will definitely show up." },
  { id: "campaign",   emoji: "📢", name: "Campaign",           desc: "Change the world. Maybe." },
];

interface Step1CategoryProps {
  value: PageCategory;
  onChange: (cat: PageCategory) => void;
}

export default function Step1Category({ value, onChange }: Step1CategoryProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "0.75rem",
      }}
    >
      {CATEGORY_TILES.map((tile) => {
        const isSelected = tile.id === value;
        return (
          <button
            key={tile.id}
            onClick={() => onChange(tile.id)}
            style={{
              background: "var(--app-surface)",
              border: `2px solid ${isSelected ? "var(--app-accent)" : "var(--app-border)"}`,
              borderRadius: "8px",
              padding: "1.5rem",
              cursor: "pointer",
              textAlign: "left",
              transition: "border-color 0.15s ease",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "rgba(124, 58, 237, 0.5)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--app-border)";
              }
            }}
          >
            <div style={{ fontSize: "2.5rem", lineHeight: 1, marginBottom: "0.5rem" }}>
              {tile.emoji}
            </div>
            <div
              style={{
                fontWeight: "bold",
                color: isSelected ? "var(--app-accent)" : "var(--app-text)",
                marginBottom: "0.25rem",
                fontSize: "0.95rem",
              }}
            >
              {tile.name}
            </div>
            <div
              style={{
                color: "var(--app-muted)",
                fontSize: "0.8rem",
                lineHeight: 1.4,
              }}
            >
              {tile.desc}
            </div>
          </button>
        );
      })}
    </div>
  );
}
