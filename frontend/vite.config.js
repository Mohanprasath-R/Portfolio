import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this starts with a slash
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: process.env.PORT || 5173, // Use the Render-provided port or fallback
  }, 
  build: {
    rollupOptions: {
      external: ['@emailjs/browser']
    }
  },
});
