"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GeneratorSettings, normalizeSettings } from "@/lib/chaos";
import { applyPreset, randomizeEverything } from "@/lib/presets";
import StepController from "@/components/generator/StepController";

// Suppress unused import warnings for imports used indirectly
void (applyPreset as unknown);
void (randomizeEverything as unknown);

export default function GeneratorPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [settings, setSettings] = useState<GeneratorSettings>(() =>
    normalizeSettings({})
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState<string | null>(null);

  // Restore settings from URL param (set by "Make It Worse" redirect)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const restore = params.get('restore');
    const stepParam = params.get('step');
    if (restore) {
      try {
        const decoded = JSON.parse(atob(restore)) as Partial<GeneratorSettings>;
        setSettings(normalizeSettings(decoded));
      } catch {
        // ignore malformed param — default settings already set
      }
    }
    if (stepParam) {
      const n = Number(stepParam);
      if (n >= 1 && n <= 5) setStep(n as 1 | 2 | 3 | 4 | 5);
    }
  }, []); // run once on mount to read URL params

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGenerateError(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (!res.ok) {
        throw new Error("Generation failed");
      }
      const { id } = (await res.json()) as { id: string };
      router.push(`/preview/${id}`);
    } catch (err) {
      setGenerateError(err instanceof Error ? err.message : "Unknown error");
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--app-bg)" }}>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "2rem 1rem",
        }}
      >
        <StepController
          step={step}
          settings={settings}
          onSettingsChange={setSettings}
          onStepChange={setStep}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
          generateError={generateError}
        />
      </div>
    </div>
  );
}
