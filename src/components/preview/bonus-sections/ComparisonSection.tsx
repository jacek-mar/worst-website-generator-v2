"use client";
import type { GeneratedSection } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

const COMPARISON_ROWS = [
  'Actually works', 'Affordable pricing', 'Good support', 'Easy to use',
  'Regular updates', 'Data security', 'No hidden fees', 'Works offline',
  'AI-powered', 'Free tier', 'Money-back guarantee', 'Used by enterprises',
];

export function ComparisonSection({ section }: Props) {
  const rowCount = section.itemCount;
  const rows = COMPARISON_ROWS.slice(0, rowCount);

  return (
    <section style={{ background: 'var(--bg)', padding: '4rem 2rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--a1)',
        textAlign: 'center', marginBottom: '2rem',
      }}>
        {section.headline}
      </h2>
      <div style={{ maxWidth: '600px', margin: '0 auto', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)' }}>
          <thead>
            <tr>
              <th style={{ padding: '0.75rem', background: 'var(--surface)', color: 'var(--text)', textAlign: 'left', border: '2px solid var(--border)' }}>
                Feature
              </th>
              <th style={{ padding: '0.75rem', background: 'var(--a1)', color: 'var(--bg)', textAlign: 'center', border: '2px solid var(--border)' }}>
                US ⭐
              </th>
              <th style={{ padding: '0.75rem', background: 'var(--surface)', color: 'var(--muted)', textAlign: 'center', border: '2px solid var(--border)' }}>
                THEM 💀
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--bg)' }}>
                <td style={{ padding: '0.65rem 0.75rem', color: 'var(--text)', border: '1px solid var(--border)' }}>
                  {row}
                </td>
                <td style={{ padding: '0.65rem', textAlign: 'center', color: 'var(--success)', fontSize: '1.1rem', border: '1px solid var(--border)', fontWeight: 'bold' }}>
                  ✅
                </td>
                <td style={{ padding: '0.65rem', textAlign: 'center', color: 'var(--danger)', fontSize: '1.1rem', border: '1px solid var(--border)', fontWeight: 'bold' }}>
                  ❌
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '0.5rem', textAlign: 'center' }}>
          * Based on internal evaluation. &ldquo;Them&rdquo; is a composite of competitors we have not named for legal reasons.
        </p>
      </div>
    </section>
  );
}
