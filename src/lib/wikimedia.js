/**
 * Resolve a real lead image for a mystery from its Wikipedia article.
 *
 * We use Wikipedia's REST "summary" endpoint, which is keyless and serves
 * permissive CORS headers (so it works from the browser), and returns the
 * article's lead image plus a canonical page URL for attribution:
 *   https://en.wikipedia.org/api/rest_v1/page/summary/{title}
 *
 * This is why a new mystery needs only a `wikipedia:` title — no hardcoded,
 * rot-prone image URLs ever ship. Images remain under their own Wikimedia
 * Commons licenses; we link back to the source article as attribution.
 */

const ENDPOINT = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

// In-memory cache (per session) keyed by article title, so the case-file panel
// reuses whatever the index card already fetched and we never refetch a title.
const cache = new Map();

export function fetchWikiImage(title) {
  if (!title) return Promise.resolve(null);
  if (cache.has(title)) return cache.get(title);

  const promise = fetch(ENDPOINT + encodeURIComponent(title), {
    headers: { Accept: 'application/json' },
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Wikipedia summary ${res.status}`);
      return res.json();
    })
    .then((data) => ({
      // `thumbnail` is a small lead image; `originalimage` is the full-res one.
      thumb: data.thumbnail?.source ?? null,
      full: data.originalimage?.source ?? data.thumbnail?.source ?? null,
      pageUrl:
        data.content_urls?.desktop?.page ??
        `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`,
      description: data.description ?? null,
    }))
    .catch((err) => {
      // Don't poison the cache with a rejected promise — drop it so a later
      // mount can retry, and resolve to null so the UI shows its placeholder.
      cache.delete(title);
      console.warn(`[wikimedia] could not load image for "${title}":`, err.message);
      return null;
    });

  cache.set(title, promise);
  return promise;
}
