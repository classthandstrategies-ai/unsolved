import { CATEGORIES } from '../data/categories.js';

/**
 * Category filter row (design.md `category-tab` / `category-tab--active`).
 * Behaves as a single-select toggle: clicking the active category clears it
 * back to "All". A small colour swatch on each tab ties the filter to the pin
 * colours on the map.
 */
export default function FilterBar({ active, onChange, counts }) {
  return (
    <div
      className="flex flex-wrap items-center gap-xs"
      role="group"
      aria-label="Filter mysteries by category"
    >
      <button
        type="button"
        onClick={() => onChange(null)}
        aria-pressed={active === null}
        className={`category-tab ${active === null ? 'category-tab--active' : ''}`}
      >
        All
        <span className="ml-1.5 font-mono text-caption text-muted-soft">{counts.all}</span>
      </button>

      {CATEGORIES.map((cat) => {
        const isActive = active === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onChange(isActive ? null : cat.id)}
            aria-pressed={isActive}
            className={`category-tab inline-flex items-center gap-1.5 ${
              isActive ? 'category-tab--active' : ''
            }`}
          >
            <span
              className="inline-block h-2.5 w-2.5 rounded-pill"
              style={{ backgroundColor: cat.color }}
              aria-hidden="true"
            />
            {cat.label}
            <span className="font-mono text-caption text-muted-soft">{counts[cat.id] ?? 0}</span>
          </button>
        );
      })}
    </div>
  );
}
