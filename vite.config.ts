import { fileURLToPath, URL } from 'url';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { VitePWA } from 'vite-plugin-pwa';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    UnoCSS(),
    VueI18nPlugin({
      compositionOnly: true,
      include: fileURLToPath(new URL('./src/locales/lang/**', import.meta.url)),
    }),
    VitePWA({
      registerType: 'autoUpdate',
    }),
    AutoImport({
      imports: ['vue', 'pinia'],
    }),
    // basicSsl(),
    splitVendorChunkPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  esbuild: {
    drop: command === 'build' ? ['console', 'debugger'] : [],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
}));
