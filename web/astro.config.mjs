import { defineConfig } from 'astro/config';
import { resolve } from 'path';

export default defineConfig({
  site: 'https://elo-lang.org',
  base: '/',
  output: 'static',
  server: { port: 4322 },
  markdown: {
    // Disable Shiki syntax highlighting - we use our own custom highlighter
    // that supports Elo language and matches our theme system
    syntaxHighlight: false
  },
  vite: {
    resolve: {
      alias: {
        '@enspirit/elo': resolve('../src/index.ts')
      },
      // Force all @codemirror packages to resolve from web/node_modules
      // This prevents duplicate instances when using file: linked packages
      dedupe: [
        '@codemirror/state',
        '@codemirror/view',
        '@codemirror/language',
        '@codemirror/autocomplete',
        '@codemirror/commands',
        '@lezer/common',
        '@lezer/highlight',
        '@lezer/lr'
      ]
    },
    optimizeDeps: {
      include: [
        'luxon'
      ]
    }
  }
});
