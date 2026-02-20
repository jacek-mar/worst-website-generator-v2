"use client";

import { GeneratorSettings } from "@/lib/chaos";
import Step1Category from "@/components/generator/Step1Category";
import Step2Layout from "@/components/generator/Step2Layout";
import Step3Sections from "@/components/generator/Step3Sections";
import Step4Style from "@/components/generator/Step4Style";
import Step5Extras from "@/components/generator/Step5Extras";

type Step = 1 | 2 | 3 | 4 | 5;

const STEP_NAMES: Record<Step, string> = {
  1: "Category",
  2: "Layout",
  3: "Sections",
  4: "Style",
  5: "Extras",
};

interface StepControllerProps {
  step: Step;
  settings: GeneratorSettings;
  onSettingsChange: (s: GeneratorSettings) => void;
  onStepChange: (s: Step) => void;
  onGenerate: () => Promise<void>;
  isGenerating?: boolean;
  generateError?: string | null;
}

export default function StepController({
  step,
  settings,
  onSettingsChange,
  onStepChange,
  onGenerate,
  isGenerating = false,
  generateError = null,
}: StepControllerProps) {
  const steps: Step[] = [1, 2, 3, 4, 5];

  return (
    <div className="app-card" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Step indicator */}
      <div>
        <div
          style={{
            color: "var(--app-muted)",
            fontSize: "0.8rem",
            marginBottom: "0.75rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Step {step} / 5 — {STEP_NAMES[step]}
        </div>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {steps.map((s) => {
            const isCompleted = s < step;
            const isCurrent = s === step;
            return (
              <div
                key={s}
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  background: isCompleted || isCurrent
                    ? "var(--app-accent)"
                    : "transparent",
                  border: isCompleted || isCurrent
                    ? "2px solid var(--app-accent)"
                    : "2px solid var(--app-border)",
                  color: isCompleted || isCurrent
                    ? "white"
                    : "var(--app-muted)",
                  transition: "all 0.2s",
                }}
              >
                {isCompleted ? "✓" : s}
              </div>
            );
          })}
          <div
            style={{
              flex: 1,
              height: "2px",
              background: "var(--app-border)",
              marginLeft: "0.25rem",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                background: "var(--app-accent)",
                width: `${((step - 1) / 4) * 100}%`,
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* Step content */}
      <div>
        {step === 1 && (
          <Step1Category
            value={settings.category}
            onChange={(cat) => onSettingsChange({ ...settings, category: cat })}
          />
        )}
        {step === 2 && (
          <Step2Layout
            value={settings.layoutId}
            onChange={(id) => onSettingsChange({ ...settings, layoutId: id })}
          />
        )}
        {step === 3 && (
          <Step3Sections
            value={settings.sections}
            onChange={(sections) => onSettingsChange({ ...settings, sections })}
          />
        )}
        {step === 4 && (
          <Step4Style
            colorSchemeId={settings.colorSchemeId}
            fontSchemeId={settings.fontSchemeId}
            chaosLevel={settings.chaosLevel}
            onChange={(updates) => onSettingsChange({ ...settings, ...updates })}
          />
        )}
        {step === 5 && (
          <Step5Extras
            settings={settings}
            onSettingsChange={onSettingsChange}
            onGenerate={onGenerate}
            isGenerating={isGenerating}
          />
        )}
      </div>

      {/* Bottom navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Back button — hidden on step 1 */}
        <div>
          {step > 1 && (
            <button
              className="app-btn-ghost"
              onClick={() => onStepChange((step - 1) as Step)}
            >
              ← Back
            </button>
          )}
        </div>

        {/* Next / Generate button */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
          {step < 5 && (
            <button
              className="app-btn"
              onClick={() => onStepChange((step + 1) as Step)}
            >
              Next →
            </button>
          )}
          {step === 5 && (
            <>
              <button
                className="app-btn"
                style={{ background: "var(--app-accent2)" }}
                onClick={() => void onGenerate()}
                disabled={isGenerating}
              >
                {isGenerating ? "Generating…" : "⚡ Generate Page"}
              </button>
              {generateError && (
                <p style={{ color: "var(--app-danger)", marginTop: "0.5rem", fontSize: "0.85rem" }}>
                  {generateError}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
