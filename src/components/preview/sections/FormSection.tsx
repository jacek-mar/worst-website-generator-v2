"use client";
import { useState } from 'react';
import type { GeneratedSection, FormField } from '@/lib/chaos';

interface Props { section: GeneratedSection; }

function FieldInput({ field }: { field: FormField }) {
  const commonStyle = {
    width: '100%', padding: '0.65rem',
    background: 'var(--surface)', color: 'var(--text)',
    border: '2px solid var(--border)', fontFamily: 'var(--font-body)',
    fontSize: '0.9rem',
  };
  if (field.type === 'textarea') {
    return <textarea rows={3} placeholder={field.placeholder} style={commonStyle} />;
  }
  if (field.type === 'select') {
    return (
      <select style={commonStyle}>
        <option value="">{field.placeholder ?? 'Select one'}</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="maybe">I Don&apos;t Know</option>
      </select>
    );
  }
  if (field.type === 'checkbox') {
    return (
      <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text2)' }}>
        <input type="checkbox" />
        <span>{field.placeholder ?? field.label}</span>
      </label>
    );
  }
  return (
    <input
      type={field.type}
      placeholder={field.placeholder ?? ''}
      required={field.required}
      style={commonStyle}
    />
  );
}

export function FormSection({ section }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const fields = section.formFields ?? [];
  return (
    <section style={{ background: 'var(--bg)', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)', fontWeight: 'var(--font-heading-weight)',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--a1)',
          textAlign: 'center', marginBottom: '2rem',
        }}>
          {section.headline}
        </h2>
        {submitted ? (
          <div style={{
            textAlign: 'center', padding: '2rem',
            background: 'var(--surface)', border: '2px solid var(--a2)',
            color: 'var(--a2)', fontFamily: 'var(--font-body)',
          }}>
            ✅ Success! Your information has been submitted. Someone will contact you eventually.
            <br />
            <em style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
              (You have also been subscribed to our newsletter.)
            </em>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {fields.map((field, i) => (
              <div key={i}>
                <label style={{
                  display: 'block', marginBottom: '0.35rem',
                  color: 'var(--text2)', fontSize: '0.85rem',
                  fontFamily: 'var(--font-accent)',
                }}>
                  {field.label}
                  {field.required && <span style={{ color: 'var(--danger)' }}> *</span>}
                  {field.whyRequired && (
                    <span style={{ marginLeft: '0.5rem', color: 'var(--muted)', fontSize: '0.75rem' }}>
                      ({field.whyRequired})
                    </span>
                  )}
                </label>
                <FieldInput field={field} />
              </div>
            ))}
            <button type="submit" style={{
              marginTop: '0.5rem',
              background: 'var(--a1)', color: 'var(--bg)', border: 'none',
              padding: '0.9rem 2rem',
              fontFamily: 'var(--font-accent)', fontWeight: 'var(--font-accent-weight)',
              fontSize: '1rem', cursor: 'pointer',
              textTransform: 'uppercase',
            }}>
              Submit (You Cannot Unsend This)
            </button>
            <p style={{ fontSize: '0.72rem', color: 'var(--muted)', textAlign: 'center' }}>
              By submitting, you agree to our terms (47 pages), privacy policy,
              and consent to receiving emails until the end of time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
