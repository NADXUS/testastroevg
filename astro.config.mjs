import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    define: {
      // Variables públicas
      'import.meta.env.PUBLIC_API_URL': JSON.stringify(process.env.PUBLIC_API_URL),
      'import.meta.env.PUBLIC_EPAYCO_PUBLIC_KEY': JSON.stringify(process.env.PUBLIC_EPAYCO_PUBLIC_KEY),
      'import.meta.env.PUBLIC_APP_URL': JSON.stringify(process.env.PUBLIC_APP_URL),
      'import.meta.env.PUBLIC_API_SENTRYDSN': JSON.stringify(process.env.PUBLIC_API_SENTRYDSN),
      'import.meta.env.PUBLIC_SITE_URL': JSON.stringify(process.env.PUBLIC_SITE_URL),

      // Variables privadas
      'import.meta.env.MY_API_KEY': JSON.stringify(process.env.MY_API_KEY),
      'import.meta.env.CRONJOB': JSON.stringify(process.env.CRONJOB),
    },
  },
});