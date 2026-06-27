import { useEffect, useState } from 'react';
import { fetchWikiImage } from '../lib/wikimedia.js';
import { CATEGORY_BY_ID } from '../data/categories.js';
import SpikeMark from './SpikeMark.jsx';

/**
 * Renders a mystery's real lead image, fetched from Wikipedia by article title.
 *
 * States, all handled so the build never ships a broken <img>:
 *   loading → a quiet shimmer
 *   ready   → the real photo (lazy-loaded), optionally with a source link
 *   none/error → a neutral placeholder tinted by category (spike-mark glyph)
 *
 * `variant="full"` requests the high-res image (case-file hero); the default
 * uses the lighter thumbnail (index cards / featured callout).
 */
export default function MysteryImage({
  mystery,
  variant = 'thumb',
  className = '',
  showSource = false,
}) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let active = true;
    setStatus('loading');
    setData(null);

    fetchWikiImage(mystery.wikipedia).then((result) => {
      if (!active) return;
      if (result && (variant === 'full' ? result.full : result.thumb)) {
        setData(result);
        setStatus('ready');
      } else {
        setStatus('none');
      }
    });

    return () => {
      active = false;
    };
  }, [mystery.wikipedia, variant]);

  const category = CATEGORY_BY_ID[mystery.category];

  if (status === 'ready') {
    const src = variant === 'full' ? data.full : data.thumb;
    return (
      <figure className={`relative overflow-hidden ${className}`}>
        <img src={src} alt={mystery.title} loading="lazy" className="h-full w-full object-cover" />
        {showSource && (
          <figcaption className="absolute bottom-0 right-0 bg-ink/60 px-2 py-1 text-[11px] text-on-dark">
            Image:{' '}
            <a href={data.pageUrl} target="_blank" rel="noreferrer noopener" className="underline">
              Wikimedia
            </a>
          </figcaption>
        )}
      </figure>
    );
  }

  // loading | none | error → placeholder. A subtle category-tinted panel with
  // the spike-mark, so missing media still reads as "an archive plate".
  return (
    <div
      className={`flex items-center justify-center bg-surface-cream-strong dark:bg-surface-dark-elevated ${
        status === 'loading' ? 'animate-pulse' : ''
      } ${className}`}
      aria-hidden="true"
    >
      <SpikeMark className="h-8 w-8 opacity-30" style={{ color: category.color }} />
    </div>
  );
}
