import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // یہاں ہم Vite کو پروجیکٹ کے باہر کے فولڈرز تک رسائی دے رہے ہیں
      allow: ['..']
    }
  }
});
