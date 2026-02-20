"use client";
import type { GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

const BLOG_TITLES = [
  '10 Reasons We Are Better (Number 7 Will Surprise You)',
  'An Open Letter To Our Industry (From Us)',
  'Why [TOPIC] Is Broken And We Fixed It',
  'Our Journey From [X] To [Y]: A Story Of Growth',
];

const BLOG_EXCERPTS = [
  "We've been thinking a lot about this. More than we probably should have. Here's what we concluded after extensive deliberation and a team offsite...",
  'The industry has a problem. We noticed it. We thought about it. We wrote about it. This is that writing.',
  "Last Tuesday changed everything for us. We can't say why specifically, but trust that the journey has been transformative.",
  "A reflection on where we started, where we are, and where we're going. (Where we're going: forward.)",
];

export function BlogPreviewSection({ section }: Props) {
  const count = section.itemCount;
  return (
    <section style={{ background: 'var(--bg2, var(--bg))', padding: '4rem 2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--a1)',
        textAlign: 'center', marginBottom: '2rem',
      }}>
        {section.headline}
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(count, 3)}, 1fr)`,
        gap: '1.25rem', maxWidth: '1000px', margin: '0 auto',
      }}>
        {Array.from({ length: count }, (_, i) => (
          <div key={i} style={{
            background: 'var(--surface)', border: '2px solid var(--border)', padding: '1.5rem',
          }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--a3)', marginBottom: '0.5rem', fontFamily: 'var(--font-accent)' }}>
              📅 Yesterday &nbsp;·&nbsp; 4 min read &nbsp;·&nbsp; By The Team
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)', color: 'var(--text)',
              fontSize: '1rem', marginBottom: '0.75rem', lineHeight: 1.3,
            }}>
              {BLOG_TITLES[i % BLOG_TITLES.length]}
            </h3>
            <p style={{ color: 'var(--text2)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1rem' }}>
              {BLOG_EXCERPTS[i % BLOG_EXCERPTS.length]}
            </p>
            <a href="#" onClick={e => e.preventDefault()} style={{
              color: 'var(--a1)', fontSize: '0.85rem', fontFamily: 'var(--font-accent)', textDecoration: 'none',
            }}>
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
