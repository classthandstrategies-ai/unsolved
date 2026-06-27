/**
 * The Anthropic-style 4-spoke radial spike-mark, used as the wordmark prefix
 * and as an inline content marker (design.md treats this as a logo asset, not a
 * token). Rendered as inline SVG so it inherits `currentColor`.
 */
export default function SpikeMark({ className = '', title, style }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      style={style}
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="currentColor"
    >
      <path d="M16 3 L18 14 L16 16 L14 14 Z" />
      <path d="M16 29 L14 18 L16 16 L18 18 Z" />
      <path d="M3 16 L14 14 L16 16 L14 18 Z" />
      <path d="M29 16 L18 18 L16 16 L18 14 Z" />
    </svg>
  );
}
