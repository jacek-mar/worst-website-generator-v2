"use client";
import type { Generation } from '@/lib/chaos';

interface Props {
  generation: Generation;
}

const NAV_LABEL_POOLS: Record<string, string[]> = {
  portfolio: ["About (Me)", "Skills (Mine)", "Work (Good)", "Contact (Do It)", "Blog (Coming Soon)"],
  startup:   ["Product", "Pricing (Blurred)", "Enterprise (Call Us)", "About", "Sign In"],
  product:   ["Shop", "Sale (Everything Is Sale)", "Reviews", "FAQ", "Cart (1)"],
  finance:   ["Invest", "Rates", "Learn (Premium)", "Portfolio", "Sign In"],
  local:     ["Home", "Services", "About Us", "Reviews", "Book Now"],
  event:     ["Home", "Speakers", "Schedule", "Tickets", "Register →"],
  campaign:  ["Home", "The Issue", "Sign Now", "Share", "Donate"],
};

export function GeneratedPageNav({ generation }: Props) {
  const { settings } = generation;
  const labels = NAV_LABEL_POOLS[settings.category] ?? NAV_LABEL_POOLS.portfolio!;

  // Links are in wrong order — shuffle deterministically based on seed
  // Since this is client component, just use a simple offset based on seed
  const offset = generation.seed % labels.length;
  const shuffled = [...labels.slice(offset), ...labels.slice(0, offset)];

  return (
    <nav style={{
      background: 'var(--surface)',
      borderBottom: `3px solid var(--a1)`,
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0',
      position: 'sticky',
      top: 0,
      zIndex: 200,
      flexWrap: 'wrap',
    }}>
      {/* Logo — deliberately wrong */}
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 'var(--font-heading-weight)',
        color: 'var(--a1)',
        fontSize: '1.1rem',
        padding: '0.75rem 0',
        marginRight: '1rem',
        letterSpacing: '-0.02em',
        cursor: 'default',
      }}>
        {generation.title.split(' ').slice(0, 2).join(' ')}™
      </div>

      <div style={{ flex: 1 }} />

      {/* Nav links — all href="#" and do nothing */}
      {shuffled.map((label, i) => (
        <a
          key={i}
          href="#"
          onClick={e => e.preventDefault()}
          style={{
            color: i === 0 ? 'var(--a1)' : 'var(--text2)',
            fontFamily: 'var(--font-accent)',
            fontSize: '0.85rem',
            padding: '0.75rem 0.9rem',
            textDecoration: 'none',
            borderBottom: i === 0 ? '3px solid var(--a1)' : 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </a>
      ))}

      {/* CTA button */}
      <button style={{
        marginLeft: '0.5rem',
        background: 'var(--a1)',
        color: 'var(--bg)',
        border: 'none',
        padding: '0.5rem 1rem',
        fontFamily: 'var(--font-accent)',
        fontSize: '0.85rem',
        cursor: 'pointer',
      }}>
        {generation.ctaPrimary.split(' ').slice(0, 3).join(' ')}
      </button>
    </nav>
  );
}
