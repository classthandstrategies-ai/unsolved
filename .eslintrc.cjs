/* ESLint config for the React + Vite app. Kept intentionally lean: recommended
   rules plus the React Hooks rules and Vite's fast-refresh guard. */
module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // Data modules export helper functions alongside constants; that's fine.
    'react/prop-types': 'off',
  },
  ignorePatterns: ['dist', 'node_modules'],
};
