"use client";

import { LayoutId } from "@/lib/chaos";

interface LayoutCard {
  id: LayoutId;
  name: string;
  desc: string;
  ascii: string;
}

const LAYOUT_CARDS: LayoutCard[] = [
  {
    id: "classic-vertical",
    name: "Classic Vertical",
    desc: "Nav top, sidebar, content stacked",
    ascii: `┌─────────────────────┐
│ NAV  Home About Blog │
├─────┬───────────────┤
│SIDE │  HERO SECTION │
│BAR  │               │
│     ├───────────────┤
│links│  FEATURES     │
│     │  ○ ○ ○        │
├─────┴───────────────┤
│       FOOTER        │
└─────────────────────┘`,
  },
  {
    id: "full-width-stacked",
    name: "Full-Width Stacked",
    desc: "Sections at 100% width, alternating colors",
    ascii: `┌─────────────────────┐
│  NAV                │
├─────────────────────┤
│       HERO          │
│   BIG TEXT HERE     │
├─────────────────────┤
│      FEATURES       │
│  ░░░░░░░░░░░░░░░░   │
├─────────────────────┤
│       FORM          │
├─────────────────────┤
│      FOOTER         │
└─────────────────────┘`,
  },
  {
    id: "split-screen",
    name: "Split Screen",
    desc: "Giant text left, animation right",
    ascii: `┌──────────┬──────────┐
│          │          │
│  HUGE    │  ~*~*~   │
│  TITLE   │ ANIM HERE│
│          │  *~*~*   │
│  [CTA]   │          │
├──────────┴──────────┤
│     SECTIONS BELOW  │
└─────────────────────┘`,
  },
  {
    id: "brutalist",
    name: "Single Column Brutalist",
    desc: "Centered, 640px max, massive fonts",
    ascii: `      ┌───────────┐
      │           │
      │  HEADLINE │
      │           │
      ├───────────┤
      │ Features  │
      ├───────────┤
      │   Form    │
      ├───────────┤
      │  Footer   │
      └───────────┘`,
  },
  {
    id: "coming-soon",
    name: "Coming Soon",
    desc: "Countdown + email capture only",
    ascii: `┌─────────────────────┐
│                     │
│   COMING SOON 🔥    │
│                     │
│  ⏰ 00 : 11 : 59    │
│                     │
│  [email@email.com]  │
│  [ NOTIFY ME ]      │
│                     │
└─────────────────────┘`,
  },
];

interface Step2LayoutProps {
  value: LayoutId;
  onChange: (id: LayoutId) => void;
}

export default function Step2Layout({ value, onChange }: Step2LayoutProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "0.75rem",
      }}
    >
      {LAYOUT_CARDS.map((card, index) => {
        const isSelected = card.id === value;
        const isLastOdd = LAYOUT_CARDS.length % 2 !== 0 && index === LAYOUT_CARDS.length - 1;

        return (
          <button
            key={card.id}
            onClick={() => onChange(card.id)}
            style={{
              gridColumn: isLastOdd ? "1 / -1" : undefined,
              maxWidth: isLastOdd ? "50%" : undefined,
              margin: isLastOdd ? "0 auto" : undefined,
              width: isLastOdd ? "100%" : undefined,
              background: "var(--app-surface)",
              border: isSelected
                ? "2px solid var(--app-accent)"
                : "1px solid var(--app-border)",
              borderRadius: "8px",
              padding: "1rem",
              cursor: "pointer",
              textAlign: "left",
              outline: "none",
              transition: "border-color 0.15s ease",
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
            {/* Radio indicator + name */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.35rem",
              }}
            >
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  border: isSelected
                    ? "2px solid var(--app-accent)"
                    : "2px solid var(--app-border)",
                  background: isSelected ? "var(--app-accent)" : "transparent",
                  flexShrink: 0,
                  transition: "all 0.15s ease",
                }}
              />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  color: isSelected ? "var(--app-accent)" : "var(--app-text)",
                }}
              >
                {card.name}
              </span>
            </div>

            {/* Description */}
            <div
              style={{
                color: "var(--app-muted)",
                fontSize: "0.78rem",
                marginBottom: "0.6rem",
                lineHeight: 1.4,
              }}
            >
              {card.desc}
            </div>

            {/* ASCII preview */}
            <pre
              style={{
                fontFamily: "monospace",
                fontSize: "0.55rem",
                lineHeight: 1.3,
                overflow: "hidden",
                maxHeight: "100px",
                margin: 0,
                color: isSelected ? "var(--app-accent)" : "var(--app-muted)",
                background: "transparent",
                whiteSpace: "pre",
              }}
            >
              {card.ascii}
            </pre>
          </button>
        );
      })}
    </div>
  );
}
