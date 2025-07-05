import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Para SSR

export default defineConfig({
  output: 'server', // Habilita SSR
  adapter: vercel()
});