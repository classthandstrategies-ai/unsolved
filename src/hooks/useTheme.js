import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'unsolved-theme';

/** Read the theme already applied to <html> by the inline boot script. */
function getInitialTheme() {
  if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
    return 'dark';
  }
  return 'light';
}

/**
 * Owns the light/dark theme. The initial value is read from the class the inline
 * script in index.html set before paint (so React stays in sync with what's
 * already on screen — no flash). Toggling updates <html>, persists the choice,
 * and re-renders consumers (e.g. the map, which swaps tile providers).
 */
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* Persistence is best-effort; ignore if storage is unavailable. */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggleTheme };
}
