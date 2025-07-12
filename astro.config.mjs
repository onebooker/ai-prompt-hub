import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aiprompthub.vercel.app',
  integrations: [tailwind()],
});
