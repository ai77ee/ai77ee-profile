// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: 'Jersey 25',
      cssVariable: '--font-jersey-25',
      provider: fontProviders.fontsource(),
      // Specify weights that are actually used
      weights: [400],
      // Specify styles that are actually used
      styles: ['normal'],
      // Download more font formats
      formats: ['woff2', 'woff'],
    },
    {
      name: 'Share Tech Mono',
      cssVariable: '--font-share-tech-mono',
      provider: fontProviders.fontsource(),
      // Specify weights that are actually used
      weights: [400],
      // Specify styles that are actually used
      styles: ['normal'],
      // Download more font formats
      formats: ['woff2', 'woff'],
    },
    {
      name: 'Tranquility',
      cssVariable: '--font-tranquility',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/tranquility.ttf'],
          },
        ],
      },
    },
  ],
  adapter: vercel(),
});
