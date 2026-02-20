import {
  CATEGORIES, LAYOUT_IDS, BONUS_ELEMENTS, PRESET_IDS,
  mulberry32, pick, pickN, randBetween, fisherYates,
  normalizeSettings,
  DEFAULT_SECTIONS, OPTIONAL_SECTIONS,
  type PageCategory, type LayoutId, type PresetId,
  type GeneratorSettings, type Interruptions,
  type SectionType,
} from './chaos';

// Suppress unused-import warnings for types used only in type positions
void (BONUS_ELEMENTS as unknown);
void (randBetween as unknown);

type PartialSettings = Omit<GeneratorSettings, 'category' | 'seed'>;

export const PRESETS: Record<PresetId, PartialSettings> = {

  "maximum-chaos": {
    layoutId: "brutalist",
    sections: ["hero","features","pricing","testimonials","faq","form","gallery","footer"],
    colorSchemeId: "acid-synthwave",
    fontSchemeId: "classic-disaster",
    chaosLevel: 10,
    interruptions: { ticker:true, cookieBanner:true, exitPopup:true, newsletterPopup:true, floatingAd:true, purchaseToasts:true, urgencyBar:true },
  },

  "corporate-hell": {
    layoutId: "classic-vertical",
    sections: ["hero","features","pricing","testimonials","form","footer"],
    colorSchemeId: "windows-95",
    fontSchemeId: "corporate-madness",
    chaosLevel: 5,
    interruptions: { ticker:false, cookieBanner:true, exitPopup:false, newsletterPopup:false, floatingAd:false, purchaseToasts:true, urgencyBar:true },
  },

  "retro-90s": {
    layoutId: "full-width-stacked",
    sections: ["hero","features","gallery","form","footer"],
    colorSchemeId: "geocities-lagoon",
    fontSchemeId: "nineties-nostalgia",
    chaosLevel: 7,
    interruptions: { ticker:true, cookieBanner:false, exitPopup:false, newsletterPopup:false, floatingAd:true, purchaseToasts:false, urgencyBar:false },
  },

  "subtle-disaster": {
    layoutId: "classic-vertical",
    sections: ["hero","features","testimonials","footer"],
    colorSchemeId: "vaporwave-haze",
    fontSchemeId: "too-many-weights",
    chaosLevel: 2,
    interruptions: { ticker:false, cookieBanner:false, exitPopup:false, newsletterPopup:false, floatingAd:false, purchaseToasts:false, urgencyBar:false },
  },

  "ai-saas-parody": {
    layoutId: "split-screen",
    sections: ["hero","features","pricing","faq","form","footer"],
    colorSchemeId: "cyberpunk-yellow",
    fontSchemeId: "condensed-expanded",
    chaosLevel: 6,
    interruptions: { ticker:true, cookieBanner:true, exitPopup:false, newsletterPopup:true, floatingAd:false, purchaseToasts:true, urgencyBar:true },
  },

  "hacker-terminal": {
    layoutId: "full-width-stacked",
    sections: ["hero","features","form","footer"],
    colorSchemeId: "green-phosphor",
    fontSchemeId: "pixel-monospace",
    chaosLevel: 8,
    interruptions: { ticker:true, cookieBanner:false, exitPopup:false, newsletterPopup:false, floatingAd:false, purchaseToasts:false, urgencyBar:false },
  },

  "vintage-portfolio": {
    layoutId: "split-screen",
    sections: ["hero","gallery","testimonials","form","footer"],
    colorSchemeId: "miami-vice",
    fontSchemeId: "hipster-gone-wrong",
    chaosLevel: 4,
    interruptions: { ticker:true, cookieBanner:false, exitPopup:true, newsletterPopup:false, floatingAd:false, purchaseToasts:false, urgencyBar:false },
  },

  "rave-event": {
    layoutId: "full-width-stacked",
    sections: ["hero","pricing","form","footer"],
    colorSchemeId: "halloween",
    fontSchemeId: "all-caps-everything",
    chaosLevel: 9,
    interruptions: { ticker:true, cookieBanner:false, exitPopup:false, newsletterPopup:true, floatingAd:false, purchaseToasts:true, urgencyBar:true },
  },
};

export function applyPreset(
  presetId: PresetId,
  currentCategory: PageCategory,
  newSeed: number
): GeneratorSettings {
  return {
    ...PRESETS[presetId],
    category: currentCategory,
    seed: newSeed,
  };
}

export function randomizeEverything(): GeneratorSettings {
  // NOTE: this function uses Math.random() to generate the initial seed only.
  // All further randomness uses mulberry32(seed) — this is the ONLY allowed use of Math.random.
  const seed = Math.floor(Math.random() * 9_999_999) + 1;
  const rng = mulberry32(seed);

  const rb = (prob = 0.5): boolean => rng() < prob;
  const extraCount = Math.floor(rng() * 5); // 0-4 optional sections
  const extras = pickN(rng, OPTIONAL_SECTIONS, extraCount);
  const mid = fisherYates(rng, [
    ...DEFAULT_SECTIONS.filter(s => s !== "hero" && s !== "footer"),
    ...extras,
  ]);

  // Color and font scheme IDs — hardcoded list so presets.ts has no circular import
  const COLOR_IDS = ["geocities-lagoon","miami-vice","primary-assault","green-phosphor",
    "windows-95","halloween","acid-synthwave","crayon-explosion","cyberpunk-yellow","vaporwave-haze"];
  const FONT_IDS = ["classic-disaster","corporate-madness","hipster-gone-wrong","nineties-nostalgia",
    "all-caps-everything","too-many-weights","script-overload","serif-sans-chaos",
    "condensed-expanded","pixel-monospace"];

  return {
    category:      pick(rng, CATEGORIES),
    layoutId:      pick(rng, LAYOUT_IDS),
    sections:      ["hero", ...mid, "footer"] as SectionType[],
    colorSchemeId: pick(rng, COLOR_IDS),
    fontSchemeId:  pick(rng, FONT_IDS),
    chaosLevel:    Math.floor(rng() * 11),
    interruptions: {
      ticker:          rb(0.5),
      cookieBanner:    rb(0.5),
      exitPopup:       rb(0.4),
      newsletterPopup: rb(0.4),
      floatingAd:      rb(0.3),
      purchaseToasts:  rb(0.5),
      urgencyBar:      rb(0.5),
    },
    seed,
  };
}
