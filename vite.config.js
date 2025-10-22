import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones para producción
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa React en su propio chunk
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Mejora el tamaño de los chunks
    chunkSizeWarningLimit: 600,
  },
  // Optimización de servidor de desarrollo
  server: {
    port: 3000,
    open: true,
  },
  // Optimización de preview
  preview: {
    port: 4173,
    open: true,
  },
})
