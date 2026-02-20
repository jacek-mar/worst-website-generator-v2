import { getContentPools } from './page-types';
import type { ContentPools } from './page-types';

export const CATEGORIES = [
  "portfolio","startup","product","finance","local","event","campaign"
] as const;
export type PageCategory = typeof CATEGORIES[number];

export const LAYOUT_IDS = [
  "classic-vertical","full-width-stacked","split-screen","brutalist","coming-soon"
] as const;
export type LayoutId = typeof LAYOUT_IDS[number];

export const SECTION_TYPES = [
  "hero","features","pricing","testimonials","faq","form","gallery","video","map","footer"
] as const;
export type SectionType = typeof SECTION_TYPES[number];

export const BONUS_SECTION_TYPES = [
  "stats","team","comparison","blog-preview","timeline"
] as const;
export type BonusSectionType = typeof BONUS_SECTION_TYPES[number];

export const BONUS_ELEMENTS = [
  "ascii-animation","retro-hit-counter","bsod-on-cta","boot-sequence",
  "cursor-trail","tab-title-changer","scrollbar-invisible",
  "under-construction","web-ring","midi-player"
] as const;
export type BonusElement = typeof BONUS_ELEMENTS[number];

export const PRESET_IDS = [
  "maximum-chaos","corporate-hell","retro-90s","subtle-disaster",
  "ai-saas-parody","hacker-terminal","vintage-portfolio","rave-event"
] as const;
export type PresetId = typeof PRESET_IDS[number];

export type Interruptions = {
  ticker: boolean;
  cookieBanner: boolean;
  exitPopup: boolean;
  newsletterPopup: boolean;
  floatingAd: boolean;
  purchaseToasts: boolean;
  urgencyBar: boolean;
};

export type GeneratorSettings = {
  category: PageCategory;
  layoutId: LayoutId;
  sections: SectionType[];
  colorSchemeId: string;
  fontSchemeId: string;
  chaosLevel: number;
  interruptions: Interruptions;
  seed: number;
};

export type GeneratedItem = {
  title: string;
  body: string;
  icon?: string;
};

export type FormField = {
  label: string;
  type: "text" | "email" | "number" | "select" | "checkbox" | "textarea";
  required: boolean;
  placeholder?: string;
  whyRequired?: string;
};

export type GeneratedSection = {
  type: SectionType | BonusSectionType;
  headline: string;
  body: string;
  itemCount: number;
  items?: GeneratedItem[];
  formFields?: FormField[];
};

export type Generation = {
  id: string;
  seed: number;
  version: number;
  createdAt: string;
  settings: GeneratorSettings;
  bonusElement: BonusElement;
  bonusSectionTypes: BonusSectionType[];
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  sections: GeneratedSection[];
};

export const DEFAULT_SECTIONS: SectionType[] = ["hero","features","testimonials","form","footer"];
export const OPTIONAL_SECTIONS: SectionType[] = ["pricing","faq","gallery","video","map"];

export const SECTION_ITEM_RANGES: Partial<Record<SectionType | BonusSectionType, [number, number]>> = {
  features:      [2, 6],
  testimonials:  [2, 4],
  pricing:       [2, 4],
  faq:           [3, 7],
  form:          [3, 12],
  gallery:       [4, 9],
  stats:         [3, 5],
  team:          [3, 5],
  comparison:    [4, 8],
  "blog-preview":[2, 4],
  timeline:      [4, 7],
};

// ─── RNG ENGINE ────────────────────────────────────────────────────────────

// Mulberry32 — deterministic seeded pseudo-random number generator
// Returns a function that produces floats in [0, 1)
// Same seed always produces the same sequence
export function mulberry32(seed: number): () => number {
  let s = seed;
  return function () {
    s |= 0;
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Pick one random element from an array using the seeded RNG
export function pick<T>(rng: () => number, arr: readonly T[]): T {
  return arr[Math.floor(rng() * arr.length)] as T;
}

// Pick N unique elements from an array (partial Fisher-Yates)
export function pickN<T>(rng: () => number, arr: readonly T[], n: number): T[] {
  const copy = [...arr] as T[];
  const count = Math.min(n, copy.length);
  for (let i = 0; i < count; i++) {
    const j = i + Math.floor(rng() * (copy.length - i));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy.slice(0, count);
}

// Random integer in [min, max] inclusive
export function randBetween(rng: () => number, min: number, max: number): number {
  return Math.floor(rng() * (max - min + 1)) + min;
}

// Full Fisher-Yates shuffle — returns a new shuffled array
export function fisherYates<T>(rng: () => number, arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

// ─── CONTENT HELPERS ───────────────────────────────────────────────────────

// Randomly capitalizes some words based on seeded RNG — NEVER use Math.random()
export function weirdCaps(rng: () => number, text: string): string {
  return text
    .split(' ')
    .map(word => {
      if (!word) return word;
      const r = rng();
      if (r < 0.12) return word.toUpperCase();
      if (r < 0.22) return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      return word;
    })
    .join(' ');
}

// ─── SETTINGS HELPERS ──────────────────────────────────────────────────────

export function normalizeSettings(s: Partial<GeneratorSettings>): GeneratorSettings {
  return {
    category:      s.category      ?? "portfolio",
    layoutId:      s.layoutId      ?? "classic-vertical",
    sections:      s.sections      ?? [...DEFAULT_SECTIONS],
    colorSchemeId: s.colorSchemeId ?? "geocities-lagoon",
    fontSchemeId:  s.fontSchemeId  ?? "classic-disaster",
    chaosLevel:    s.chaosLevel    ?? 5,
    interruptions: s.interruptions ?? {
      ticker: false, cookieBanner: false, exitPopup: false,
      newsletterPopup: false, floatingAd: false,
      purchaseToasts: false, urgencyBar: false,
    },
    seed: s.seed ?? 12345,
  };
}

// Increment chaos by 1 and auto-enable interruptions at each threshold
export function worsenSettings(settings: GeneratorSettings): GeneratorSettings {
  const next = Math.min(10, settings.chaosLevel + 1);
  const i = { ...settings.interruptions };
  if (next >= 2)  i.ticker         = true;
  if (next >= 3)  i.purchaseToasts = true;
  if (next >= 4)  i.urgencyBar     = true;
  if (next >= 5)  i.newsletterPopup = true;
  if (next >= 6)  i.cookieBanner   = true;
  if (next >= 7)  i.exitPopup      = true;
  if (next >= 8)  i.floatingAd     = true;
  return { ...settings, chaosLevel: next, interruptions: i };
}

// ─── PAGE GENERATOR ────────────────────────────────────────────────────────

export function generatePage(seed: number, settings: GeneratorSettings): Generation {
  const rng = mulberry32(seed);

  // Get content pools for this category
  const pools = getContentPools(settings.category);

  // Title, subtitle, CTAs from pool
  const title        = weirdCaps(rng, pick(rng, pools.hero.headlines));
  const subtitle     = pick(rng, pools.hero.subheadlines);
  const ctaPrimary   = pick(rng, pools.hero.cta_primary);
  const ctaSecondary = pick(rng, pools.hero.cta_secondary);

  // Pick 1 bonus element
  const bonusElement = pick(rng, BONUS_ELEMENTS);

  // Pick 1–2 bonus sections
  const bonusCount = rng() < 0.4 ? 1 : 2;
  const bonusSectionTypes = pickN(rng, BONUS_SECTION_TYPES, bonusCount) as BonusSectionType[];

  // Build section list: user sections + bonus sections interleaved
  const userSections = settings.sections.filter(s => s !== 'hero' && s !== 'footer');
  const insertAt = userSections.length > 0
    ? randBetween(rng, 1, Math.max(1, userSections.length - 1))
    : 1;
  const midSections: (SectionType | BonusSectionType)[] = [
    ...userSections.slice(0, insertAt),
    ...bonusSectionTypes,
    ...userSections.slice(insertAt),
  ];
  const allSections: (SectionType | BonusSectionType)[] = ['hero', ...midSections, 'footer'];

  // Generate each section
  const sections: GeneratedSection[] = allSections.map((type) => {
    const range = SECTION_ITEM_RANGES[type as keyof typeof SECTION_ITEM_RANGES];
    const itemCount = range ? randBetween(rng, range[0], range[1]) : 3;

    let items: GeneratedItem[] | undefined;
    let formFields: FormField[] | undefined;

    if (type === 'features') {
      items = Array.from({ length: itemCount }, (_, i) => ({
        title: pools.features.card_headlines[i % pools.features.card_headlines.length] ?? 'Feature',
        body:  pools.features.card_bodies[i % pools.features.card_bodies.length] ?? 'Description',
        icon:  ['🚀','⚡','🔒','📊','🎯','💎'][i % 6],
      }));
    } else if (type === 'testimonials') {
      items = Array.from({ length: itemCount }, (_, i) => ({
        title: pools.testimonials.names[i % pools.testimonials.names.length] ?? 'A Person',
        body:  pools.testimonials.quotes[i % pools.testimonials.quotes.length] ?? 'Great!',
        icon:  pools.testimonials.star_captions[i % pools.testimonials.star_captions.length],
      }));
    } else if (type === 'form') {
      formFields = Array.from({ length: itemCount }, (_, i) => ({
        label:       pools.form.field_labels[i % pools.form.field_labels.length] ?? 'Field',
        type:        (['text','email','text','number','text','textarea'] as const)[i % 6],
        required:    i < 3,
        placeholder: pools.form.placeholders[i % pools.form.placeholders.length],
        whyRequired: i < 2 ? 'Required for legal reasons we cannot disclose.' : undefined,
      }));
    } else if (type === 'stats') {
      items = Array.from({ length: itemCount }, (_, i) => ({
        title: pick(rng, pools.stats.labels),
        body:  pick(rng, pools.stats.values),
        icon:  pick(rng, pools.stats.captions),
      }));
    } else if (type === 'faq') {
      items = Array.from({ length: itemCount }, (_, i) => ({
        title: pools.faq.questions[i % pools.faq.questions.length] ?? 'Question?',
        body:  pools.faq.answers[i % pools.faq.answers.length] ?? 'Yes. No. Maybe.',
      }));
    }

    return {
      type,
      headline: getSectionHeadline(type, pools, rng),
      body:     getSectionBody(type, pools, rng),
      itemCount,
      items,
      formFields,
    };
  });

  return {
    id: `${seed}-${Date.now()}`,
    seed,
    version: 1,
    createdAt: new Date().toISOString(),
    settings,
    bonusElement,
    bonusSectionTypes,
    title,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    sections,
  };
}

// Helper: pick headline per section type
function getSectionHeadline(
  type: SectionType | BonusSectionType,
  pools: ContentPools,
  rng: () => number
): string {
  const t = type as string;
  if (t === 'features')     return pick(rng, pools.features.section_titles);
  if (t === 'testimonials') return pick(rng, pools.testimonials.section_titles);
  if (t === 'faq')          return pick(rng, pools.faq.section_titles);
  if (t === 'form')         return pick(rng, pools.form.section_titles);
  if (t === 'trust_bar')    return pick(rng, pools.trust_bar.section_titles);
  if (t === 'cta_banner')   return pick(rng, pools.cta_banner.headlines);
  if (t === 'stats')        return 'The Numbers Speak For Themselves (Terms Apply)';
  if (t === 'team')         return 'Meet Our Team';
  if (t === 'comparison')   return 'Us vs. Them';
  if (t === 'blog-preview') return 'Latest News';
  if (t === 'timeline')     return 'Our Journey';
  return '';
}

function getSectionBody(
  type: SectionType | BonusSectionType,
  pools: ContentPools,
  rng: () => number
): string {
  const t = type as string;
  if (t === 'about')  return pick(rng, pools.about.paragraphs);
  if (t === 'footer') return pick(rng, pools.footer.taglines);
  return '';
}
