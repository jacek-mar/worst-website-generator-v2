export const BAD_INTERACTIONS = [
  'escape-button',
  'wobble-headings',
  'pulse-glow',
  'rainbow-text',
  'shake-on-click',
  'cursor-crosshair',
  'cursor-cell',
  'zoom-blast',
  'glitch-headline',
  'bounce-cta',
  'invert-hover',
  'drunk-spin',
] as const;

export type BadInteraction = typeof BAD_INTERACTIONS[number];

import { mulberry32, pickN } from './chaos';

export function selectBadInteractions(seed: number, chaosLevel: number): BadInteraction[] {
  const rng = mulberry32(seed ^ 0xBAD1BAD1);
  const count = chaosLevel <= 2 ? 1 : chaosLevel <= 5 ? 2 : chaosLevel <= 8 ? 3 : 4;
  return pickN(rng, [...BAD_INTERACTIONS], count) as BadInteraction[];
}

export function buildBadInteractionsCss(active: BadInteraction[]): string {
  const parts: string[] = [
    // Always-present utility keyframes
    `@keyframes bi-shake {
      0%,100% { transform: translateX(0); }
      20%      { transform: translateX(-8px); }
      40%      { transform: translateX(8px); }
      60%      { transform: translateX(-5px); }
      80%      { transform: translateX(5px); }
    }
    .bi-shake-active { animation: bi-shake 0.5s ease-in-out !important; }
    @keyframes bi-drunk {
      0%,100% { transform: rotate(-2deg); }
      50%      { transform: rotate(2deg); }
    }`,
  ];

  if (active.includes('wobble-headings')) {
    parts.push(`
      @keyframes bi-wobble {
        0%,100% { transform: rotate(0deg); }
        25%      { transform: rotate(-3deg); }
        75%      { transform: rotate(3deg); }
      }
      .generated-page h1:hover,
      .generated-page h2:hover {
        animation: bi-wobble 0.45s ease-in-out;
        display: inline-block;
        cursor: grab;
      }
    `);
  }

  if (active.includes('pulse-glow')) {
    parts.push(`
      @keyframes bi-pulse-glow {
        0%,100% { box-shadow: none; }
        50%      { box-shadow: 0 0 40px 12px var(--a1, #ff00ff66); }
      }
      .generated-page section:nth-child(odd) {
        animation: bi-pulse-glow 2.5s ease-in-out infinite;
      }
    `);
  }

  if (active.includes('rainbow-text')) {
    parts.push(`
      @keyframes bi-rainbow {
        0%   { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
      .generated-page h2 {
        animation: bi-rainbow 4s linear infinite;
      }
    `);
  }

  if (active.includes('cursor-crosshair')) {
    parts.push(`.generated-page { cursor: crosshair !important; }`);
  }

  if (active.includes('cursor-cell')) {
    parts.push(`
      .generated-page button,
      .generated-page a[href] { cursor: cell !important; }
    `);
  }

  if (active.includes('zoom-blast')) {
    parts.push(`
      .generated-page section > div,
      .generated-page section > article {
        transition: transform 0.18s ease-out, box-shadow 0.18s ease-out;
        position: relative;
      }
      .generated-page section > div:hover,
      .generated-page section > article:hover {
        transform: scale(1.07);
        box-shadow: 0 0 50px 8px var(--a1, #ff00ff88);
        z-index: 10;
      }
    `);
  }

  if (active.includes('glitch-headline')) {
    parts.push(`
      .generated-page h1 {
        position: relative;
        animation: bi-glitch-main 6s infinite;
      }
      .generated-page h1::before,
      .generated-page h1::after {
        content: attr(data-text);
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        overflow: hidden;
      }
      .generated-page h1::before {
        color: var(--a2, #ff0000);
        clip-path: polygon(0 25%, 100% 25%, 100% 50%, 0 50%);
        animation: bi-glitch-1 3.5s infinite;
        opacity: 0.85;
      }
      .generated-page h1::after {
        color: var(--a1, #00ffff);
        clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
        animation: bi-glitch-2 4.5s infinite;
        opacity: 0.85;
      }
      @keyframes bi-glitch-main {
        0%,88%,100% { transform: skew(0deg); }
        90%          { transform: skew(0.8deg); }
        92%          { transform: skew(-0.8deg); }
      }
      @keyframes bi-glitch-1 {
        0%,91%,100% { transform: translateX(0); }
        93%          { transform: translateX(-5px); }
        97%          { transform: translateX(5px); }
      }
      @keyframes bi-glitch-2 {
        0%,84%,100% { transform: translateX(0); }
        86%          { transform: translateX(5px); }
        92%          { transform: translateX(-5px); }
      }
    `);
  }

  if (active.includes('bounce-cta')) {
    parts.push(`
      @keyframes bi-bounce {
        0%,100% { transform: translateY(0); }
        50%      { transform: translateY(-9px); }
      }
      .generated-page [data-main-cta="true"],
      .generated-page section:first-of-type button:first-of-type {
        animation: bi-bounce 1.3s ease-in-out infinite;
      }
    `);
  }

  if (active.includes('invert-hover')) {
    parts.push(`
      .generated-page section > * {
        transition: filter 0.1s ease-in-out;
      }
      .generated-page section > *:hover {
        filter: invert(1) hue-rotate(180deg);
      }
    `);
  }

  return parts.join('\n');
}

export function buildBadInteractionsJs(active: BadInteraction[], seed: number): string {
  const jsEffects: BadInteraction[] = [
    'escape-button', 'shake-on-click', 'glitch-headline', 'drunk-spin',
  ];
  if (!active.some(a => jsEffects.includes(a))) return '';

  const parts: string[] = [];
  parts.push(`(function(){`);
  parts.push(`var container=document.querySelector('.generated-page');`);
  parts.push(`if(!container)return;`);

  if (active.includes('escape-button')) {
    // Mulberry32 RNG with the same seed XOR as the React version
    parts.push(`var s=(${seed ^ 0xE5CA9E})|0;`);
    parts.push(
      `function rng(){s=(s+0x6D2B79F5)|0;` +
      `var t=Math.imul(s^(s>>>15),1|s);` +
      `t=(t+Math.imul(t^(t>>>7),61|t))^t;` +
      `return((t^(t>>>14))>>>0)/4294967296;}` +
      `Array.from(container.querySelectorAll('button,[data-main-cta]')).forEach(function(btn){` +
      `btn.addEventListener('mouseenter',function(){` +
      `var dx=(rng()-0.5)*280,dy=(rng()-0.5)*100;` +
      `btn.style.transform='translate('+dx+'px,'+dy+'px)';` +
      `btn.style.transition='transform 0.12s ease-out';` +
      `setTimeout(function(){btn.style.transform='';btn.style.transition='transform 0.4s ease-in-out';},650);` +
      `});});`
    );
  }

  if (active.includes('shake-on-click')) {
    parts.push(
      `container.addEventListener('click',function(e){` +
      `var sec=e.target.closest('section');if(!sec)return;` +
      `sec.classList.add('bi-shake-active');` +
      `setTimeout(function(){sec.classList.remove('bi-shake-active');},550);` +
      `});`
    );
  }

  if (active.includes('glitch-headline')) {
    parts.push(
      `Array.from(container.querySelectorAll('h1')).forEach(function(h1){` +
      `h1.setAttribute('data-text',h1.textContent||'');` +
      `});`
    );
  }

  if (active.includes('drunk-spin')) {
    parts.push(
      `Array.from(container.querySelectorAll(` +
      `'.gallery-placeholder,.map-placeholder,.video-placeholder'` +
      `)).forEach(function(el){el.style.animation='bi-drunk 3s ease-in-out infinite';});`
    );
  }

  parts.push(`})();`);
  return parts.join('\n');
}
