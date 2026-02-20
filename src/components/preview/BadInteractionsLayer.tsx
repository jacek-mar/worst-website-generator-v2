"use client";
import { useEffect } from 'react';
import { mulberry32 } from '@/lib/chaos';
import { selectBadInteractions, buildBadInteractionsCss } from '@/lib/bad-interactions';
import type { BadInteraction } from '@/lib/bad-interactions';

interface Props {
  seed: number;
  chaosLevel: number;
}

export function BadInteractionsLayer({ seed, chaosLevel }: Props) {
  const active = selectBadInteractions(seed, chaosLevel);

  useEffect(() => {
    const container = document.querySelector('.generated-page') as HTMLElement | null;
    if (!container) return;

    const cleanups: Array<() => void> = [];

    // escape-button: buttons slide away from the cursor on hover
    if (active.includes('escape-button')) {
      const rng = mulberry32(seed ^ 0xE5CA9E);
      const buttons = Array.from(
        container.querySelectorAll('button, [data-main-cta]')
      ) as HTMLElement[];

      buttons.forEach((btn) => {
        function onEnter() {
          const dx = (rng() - 0.5) * 280;
          const dy = (rng() - 0.5) * 100;
          btn.style.transform = `translate(${dx}px, ${dy}px)`;
          btn.style.transition = 'transform 0.12s ease-out';
          setTimeout(() => {
            btn.style.transform = '';
            btn.style.transition = 'transform 0.4s ease-in-out';
          }, 650);
        }
        btn.addEventListener('mouseenter', onEnter);
        cleanups.push(() => btn.removeEventListener('mouseenter', onEnter));
      });
    }

    // shake-on-click: the clicked section shakes briefly
    if (active.includes('shake-on-click')) {
      function onClick(e: Event) {
        const section = (e.target as HTMLElement).closest('section') as HTMLElement | null;
        if (!section) return;
        section.classList.add('bi-shake-active');
        setTimeout(() => section.classList.remove('bi-shake-active'), 550);
      }
      container.addEventListener('click', onClick);
      cleanups.push(() => container.removeEventListener('click', onClick));
    }

    // glitch-headline: h1 needs data-text attr for CSS ::before/::after
    if (active.includes('glitch-headline')) {
      const h1s = Array.from(container.querySelectorAll('h1')) as HTMLElement[];
      h1s.forEach((h1) => {
        h1.setAttribute('data-text', h1.textContent ?? '');
      });
      cleanups.push(() => h1s.forEach((h1) => h1.removeAttribute('data-text')));
    }

    // drunk-spin: image/map placeholders gently oscillate
    if (active.includes('drunk-spin')) {
      const targets = Array.from(
        container.querySelectorAll('.gallery-placeholder, .map-placeholder, .video-placeholder')
      ) as HTMLElement[];
      targets.forEach((el) => {
        el.style.animation = 'bi-drunk 3s ease-in-out infinite';
      });
      cleanups.push(() => targets.forEach((el) => { el.style.animation = ''; }));
    }

    return () => cleanups.forEach((fn) => fn());
  }, [seed, chaosLevel]); // eslint-disable-line react-hooks/exhaustive-deps

  return <style>{buildBadInteractionsCss(active)}</style>;
}
