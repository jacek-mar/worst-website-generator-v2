"use client";

import { SectionType } from "@/lib/chaos";

interface SectionCard {
  id: SectionType;
  label: string;
  desc: string;
  locked: boolean;
}

const SECTION_CARDS: SectionCard[] = [
  { id: "hero",         label: "Hero",          desc: "Big headline + CTAs",        locked: true  },
  { id: "features",     label: "Features",      desc: "Feature cards grid",         locked: false },
  { id: "pricing",      label: "Pricing",       desc: "Pricing tiers table",        locked: false },
  { id: "testimonials", label: "Testimonials",  desc: "Quote cards",                locked: false },
  { id: "faq",          label: "FAQ",           desc: "Accordion Q&A",              locked: false },
  { id: "form",         label: "Contact Form",  desc: "Lead capture form",          locked: false },
  { id: "gallery",      label: "Gallery",       desc: "Image grid",                 locked: false },
  { id: "video",        label: "Video Embed",   desc: "Fake video player",          locked: false },
  { id: "map",          label: "Map / Location",desc: "We are here (probably)",     locked: false },
  { id: "footer",       label: "Footer",        desc: "Links + copyright",          locked: true  },
];

interface Step3SectionsProps {
  value: SectionType[];
  onChange: (sections: SectionType[]) => void;
}

export default function Step3Sections({ value, onChange }: Step3SectionsProps) {
  const LOCKED: SectionType[] = ["hero", "footer"];

  function toggle(id: SectionType) {
    if (LOCKED.includes(id)) return;
    const next = value.includes(id)
      ? value.filter((s) => s !== id)
      : [...value, id];
    // Always ensure locked sections are present
    const withLocked = Array.from(new Set([...LOCKED, ...next]));
    onChange(withLocked);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "0.5rem",
        }}
      >
        {SECTION_CARDS.map((card) => {
          const isChecked = value.includes(card.id);
          return (
            <button
              key={card.id}
              onClick={() => toggle(card.id)}
              disabled={card.locked}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.6rem",
                padding: "0.65rem 0.75rem",
                background: card.locked
                  ? "rgba(255,255,255,0.03)"
                  : "var(--app-surface)",
                border: isChecked
                  ? "1px solid var(--app-accent)"
                  : "1px solid var(--app-border)",
                borderRadius: "6px",
                cursor: card.locked ? "default" : "pointer",
                textAlign: "left",
                outline: "none",
                opacity: card.locked ? 0.75 : 1,
                transition: "border-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                if (!card.locked && !isChecked) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(124, 58, 237, 0.5)";
                }
              }}
              onMouseLeave={(e) => {
                if (!card.locked && !isChecked) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "var(--app-border)";
                }
              }}
            >
              {/* Checkbox indicator */}
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "3px",
                  border: isChecked
                    ? "2px solid var(--app-accent)"
                    : "2px solid var(--app-border)",
                  background: isChecked ? "var(--app-accent)" : "transparent",
                  flexShrink: 0,
                  marginTop: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.65rem",
                  color: "white",
                }}
              >
                {isChecked ? "✓" : ""}
              </div>

              {/* Label + description */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    color: isChecked ? "var(--app-accent)" : "var(--app-text)",
                  }}
                >
                  {card.label}
                  {card.locked && (
                    <span style={{ fontSize: "0.75rem" }}>🔒</span>
                  )}
                </div>
                <div
                  style={{
                    color: "var(--app-muted)",
                    fontSize: "0.75rem",
                    marginTop: "0.1rem",
                  }}
                >
                  {card.desc}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Info note */}
      <div
        style={{
          color: "var(--app-muted)",
          fontSize: "0.78rem",
          opacity: 0.7,
          padding: "0.5rem 0.75rem",
          border: "1px dashed var(--app-border)",
          borderRadius: "6px",
        }}
      >
        ✨ 1–2 surprise sections will be added automatically at generation time.
      </div>
    </div>
  );
}
