import { CATEGORY_BY_ID } from '../data/categories.js';
import MysteryImage from './MysteryImage.jsx';

/**
 * The "Mystery of the Day" feature (design.md `callout-card-coral`). This is the
 * one place the brief invites a full-bleed coral moment — the spec reserves the
 * coral surface for exactly this kind of single, deliberate call-to-explore.
 *
 * The entry is chosen deterministically per calendar day (see
 * getMysteryOfTheDay in the data module), so it is stable on reload.
 */
export default function MysteryOfTheDay({ mystery, onOpen }) {
  if (!mystery) return null;
  const category = CATEGORY_BY_ID[mystery.category];

  return (
    <div className="flex flex-col gap-lg rounded-lg bg-primary p-lg text-on-primary sm:flex-row sm:items-center sm:p-xl">
      <div className="flex-1">
        <div className="mb-xs flex items-center gap-xs">
          <span className="badge-coral border border-white/30 bg-white/15">Mystery of the Day</span>
          <span className="font-mono text-caption uppercase tracking-wide text-on-primary/80">
            {category.label}
          </span>
        </div>

        <h2 className="font-display text-display-sm leading-tight text-on-primary">
          {mystery.title}
        </h2>
        <p className="mt-xs max-w-prose text-body-md text-on-primary/90">{mystery.summary}</p>

        <button type="button" onClick={() => onOpen(mystery)} className="btn-on-color mt-md">
          Open the case file
        </button>
      </div>

      {/* Real lead image, framed on a cream mat to sit cleanly on the coral. */}
      <MysteryImage
        mystery={mystery}
        variant="full"
        className="h-40 w-full rounded-lg ring-1 ring-white/30 sm:h-44 sm:w-64 sm:shrink-0"
      />
    </div>
  );
}
