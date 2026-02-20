"use client";

import { useState } from "react";
import { GeneratorSettings, Interruptions, type PresetId } from "@/lib/chaos";
import { applyPreset, randomizeEverything } from "@/lib/presets";

interface InterruptionItem {
  key: keyof Interruptions;
  icon: string;
  label: string;
  desc: string;
}

const INTERRUPTION_ITEMS: InterruptionItem[] = [
  { key: "ticker",          icon: "📢", label: "Ticker Bar",           desc: "Scrolling text strip at the top" },
  { key: "cookieBanner",    icon: "🍪", label: "Cookie Banner",         desc: "All three buttons accept cookies" },
  { key: "exitPopup",       icon: "🚪", label: "Exit Intent Popup",     desc: "Triggers when mouse leaves viewport" },
  { key: "newsletterPopup", icon: "📧", label: "Newsletter Popup",      desc: "Closing it subscribes you anyway" },
  { key: "floatingAd",      icon: "💸", label: "Floating Ad Banner",    desc: "Close button dodges your cursor" },
  { key: "purchaseToasts",  icon: "🛍️", label: "Fake Purchase Toasts",  desc: "Brenda from Ohio just bought!" },
  { key: "urgencyBar",      icon: "⏰", label: "Urgency Bar",           desc: "Offer ends in 00:11:59 (resets)" },
];

interface Step5ExtrasProps {
  settings: GeneratorSettings;
  onSettingsChange: (s: GeneratorSettings) => void;
  onGenerate: () => Promise<void>;
  isGenerating: boolean;
}

export default function Step5Extras({
  settings,
  onSettingsChange,
}: Step5ExtrasProps) {
  const [presetId, setPresetId] = useState<string>("");

  function handlePresetChange(value: string) {
    setPresetId(value);
    if (value !== "") {
      const newSettings = applyPreset(value as PresetId, settings.category, settings.seed);
      onSettingsChange(newSettings);
    }
  }

  function handleRandomize() {
    const newSettings = randomizeEverything();
    onSettingsChange(newSettings);
    setPresetId("");
  }

  function handleInterruptionChange(key: keyof Interruptions, checked: boolean) {
    setPresetId(""); // reset to Custom when manually changing
    onSettingsChange({
      ...settings,
      interruptions: {
        ...settings.interruptions,
        [key]: checked,
      },
    });
  }

  const selectStyle: React.CSSProperties = {
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
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

      {/* SECTION 1 — Preset Selector */}
      <div>
        <div style={{ marginBottom: "0.75rem" }}>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "var(--app-text)",
              margin: 0,
            }}
          >
            🎛️ Quick Presets
          </h3>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--app-muted)",
              margin: "0.25rem 0 0",
            }}
          >
            One-click fills all settings. Your category is preserved.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <select
            value={presetId}
            onChange={(e) => handlePresetChange(e.target.value)}
            style={selectStyle}
          >
            <option value="">— Custom (build your own) —</option>
            <option value="maximum-chaos">💀 Maximum Chaos</option>
            <option value="corporate-hell">🏢 Corporate Hell</option>
            <option value="retro-90s">📺 Retro 90s</option>
            <option value="subtle-disaster">😤 Subtle Disaster</option>
            <option value="ai-saas-parody">🤖 AI SaaS Parody</option>
            <option value="hacker-terminal">💻 Hacker Terminal</option>
            <option value="vintage-portfolio">🖼️ Vintage Portfolio</option>
            <option value="rave-event">🪩 Rave Event</option>
          </select>
          {/* Custom dropdown arrow */}
          <div
            style={{
              position: "absolute",
              right: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "var(--app-muted)",
              fontSize: "0.75rem",
            }}
          >
            ▼
          </div>
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--app-muted)",
            margin: "0.4rem 0 0",
            fontStyle: "italic",
          }}
        >
          Note: changing any control after picking a preset switches to Custom.
        </p>
      </div>

      {/* SECTION 2 — Randomize Everything */}
      <div>
        <button
          type="button"
          onClick={handleRandomize}
          style={{
            width: "100%",
            padding: "0.65rem 1rem",
            background: "transparent",
            border: "1px solid var(--app-border)",
            borderRadius: "6px",
            color: "var(--app-text)",
            fontSize: "0.9rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "border-color 0.15s, background 0.15s",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--app-accent)";
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(124, 58, 237, 0.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--app-border)";
            (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          }}
        >
          🎲 Randomize Everything
        </button>
      </div>

      {/* SECTION 3 — Chaos Seed */}
      <div>
        <div style={{ marginBottom: "0.75rem" }}>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "var(--app-text)",
              margin: 0,
            }}
          >
            🌱 Chaos Seed
          </h3>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--app-muted)",
              margin: "0.25rem 0 0",
            }}
          >
            Same seed = same generated page, every time. Share your disasters.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <input
            type="number"
            min={1}
            max={9999999}
            value={settings.seed}
            placeholder="Enter seed number"
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!isNaN(val) && val >= 1 && val <= 9_999_999) {
                onSettingsChange({ ...settings, seed: val });
              }
            }}
            style={{
              flex: 1,
              padding: "0.5rem 0.75rem",
              background: "var(--app-surface)",
              border: "1px solid var(--app-border)",
              borderRadius: "6px",
              color: "var(--app-text)",
              fontSize: "0.9rem",
              outline: "none",
            }}
          />
          <button
            type="button"
            title="Roll a random seed"
            onClick={() => {
              const newSeed = Math.floor(Math.random() * 9_999_999) + 1;
              onSettingsChange({ ...settings, seed: newSeed });
            }}
            style={{
              padding: "0.5rem 0.75rem",
              background: "transparent",
              border: "1px solid var(--app-border)",
              borderRadius: "6px",
              color: "var(--app-text)",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "border-color 0.15s, background 0.15s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--app-accent)";
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(124, 58, 237, 0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--app-border)";
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
            }}
          >
            🎲
          </button>
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--app-muted)",
            margin: "0.4rem 0 0",
            fontFamily: "monospace",
          }}
        >
          Current seed: {settings.seed}
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          color: "var(--app-muted)",
          fontSize: "0.8rem",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "var(--app-border)" }} />
        <span>— Interrupting Elements —</span>
        <div style={{ flex: 1, height: "1px", background: "var(--app-border)" }} />
      </div>

      {/* SECTION 3 — Interruptions */}
      <div>
        <div style={{ marginBottom: "0.5rem" }}>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "var(--app-text)",
              margin: 0,
            }}
          >
            💥 Interrupting Elements
          </h3>
          <p
            style={{
              fontSize: "0.8rem",
              color: "var(--app-muted)",
              margin: "0.25rem 0 0",
            }}
          >
            These annoy your visitors. Chaos level auto-enables some. You can add more.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.5rem",
          }}
        >
          {INTERRUPTION_ITEMS.map((item) => {
            const isChecked = settings.interruptions[item.key];
            return (
              <label
                key={item.key}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  padding: "0.625rem 0.75rem",
                  borderRadius: "6px",
                  border: isChecked
                    ? "2px solid var(--app-accent)"
                    : "1px solid var(--app-border)",
                  background: isChecked
                    ? "rgba(124, 58, 237, 0.08)"
                    : "transparent",
                  cursor: "pointer",
                  transition: "border-color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (!isChecked) {
                    (e.currentTarget as HTMLLabelElement).style.borderColor =
                      "rgba(124, 58, 237, 0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isChecked) {
                    (e.currentTarget as HTMLLabelElement).style.borderColor =
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "1px",
                    transition: "all 0.15s",
                  }}
                >
                  {isChecked && (
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                {/* Hidden native checkbox */}
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => handleInterruptionChange(item.key, e.target.checked)}
                  style={{ display: "none" }}
                />

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                      color: isChecked ? "var(--app-accent)" : "var(--app-text)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--app-muted)",
                      marginTop: "0.15rem",
                      lineHeight: "1.3",
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
