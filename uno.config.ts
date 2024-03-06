import { defineConfig, presetUno, presetIcons } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        mdi: () =>
          import('@iconify-json/material-symbols/icons.json').then(
            (i) => i.default
          ),
      },
    }),
  ],
});
