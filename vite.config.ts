/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        'node_modules',
        '**/*.style.ts',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/test/**',
        '**/*.config.js',
        '**/*.config.ts',
        '**/*.d.ts',
        'src/main.tsx',
      ],
    },
  },
})
