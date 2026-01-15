import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // Cần import thêm thư viện path

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Cấu hình @ đại diện cho thư mục src
      '@': path.resolve(__dirname, './src'),
    },
  },
})