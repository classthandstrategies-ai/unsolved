import SpikeMark from './SpikeMark.jsx';

/**
 * Small sun/moon glyph for the theme toggle. Shows the icon for the theme the
 * button will switch TO, which is the conventional affordance.
 */
function ThemeIcon({ theme }) {
  if (theme === 'dark') {
    // Currently dark → button switches to light → show a sun.
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="4" />
        <path
          strokeLinecap="round"
          d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4l1.4-1.4"
        />
      </svg>
    );
  }
  // Currently light → button switches to dark → show a moon.
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

/**
 * Cream top navigation bar (design.md `top-nav`): 64px tall, canvas background,
 * spike-mark + wordmark at left. The right-side cluster carries the archive's
 * count, a theme toggle, and a source link rather than a marketing CTA — this is
 * an archive, not a product page. In dark mode the bar becomes the dark surface.
 */
export default function TopNav({ count, theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-[1000] h-16 border-b border-hairline bg-canvas/90 backdrop-blur dark:border-white/10 dark:bg-surface-dark/90">
      <div className="mx-auto flex h-full max-w-content items-center justify-between px-md md:px-lg">
        <a href="/" className="flex items-center gap-xs text-ink dark:text-on-dark">
          <SpikeMark className="h-5 w-5" title="Unsolved" />
          <span className="font-display text-title-lg tracking-tight">Unsolved</span>
          <span className="ml-2 hidden text-caption text-muted dark:text-on-dark-soft sm:inline">
            The Last Mysteries Map
          </span>
        </a>

        <div className="flex items-center gap-md">
          <span className="hidden font-mono text-caption text-muted-soft md:inline">
            {count} cases on file
          </span>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-pressed={theme === 'dark'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-hairline bg-canvas text-ink transition-colors hover:bg-surface-card dark:border-white/10 dark:bg-surface-dark-elevated dark:text-on-dark dark:hover:bg-surface-dark-soft"
          >
            <ThemeIcon theme={theme} />
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary dark:border-white/10 dark:bg-surface-dark-elevated dark:text-on-dark dark:hover:bg-surface-dark-soft"
          >
            Source
          </a>
        </div>
      </div>
    </header>
  );
}
