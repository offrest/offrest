import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: false, // WebSocket 비활성화
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `
        //   @import "./src/styles/variables.scss";
        // `,
      },
    },
  },
  build: {
    rollupOptions: {
      external: ['@capacitor/keyboard'] 
    }
  }
})
