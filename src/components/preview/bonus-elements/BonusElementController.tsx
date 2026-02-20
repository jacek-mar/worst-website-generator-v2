"use client";
import type { BonusElement, Generation } from '@/lib/chaos';
import { AsciiAnimation } from './AsciiAnimation';
import { RetroHitCounter } from './RetroHitCounter';
import { BsodOnCta } from './BsodOnCta';
import { BootSequence } from './BootSequence';
import { CursorTrail } from './CursorTrail';
import { TabTitleChanger } from './TabTitleChanger';
import { ScrollbarInvisible } from './ScrollbarInvisible';
import { UnderConstruction } from './UnderConstruction';
import { WebRing } from './WebRing';
import { MidiPlayerBar } from './MidiPlayerBar';

interface Props {
  bonusElement: BonusElement;
  generation: Generation;
}

export function BonusElementController({ bonusElement, generation }: Props) {
  const { settings } = generation;

  switch (bonusElement) {
    case 'ascii-animation':    return <AsciiAnimation />;
    case 'retro-hit-counter':  return <RetroHitCounter />;
    case 'bsod-on-cta':        return <BsodOnCta />;
    case 'boot-sequence':      return <BootSequence chaosLevel={settings.chaosLevel} />;
    case 'cursor-trail':       return <CursorTrail />;
    case 'tab-title-changer':  return <TabTitleChanger />;
    case 'scrollbar-invisible': return <ScrollbarInvisible />;
    case 'under-construction': return <UnderConstruction />;
    case 'web-ring':           return <WebRing />;
    case 'midi-player':        return <MidiPlayerBar />;
    default:                   return null;
  }
}
