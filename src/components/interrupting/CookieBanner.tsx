"use client";

import { useEffect, useRef, useState } from "react";

interface CookieBannerProps {
  accentColor?: string;
}

const COOKIE_CATEGORIES = [
  { id: "essential", label: "Essential Cookies", description: "Required for the site to function. Cannot be disabled. (We put everything here.)" },
  { id: "analytics", label: "Analytics & Performance", description: "Helps us understand how you use the site, in great detail." },
  { id: "advertising", label: "Advertising & Targeting", description: "Used to show you ads that follow you around the internet." },
  { id: "social", label: "Social Media Cookies", description: "Allows social networks to track you even when you're not on them." },
  { id: "personalization", label: "Personalization", description: "Remembers your preferences so we can sell them to partners." },
  { id: "functional", label: "Functional Cookies", description: "Enables features you didn't ask for but might accidentally use." },
  { id: "thirdparty", label: "Third-Party Cookies", description: "Set by companies we've never heard of. They seem fine." },
  { id: "crosssite", label: "Cross-Site Tracking", description: "Follows you across websites. It's more of a hobby at this point." },
  { id: "profiling", label: "User Profiling", description: "Builds a detailed profile of your interests, fears, and weaknesses." },
  { id: "retargeting", label: "Retargeting", description: "Ensures you see our ads for the next 6–8 months minimum." },
  { id: "behavioral", label: "Behavioral Analysis", description: "Studies your behavior patterns. For science. Mostly for ads." },
  { id: "location", label: "Location Data", description: "Knows where you are. Not in a creepy way. (In a creepy way.)" },
];

export function CookieBanner({ accentColor = "var(--a1)" }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [rejectMessage, setRejectMessage] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rejectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setVisible(true);
    }, 1200);

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
      if (rejectTimerRef.current !== null) {
        clearTimeout(rejectTimerRef.current);
      }
    };
  }, []);

  function handleAcceptAll() {
    setVisible(false);
  }

  function handleRejectAll() {
    setRejectMessage("Preferences saved. (You are subscribed to everything.)");
    rejectTimerRef.current = setTimeout(() => {
      setVisible(false);
      setRejectMessage(null);
    }, 1500);
  }

  function handleMoreChoices() {
    setShowMore((prev) => !prev);
  }

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 8500,
        background: "var(--bg, #fff)",
        borderTop: "2px solid var(--border, #ccc)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.18)",
        padding: "1.25rem 1.5rem",
        fontFamily: "var(--font-body, sans-serif)",
        color: "var(--text, #111)",
        maxHeight: showMore ? "80vh" : "auto",
        overflowY: showMore ? "auto" : "visible",
      }}
    >
      {rejectMessage ? (
        <div
          style={{
            textAlign: "center",
            padding: "0.75rem 0",
            color: accentColor,
            fontWeight: 600,
            fontSize: "0.95rem",
          }}
        >
          {rejectMessage}
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: "1 1 300px", minWidth: 0 }}>
              <p
                style={{
                  margin: "0 0 0.35rem 0",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text, #111)",
                }}
              >
                🍪 We Value Your Privacy (And Also Your Data)
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.85rem",
                  color: "var(--muted, #666)",
                  lineHeight: 1.5,
                }}
              >
                We use cookies to enhance your experience, analyze traffic, and serve targeted
                advertising. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                By clicking &quot;Reject All&quot;, you also consent to our use of cookies.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <button
                onClick={handleMoreChoices}
                style={{
                  padding: "0.5rem 1rem",
                  background: "transparent",
                  border: `1px solid var(--border, #ccc)`,
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  color: "var(--text, #111)",
                  fontFamily: "var(--font-body, sans-serif)",
                }}
              >
                More Choices
              </button>
              <button
                onClick={handleRejectAll}
                style={{
                  padding: "0.5rem 1rem",
                  background: "transparent",
                  border: `1px solid var(--border, #ccc)`,
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  color: "var(--text, #111)",
                  fontFamily: "var(--font-body, sans-serif)",
                }}
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                style={{
                  padding: "0.5rem 1.25rem",
                  background: accentColor,
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  color: "var(--bg, #fff)",
                  fontWeight: 700,
                  fontFamily: "var(--font-body, sans-serif)",
                }}
              >
                Accept All
              </button>
            </div>
          </div>

          {showMore && (
            <div
              style={{
                marginTop: "1.25rem",
                borderTop: "1px solid var(--border, #ccc)",
                paddingTop: "1rem",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.75rem 0",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "var(--text, #111)",
                }}
              >
                Manage Cookie Preferences
              </p>
              <p
                style={{
                  margin: "0 0 1rem 0",
                  fontSize: "0.8rem",
                  color: "var(--muted, #666)",
                }}
              >
                All categories are enabled by default for your convenience. We recommend keeping
                them all on for the best experience. (There is no &quot;Disable All&quot; option.)
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                {COOKIE_CATEGORIES.map((cat) => (
                  <label
                    key={cat.id}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      padding: "0.6rem 0.75rem",
                      border: "1px solid var(--border, #ccc)",
                      borderRadius: "4px",
                      cursor: "default",
                      background: "var(--surface, #f9f9f9)",
                    }}
                  >
                    <input
                      type="checkbox"
                      defaultChecked
                      disabled={cat.id === "essential"}
                      style={{
                        marginTop: "2px",
                        accentColor: accentColor,
                        flexShrink: 0,
                      }}
                      readOnly
                    />
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "0.82rem",
                          color: "var(--text, #111)",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {cat.label}
                        {cat.id === "essential" && (
                          <span
                            style={{
                              marginLeft: "0.4rem",
                              fontSize: "0.7rem",
                              color: accentColor,
                              fontWeight: 700,
                            }}
                          >
                            Always On
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "var(--muted, #666)",
                          lineHeight: 1.4,
                        }}
                      >
                        {cat.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                <button
                  onClick={handleAcceptAll}
                  style={{
                    padding: "0.5rem 1.25rem",
                    background: accentColor,
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    color: "var(--bg, #fff)",
                    fontWeight: 700,
                    fontFamily: "var(--font-body, sans-serif)",
                  }}
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
