import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: './', // ← thay bằng tên repo của bạn
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    proxy: {
      '/posts': {
        target: 'http://localhost:3003',  // 👈 Port 3003
        changeOrigin: true,
      }
    }
  }
})
