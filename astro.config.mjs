// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    // Configuración opcional pero recomendada:
    edgeMiddleware: true,
    webAnalytics: {
      enabled: false // O true si quieres analytics de Vercel
    }
  })
});