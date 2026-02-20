export default function Home() {
  return (
    <main style={{
      background: 'var(--app-bg)',
      color: 'var(--app-text)',
      minHeight: 'calc(100vh - 3rem)',
      padding: '4rem 2rem',
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="app-badge-glow" style={{
          display: 'inline-block',
          background: 'var(--app-accent)',
          color: '#fff',
          padding: '0.2rem 0.75rem',
          fontSize: '0.75rem',
          fontFamily: 'monospace',
          marginBottom: '1.5rem',
          letterSpacing: '0.15em',
        }}>
          ⭐ HACKATHON ENTRY: KILO LEAGUE &quot;WORST WEBSITE EVER&quot; ⭐
        </div>

        <h1 className="app-title" style={{
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          color: 'var(--app-text)',
          fontFamily: 'monospace',
          marginBottom: '1rem',
          letterSpacing: '-0.02em',
        }}>
          <span className="app-typewriter-wrap">
            <span className="app-typewriter-line1">THE FORCE AWAKENS</span>
          </span>
          <span className="app-typewriter-wrap">
            <span className="app-typewriter-line2" style={{ color: 'var(--app-accent)' }}>
              WEBSITE GENERATOR
            </span>
          </span>
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: 'var(--app-text)',
          opacity: 0.7,
          maxWidth: '600px',
          margin: '0 auto 2rem',
          lineHeight: 1.6,
        }}>
          Build any website. Build it terribly. Download the evidence.
          <br />
          <span style={{ fontSize: '0.85rem', opacity: 0.6 }}>
            (Passes lint and type-check. The irony is intentional.)
          </span>
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/generator"
            style={{
              display: 'inline-block',
              background: 'var(--app-accent)',
              color: '#fff',
              padding: '0.9rem 2.5rem',
              textDecoration: 'none',
              fontFamily: 'monospace',
              fontSize: '1rem',
              letterSpacing: '0.05em',
            }}
          >
            ► START GENERATING
          </a>
        </div>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: 'var(--app-border)',
          borderTop: '1px solid var(--app-border)',
          borderBottom: '1px solid var(--app-border)',
          margin: '0 0 4rem 0',
        }}
      >
        {[
          { value: '47,832', label: 'Pages Generated' },
          { value: '11', label: 'Lawsuits Pending' },
          { value: '4.2★', label: 'Average Rating' },
          { value: '0', label: 'Satisfied Users' },
        ].map(({ value, label }) => (
          <div
            key={label}
            style={{
              background: 'var(--app-bg)',
              padding: '2rem 1rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '2.25rem',
                fontWeight: 800,
                color: 'var(--app-accent)',
                fontFamily: 'monospace',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--app-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontFamily: 'monospace',
          color: 'var(--app-accent)',
          fontSize: '1rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          borderBottom: '1px solid var(--app-border)',
          paddingBottom: '0.5rem',
        }}>
          HOW IT WORKS
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
        }}>
          {[
            { step: '01', title: 'Choose Category', desc: 'Portfolio, Startup, Product, Finance, Local, Event, or Campaign' },
            { step: '02', title: 'Configure Chaos', desc: 'Set layout, sections, color scheme, fonts, and chaos level 0–10' },
            { step: '03', title: 'Generate Disaster', desc: 'One click produces a unique terrible website based on your seed' },
            { step: '04', title: 'Download Evidence', desc: 'ZIP file with self-contained HTML + CSS. Share your seed to reproduce it.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="app-tile" style={{
              background: 'var(--app-surface)',
              border: '1px solid var(--app-border)',
              padding: '1.25rem',
            }}>
              <div style={{ color: 'var(--app-accent)', fontFamily: 'monospace', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                STEP {step}
              </div>
              <h3 style={{ color: 'var(--app-text)', fontFamily: 'monospace', fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                {title}
              </h3>
              <p style={{ color: 'var(--app-text)', opacity: 0.6, fontSize: '0.85rem', lineHeight: 1.5 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contaminated preview mockup */}
      <section style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2
          style={{
            color: 'var(--app-text)',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            fontFamily: 'monospace',
          }}
        >
          EXAMPLE OUTPUT
        </h2>
        <p
          style={{
            color: 'var(--app-muted)',
            fontSize: '0.85rem',
            marginBottom: '2rem',
            fontFamily: 'monospace',
          }}
        >
          actual results may vary. probably worse.
        </p>

        {/* Browser chrome frame */}
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            border: '2px solid var(--app-border)',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 0 60px rgba(124, 58, 237, 0.25)',
          }}
        >
          {/* Title bar */}
          <div
            style={{
              background: '#2a2a2a',
              padding: '0.6rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            {/* Traffic lights */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {['#ff5f56', '#ffbd2e', '#27c93f'].map((c) => (
                <div
                  key={c}
                  style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }}
                />
              ))}
            </div>
            {/* Fake URL bar */}
            <div
              style={{
                flex: 1,
                background: '#1a1a1a',
                borderRadius: '4px',
                padding: '0.2rem 0.75rem',
                fontSize: '0.72rem',
                color: '#888',
                fontFamily: 'monospace',
                textAlign: 'left',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              worst-website-generator.kiloapps.io/preview/42
            </div>
          </div>

          {/* Fake generated page content */}
          <div
            style={{
              background: '#000080',
              padding: '2.5rem 2rem',
              minHeight: '280px',
              fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Tiled star background */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'radial-gradient(circle, #ffff00 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                opacity: 0.18,
                pointerEvents: 'none',
              }}
            />

            {/* Fake hero headline */}
            <h1
              style={{
                color: '#FF00FF',
                fontSize: '1.75rem',
                textAlign: 'center',
                textShadow:
                  '2px 2px 0 #00FFFF, -2px -2px 0 #FF0000, 0 0 20px #FF00FF',
                marginBottom: '0.75rem',
                position: 'relative',
              }}
            >
              ✨ WELCOME TO MY WEBSITE ✨
            </h1>

            {/* Fake subtitle */}
            <p
              style={{
                color: '#00FF00',
                textAlign: 'center',
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                letterSpacing: '0.1em',
                position: 'relative',
              }}
            >
              The BEST website on the ENTIRE internet!!!
            </p>

            {/* Tilted CTA button */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem', position: 'relative' }}>
              <button
                style={{
                  background: '#FF0000',
                  color: '#FFFF00',
                  border: '4px outset #FF8800',
                  padding: '0.6rem 1.5rem',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transform: 'rotate(-3deg)',
                  boxShadow: '4px 4px 0 #000',
                  letterSpacing: '0.05em',
                }}
              >
                CLICK HERE!! IT&apos;S FREE!!
              </button>
            </div>

            {/* Under construction badge */}
            <div
              style={{
                textAlign: 'center',
                color: '#FFFF00',
                fontSize: '0.85rem',
                position: 'relative',
                animation: 'blink 1s step-end infinite',
              }}
            >
              🚧 UNDER CONSTRUCTION 🚧
            </div>

            {/* Hit counter */}
            <div
              style={{
                position: 'absolute',
                bottom: '0.75rem',
                right: '1rem',
                background: '#000',
                border: '1px solid #00FF00',
                padding: '0.15rem 0.5rem',
                fontSize: '0.65rem',
                color: '#00FF00',
                fontFamily: 'monospace',
              }}
            >
              visitors: 0000047832
            </div>
          </div>
        </div>
      </section>

      {/* "Testimonials" (fake) */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontFamily: 'monospace', color: 'var(--app-accent)', fontSize: '1rem',
          letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem',
          borderBottom: '1px solid var(--app-border)', paddingBottom: '0.5rem',
        }}>
          WHAT OUR USERS SAY
        </h2>
        {[
          { quote: "Finally, a website generator that matches my design skills.", attr: "— Every user, probably" },
          { quote: "I showed this to a client. They fired me. Worth it.", attr: "— Former web designer" },
          { quote: "Our legal team has reviewed this and we are not commenting at this time.", attr: "— Anonymous (legal)" },
        ].map(({ quote, attr }, i) => (
          <div key={i} className="app-tile" style={{
            background: 'var(--app-surface)', border: '1px solid var(--app-border)',
            padding: '1rem 1.25rem', marginBottom: '0.75rem', fontFamily: 'monospace',
          }}>
            <p style={{ color: 'var(--app-text)', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
              &quot;{quote}&quot;
            </p>
            <p style={{ color: 'var(--app-text)', opacity: 0.5, fontSize: '0.8rem' }}>{attr}</p>
          </div>
        ))}
      </section>

      {/* Footer note */}
      <footer style={{
        borderTop: '1px solid var(--app-border)', paddingTop: '1.5rem',
        textAlign: 'center', fontFamily: 'monospace',
      }}>
        <p style={{ color: 'var(--app-text)', opacity: 0.4, fontSize: '0.75rem' }}>
          Built for the Kilo League &quot;Worst Website Ever&quot; hackathon. Feb 2026.
          <br />
          Passes bun typecheck &amp;&amp; bun lint. The irony is intentional.
          <br />
          Same seed = same disaster every time. Share responsibly.
          <br />
          <a
            href="https://github.com/jacek-mar/worst-website-generator-v2"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--app-text)', opacity: 0.6, textDecoration: 'none' }}
          >
            github.com/jacek-mar/worst-website-generator-v2
          </a>
        </p>
      </footer>
    </main>
  );
}
