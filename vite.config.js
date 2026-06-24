import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ٹرمیکس میں لوکل ہوسٹ کے لیے ضروری ہے
    port: 5173
  }
});
