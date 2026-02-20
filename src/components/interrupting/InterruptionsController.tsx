"use client";
import type { Interruptions, Generation } from '@/lib/chaos';
import { TickerBar } from './TickerBar';
import { CookieBanner } from './CookieBanner';
import { ExitIntentPopup } from './ExitIntentPopup';
import { NewsletterPopup } from './NewsletterPopup';
import { FloatingAdBanner } from './FloatingAdBanner';
import { FakePurchaseToast } from './FakePurchaseToast';
import { UrgencyProgressBar } from './UrgencyProgressBar';
import { getTickerMessages } from '@/lib/ticker-messages';

interface Props {
  interruptions: Interruptions;
  chaosLevel: number;
  generation: Generation;
}

export function InterruptionsController({ interruptions, chaosLevel, generation }: Props) {
  const { settings } = generation;
  const tickerMessages = getTickerMessages(settings.category);

  return (
    <>
      {interruptions.ticker && (
        <TickerBar
          messages={tickerMessages}
          position="top"
          speed={40 + chaosLevel * 8}
          bgColor="var(--a1)"
          textColor="var(--bg)"
        />
      )}

      {interruptions.cookieBanner && (
        <CookieBanner />
      )}

      {interruptions.exitPopup && (
        <ExitIntentPopup maxShows={3} />
      )}

      {interruptions.newsletterPopup && (
        <NewsletterPopup />
      )}

      {interruptions.floatingAd && (
        <FloatingAdBanner />
      )}

      {interruptions.purchaseToasts && (
        <FakePurchaseToast />
      )}

      {interruptions.urgencyBar && (
        <UrgencyProgressBar />
      )}
    </>
  );
}
