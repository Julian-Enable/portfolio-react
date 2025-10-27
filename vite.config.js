import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimizaciones para producción
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa React en su propio chunk
          'react-vendor': ['react', 'react-dom'],
          // Separa react-icons (muy pesado)
          'icons': ['react-icons/fa', 'react-icons/si'],
          // Separa librerías de animación
          'animation': ['lenis', 'gsap']
        },
      },
    },
    // Mejora el tamaño de los chunks
    chunkSizeWarningLimit: 600,
    // Optimizar assets
    assetsInlineLimit: 4096, // Inline assets < 4kb como base64
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
