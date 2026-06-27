import { useEffect } from 'react';
import { CATEGORY_BY_ID } from '../data/categories.js';
import MysteryImage from './MysteryImage.jsx';

/**
 * The full case file. Rendered as a slide-in drawer on a dark navy surface
 * (design.md `product-mockup-card-dark`) — the dark surface is what makes an
 * entry read as a "case file" pulled from the archive, in contrast to the cream
 * map view behind it.
 *
 * Sections are ordered to enforce the brief's honesty rules:
 *   facts → what is specifically unexplained → leading theories →
 *   an explicit framing of what "unsolved" means in THIS case → sources.
 */
export default function MysteryPanel({ mystery, onClose }) {
  // Close on Escape, and lock body scroll while the drawer is open.
  useEffect(() => {
    if (!mystery) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mystery, onClose]);

  if (!mystery) return null;

  const category = CATEGORY_BY_ID[mystery.category];

  return (
    <div
      className="fixed inset-0 z-[2000]"
      role="dialog"
      aria-modal="true"
      aria-label={mystery.title}
    >
      {/* Scrim */}
      <button
        type="button"
        aria-label="Close case file"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />

      {/* Drawer */}
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-xl flex-col bg-surface-dark text-on-dark shadow-subtle">
        {/* Header */}
        <div className="flex items-start justify-between gap-md border-b border-white/10 p-lg">
          <div>
            <div className="mb-xs flex items-center gap-xs">
              <span
                className="inline-block h-2.5 w-2.5 rounded-pill"
                style={{ backgroundColor: category.color }}
                aria-hidden="true"
              />
              <span className="font-mono text-caption-uppercase uppercase text-on-dark-soft">
                {category.label}
              </span>
            </div>
            <h2 className="font-display text-display-sm text-on-dark">{mystery.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md bg-surface-dark-elevated px-3 py-2 text-body-sm text-on-dark"
          >
            Close
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto p-lg">
          {/* Real lead image from Wikipedia (full-res), with source attribution. */}
          <MysteryImage
            mystery={mystery}
            variant="full"
            showSource
            className="mb-lg h-56 w-full rounded-lg"
          />

          {/* Filing metadata, in mono to read like a case-file header */}
          <dl className="mb-lg grid grid-cols-1 gap-sm rounded-lg bg-surface-dark-soft p-md font-mono text-body-sm sm:grid-cols-[auto,1fr]">
            <dt className="text-on-dark-soft">DATE / ERA</dt>
            <dd className="text-on-dark">{mystery.era}</dd>
            <dt className="text-on-dark-soft">LOCATION</dt>
            <dd className="text-on-dark">{mystery.location.place}</dd>
            <dt className="text-on-dark-soft">COORDS</dt>
            <dd className="text-on-dark">
              {mystery.location.lat.toFixed(3)}, {mystery.location.lng.toFixed(3)}
            </dd>
          </dl>

          <Section title="What is documented">
            <p>{mystery.summary}</p>
          </Section>

          <Section title="What remains unexplained">
            <p>{mystery.unexplained}</p>
          </Section>

          <Section title="Leading theories">
            <ul className="list-disc space-y-xs pl-5 marker:text-primary">
              {mystery.theories.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </Section>

          {/* The honest framing — visually emphasised with a coral rule, since
              it is the editorial point of the whole archive. */}
          <div className="mt-lg rounded-lg border-l-2 border-primary bg-surface-dark-elevated p-md">
            <h3 className="mb-xs font-mono text-caption-uppercase uppercase text-primary">
              What “unsolved” means here
            </h3>
            <p className="text-on-dark">{mystery.unsolvedMeaning}</p>
          </div>

          <Section title="Sources" className="mt-lg">
            <ul className="space-y-xs text-body-sm text-on-dark-soft">
              {mystery.sources.map((s, i) => (
                <li key={i}>— {s}</li>
              ))}
            </ul>
          </Section>
        </div>
      </aside>
    </div>
  );
}

/** Small labelled section wrapper to keep the body consistent. */
function Section({ title, children, className = '' }) {
  return (
    <section className={className}>
      <h3 className="mb-xs mt-lg font-mono text-caption-uppercase uppercase text-on-dark-soft first:mt-0">
        {title}
      </h3>
      <div className="text-body-md text-on-dark/90">{children}</div>
    </section>
  );
}
