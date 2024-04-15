import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';
import presetAnimations from 'unocss-preset-animations';
import { presetShadcn } from 'unocss-preset-shadcn';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAnimations(),
    presetTypography(),
    presetShadcn(),
  ],
  extractors: [extractorSvelte()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{js,ts}',
      ],
    },
  },
});
