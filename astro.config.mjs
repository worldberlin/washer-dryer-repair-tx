import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://washer-dryer-repair-tx.netlify.app/',
  output: 'static',
  integrations: [tailwind()]
});
