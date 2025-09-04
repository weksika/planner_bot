import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // убедитесь, что эта директория корректна
    rollupOptions: {
      external: ['@telegram-apps/sdk'],
    },
  },
});