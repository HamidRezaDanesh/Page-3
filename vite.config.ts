import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// ✅ فقط یک export default
export default defineConfig({
  plugins: [react()],
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
    sourcemap: true,
    // ⚡ Performance optimization
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          i18n: ['react-i18next', 'i18next'],
        },
      },
    },
    // ⚡ Chunk size optimization
    chunkSizeWarningLimit: 1000,
  },
  // ⚡ Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});