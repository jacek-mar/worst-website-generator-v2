export type FontScheme = {
  id: string;
  name: string;
  headingFamily: string;
  bodyFamily: string;
  accentFamily: string;
  headingWeight: string;
  bodyWeight: string;
  accentWeight: string;
  googleFontsUrl?: string;
};

export function getSchemeById(id: string): FontScheme {
  return FONT_SCHEMES.find((f) => f.id === id) ?? FONT_SCHEMES[0];
}

export function schemeToCssVars(f: FontScheme): string {
  return [
    `--font-heading: ${f.headingFamily}`,
    `--font-body: ${f.bodyFamily}`,
    `--font-accent: ${f.accentFamily}`,
    `--font-heading-weight: ${f.headingWeight}`,
    `--font-body-weight: ${f.bodyWeight}`,
    `--font-accent-weight: ${f.accentWeight}`,
  ].join('; ');
}

export const FONT_SCHEMES: FontScheme[] = [
  {
    id: 'classic-disaster',
    name: 'Classic Disaster',
    headingFamily: 'Impact, fantasy',
    bodyFamily: "'Comic Sans MS', cursive",
    accentFamily: 'Papyrus, fantasy',
    headingWeight: '900',
    bodyWeight: '400',
    accentWeight: '400',
  },
  {
    id: 'corporate-madness',
    name: 'Corporate Madness',
    headingFamily: "'Arial Black', sans-serif",
    bodyFamily: "'Times New Roman', serif",
    accentFamily: "'Courier New', monospace",
    headingWeight: '900',
    bodyWeight: '400',
    accentWeight: '400',
  },
  {
    id: 'hipster-gone-wrong',
    name: 'Hipster Gone Wrong',
    headingFamily: 'Lobster, cursive',
    bodyFamily: 'Verdana, sans-serif',
    accentFamily: 'Oswald, sans-serif',
    headingWeight: '400',
    bodyWeight: '400',
    accentWeight: '600',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@600&display=swap',
  },
  {
    id: 'nineties-nostalgia',
    name: '90s Nostalgia',
    headingFamily: "'Trebuchet MS', sans-serif",
    bodyFamily: 'Georgia, serif',
    accentFamily: "'Comic Sans MS', cursive",
    headingWeight: '700',
    bodyWeight: '400',
    accentWeight: '400',
  },
  {
    id: 'all-caps-everything',
    name: 'All Caps Everything',
    headingFamily: 'Impact, fantasy',
    bodyFamily: 'Impact, fantasy',
    accentFamily: 'Impact, fantasy',
    headingWeight: '900',
    bodyWeight: '900',
    accentWeight: '900',
  },
  {
    id: 'too-many-weights',
    name: 'Too Many Weights',
    headingFamily: "'Roboto', sans-serif",
    bodyFamily: "'Roboto', sans-serif",
    accentFamily: "'Roboto', sans-serif",
    headingWeight: '900',
    bodyWeight: '100',
    accentWeight: '500',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;900&display=swap',
  },
  {
    id: 'script-overload',
    name: 'Script Overload',
    headingFamily: "'Dancing Script', cursive",
    bodyFamily: 'Pacifico, cursive',
    accentFamily: 'Satisfy, cursive',
    headingWeight: '700',
    bodyWeight: '400',
    accentWeight: '400',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&family=Satisfy&display=swap',
  },
  {
    id: 'serif-sans-chaos',
    name: 'Serif + Sans Chaos',
    headingFamily: "'Playfair Display', serif",
    bodyFamily: 'Helvetica, sans-serif',
    accentFamily: 'Georgia, serif',
    headingWeight: '700',
    bodyWeight: '400',
    accentWeight: '400',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap',
  },
  {
    id: 'condensed-expanded',
    name: 'Condensed + Expanded',
    headingFamily: "'Barlow Condensed', sans-serif",
    bodyFamily: "'Barlow Condensed', sans-serif",
    accentFamily: "'Barlow', sans-serif",
    headingWeight: '900',
    bodyWeight: '400',
    accentWeight: '800',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Barlow:wght@800&family=Barlow+Condensed:wght@400;900&display=swap',
  },
  {
    id: 'pixel-monospace',
    name: 'Pixel / Monospace',
    headingFamily: "'Press Start 2P', cursive",
    bodyFamily: "'Courier New', monospace",
    accentFamily: 'Consolas, monospace',
    headingWeight: '400',
    bodyWeight: '400',
    accentWeight: '400',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
  },
];

export const FONT_SCHEME_IDS = FONT_SCHEMES.map((f) => f.id);
