import { useMemo, useState } from 'react';
import useTheme from './hooks/useTheme.js';
import MysteryImage from './components/MysteryImage.jsx';
import TopNav from './components/TopNav.jsx';
import FilterBar from './components/FilterBar.jsx';
import MysteryMap from './components/MysteryMap.jsx';
import MysteryPanel from './components/MysteryPanel.jsx';
import MysteryOfTheDay from './components/MysteryOfTheDay.jsx';
import { MYSTERIES, getMysteryOfTheDay } from './data/mysteries.js';
import { CATEGORIES } from './data/categories.js';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  // null = show all categories; otherwise a category id.
  const [activeCategory, setActiveCategory] = useState(null);
  // The mystery whose case file is currently open (null = none).
  const [selected, setSelected] = useState(null);

  // Chosen once per render; stable across reloads because it is keyed to the
  // calendar day rather than Math.random().
  const mysteryOfTheDay = useMemo(() => getMysteryOfTheDay(), []);

  const visible = useMemo(
    () => (activeCategory ? MYSTERIES.filter((m) => m.category === activeCategory) : MYSTERIES),
    [activeCategory]
  );

  // Per-category counts for the filter tabs, computed once.
  const counts = useMemo(() => {
    const c = { all: MYSTERIES.length };
    for (const cat of CATEGORIES) {
      c[cat.id] = MYSTERIES.filter((m) => m.category === cat.id).length;
    }
    return c;
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <TopNav count={MYSTERIES.length} theme={theme} onToggleTheme={toggleTheme} />

      {/* Intro band — cream canvas, editorial voice */}
      <section className="mx-auto w-full max-w-content px-md py-xl md:px-lg">
        <h1 className="max-w-3xl font-display text-display-lg leading-tight text-ink dark:text-on-dark md:text-display-xl">
          A map of what we still don’t know.
        </h1>
        <p className="mt-md max-w-2xl text-title-md text-body dark:text-on-dark-soft">
          A research archive of genuinely unresolved historical mysteries — each one filed with what
          is documented, what remains specifically unexplained, and an honest account of what
          “unsolved” really means in that case.
        </p>

        <div className="mt-lg">
          <MysteryOfTheDay mystery={mysteryOfTheDay} onOpen={setSelected} />
        </div>
      </section>

      {/* Filter + map band */}
      <section className="mx-auto w-full max-w-content px-md pb-section md:px-lg">
        <div className="mb-md flex flex-col gap-sm">
          <FilterBar active={activeCategory} onChange={setActiveCategory} counts={counts} />
          <p className="font-mono text-caption text-muted-soft">
            Showing {visible.length} of {MYSTERIES.length} cases. Select a pin to open its file.
          </p>
        </div>

        {/* The atlas. Fixed height container so Leaflet can size itself. */}
        <div className="h-[60vh] min-h-[420px] overflow-hidden rounded-xl border border-hairline dark:border-white/10">
          <MysteryMap
            mysteries={visible}
            onSelect={setSelected}
            featuredId={mysteryOfTheDay.id}
            theme={theme}
          />
        </div>

        {/* Index list — a text fallback / archival index beneath the map, so the
            content is reachable without the map and reads like a case index. */}
        <ul className="mt-lg grid grid-cols-1 gap-sm sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => setSelected(m)}
                className="flex w-full flex-col overflow-hidden rounded-lg border border-hairline bg-surface-card text-left transition-colors hover:bg-surface-cream-strong dark:border-white/10 dark:bg-surface-dark-elevated dark:hover:bg-surface-dark-soft"
              >
                <MysteryImage mystery={m} className="aspect-[16/10] w-full" />
                <span className="flex flex-col p-md">
                  <span className="font-display text-title-md text-ink dark:text-on-dark">
                    {m.title}
                  </span>
                  <span className="mt-1 font-mono text-caption text-muted dark:text-on-dark-soft">
                    {m.era} · {m.location.place}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer — dark navy, closes the page (design.md `footer`) */}
      <footer className="mt-auto border-t border-transparent bg-surface-dark py-xl text-on-dark-soft dark:border-white/10">
        <div className="mx-auto max-w-content px-md md:px-lg">
          <p className="max-w-2xl text-body-sm">
            Unsolved is an editorial archive. Entries summarise the documented record and label how
            supported each theory is; they do not assert paranormal explanations. Where a case is
            likely explainable or possibly a hoax, it says so.
          </p>
          <p className="mt-md font-mono text-caption text-on-dark-soft/70">
            Data compiled from public historical and scientific records. Lead images are fetched
            from Wikipedia / Wikimedia Commons and remain under their respective licenses. For
            research and curiosity, not investigation.
          </p>
        </div>
      </footer>

      <MysteryPanel mystery={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
