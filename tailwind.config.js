/**
 * Tailwind theme tokens transcribed directly from design.md.
 *
 * Every value here mirrors a `{token}` from the design system so components can
 * consume named utilities (bg-canvas, text-ink, rounded-lg, font-display)
 * instead of inline hex — keeping the "warm editorial / case-file" look
 * consistent and tunable in one place.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Class strategy: a `dark` class on <html> flips dark mode. The class is set
  // by an inline script in index.html before paint to avoid a theme flash.
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand & accent
        primary: '#cc785c',
        'primary-active': '#a9583e',
        'primary-disabled': '#e6dfd8',
        'accent-teal': '#5db8a6',
        'accent-amber': '#e8a55a',

        // Surfaces
        canvas: '#faf9f5',
        'surface-soft': '#f5f0e8',
        'surface-card': '#efe9de',
        'surface-cream-strong': '#e8e0d2',
        'surface-dark': '#181715',
        'surface-dark-elevated': '#252320',
        'surface-dark-soft': '#1f1e1b',
        hairline: '#e6dfd8',
        'hairline-soft': '#ebe6df',

        // Text
        ink: '#141413',
        'body-strong': '#252523',
        body: '#3d3d3a',
        muted: '#6c6a64',
        'muted-soft': '#8e8b82',
        'on-primary': '#ffffff',
        'on-dark': '#faf9f5',
        'on-dark-soft': '#a09d96',

        // Semantic
        success: '#5db872',
        warning: '#d4a017',
        error: '#c64545',
      },
      fontFamily: {
        // Display = serif (Copernicus substitute), body = humanist sans (Inter),
        // mono = case-file metadata / coordinates (JetBrains Mono).
        display: ['"Cormorant Garamond"', 'Garamond', '"Times New Roman"', 'serif'],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing }] — see design.md typography table.
        'display-xl': ['64px', { lineHeight: '1.05', letterSpacing: '-1.5px' }],
        'display-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-1px' }],
        'display-md': ['36px', { lineHeight: '1.15', letterSpacing: '-0.5px' }],
        'display-sm': ['28px', { lineHeight: '1.2', letterSpacing: '-0.3px' }],
        'title-lg': ['22px', { lineHeight: '1.3' }],
        'title-md': ['18px', { lineHeight: '1.4' }],
        'title-sm': ['16px', { lineHeight: '1.4' }],
        'body-md': ['16px', { lineHeight: '1.55' }],
        'body-sm': ['14px', { lineHeight: '1.55' }],
        caption: ['13px', { lineHeight: '1.4' }],
        'caption-uppercase': ['12px', { lineHeight: '1.4', letterSpacing: '1.5px' }],
        code: ['14px', { lineHeight: '1.6' }],
      },
      spacing: {
        // 4px base unit; `section` (96px) is the rhythm between major bands.
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
        section: '96px',
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        pill: '9999px',
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        // The system uses shadow rarely; this is the one documented hover lift.
        subtle: '0 1px 3px rgba(20,20,19,0.08)',
      },
    },
  },
  plugins: [],
};
