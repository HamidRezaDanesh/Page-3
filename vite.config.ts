import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      // ⚡ Optimize JSX runtime
      jsxRuntime: 'automatic',
      // ⚡ Remove dev-only code in production
      babel: {
        plugins: process.env.NODE_ENV === 'production' ? ['babel-plugin-transform-remove-console'] : [],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // ⚡ Disable in production
    minify: 'terser', // ⚡ Better minification
    terserOptions: {
      compress: {
        drop_console: true, // ⚡ Remove console.logs
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // ⚡ Better code splitting
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'i18n': ['react-i18next', 'i18next', 'i18next-browser-languagedetector', 'i18next-http-backend'],
          'icons': ['lucide-react'],
        },
        // ⚡ Clean file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // ⚡ Optimize chunk size
    chunkSizeWarningLimit: 600, // Reduced from 1000
    // ⚡ CSS code splitting
    cssCodeSplit: true,
  },
  // ⚡ Optimize dependencies
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'react-i18next',
      'lucide-react',
    ],
    // ⚡ Force pre-bundle these
    force: true,
  },
  // ⚡ Enable esbuild optimization
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
});