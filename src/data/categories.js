/**
 * The four mystery categories used by the filter bar, map pins, and badges.
 *
 * `color` is a literal hex (not a Tailwind token) because Leaflet renders pin
 * markers as inline-styled DOM outside React's Tailwind scope. The hues are
 * drawn from the design.md palette: ink, coral, teal, amber.
 */
export const CATEGORIES = [
  {
    id: 'disappearances',
    label: 'Disappearances',
    description: 'People, crews, or settlements that vanished without a resolved account.',
    color: '#141413', // ink
  },
  {
    id: 'ciphers',
    label: 'Ciphers & Documents',
    description: 'Texts and codes that have resisted decipherment or authentication.',
    color: '#cc785c', // coral / primary
  },
  {
    id: 'events',
    label: 'Unexplained Events',
    description: 'Discrete incidents whose cause or perpetrator was never established.',
    color: '#5db8a6', // teal
  },
  {
    id: 'phenomena',
    label: 'Unexplained Phenomena',
    description: 'Recurring or one-off observations lacking a confirmed natural source.',
    color: '#e8a55a', // amber
  },
];

/** Lookup map keyed by category id, for O(1) access in components. */
export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
