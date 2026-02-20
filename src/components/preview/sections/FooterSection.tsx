"use client";
import type { Generation, GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; generation: Generation; }

export function FooterSection({ section, generation }: Props) {
  const { settings } = generation;
  const year = new Date().getFullYear();
  const footerLinks = ['Privacy Policy', 'Terms (Long)', 'Cookie Settings', 'Do Not Sell My Data (Ha)', 'Accessibility', 'Sitemap (Outdated)'];

  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '4px solid var(--a1)',
      padding: '3rem 2rem 1.5rem',
      textAlign: 'center',
    }}>
      <p style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
        color: 'var(--a1)', fontSize: '1.1rem', marginBottom: '0.5rem',
      }}>
        {section.body || '\u00A9 All Rights Reserved (And Some That Aren\u2019t)'}
      </p>
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.5rem',
        justifyContent: 'center', marginBottom: '1.5rem',
      }}>
        {footerLinks.map((link, i) => (
          <a key={i} href="#" onClick={(e) => e.preventDefault()} style={{
            color: 'var(--muted)', fontSize: '0.8rem',
            fontFamily: 'var(--font-body)', textDecoration: 'none',
          }}>
            {link}
          </a>
        ))}
      </div>
      <p style={{ fontSize: '0.65rem', color: 'var(--muted)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.4 }}>
        * All claims on this website are estimates. Results may vary. This is not legal, financial,
        medical, or nutritional advice. &copy; {year} This Website. All rights reserved.
        Some rights may be available upon written request.
        Chaos Level: {settings.chaosLevel}/10.
      </p>
    </footer>
  );
}
