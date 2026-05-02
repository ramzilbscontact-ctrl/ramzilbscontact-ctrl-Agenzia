import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), tailwindcss()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        target: 'es2020',
        cssCodeSplit: true,
        minify: 'esbuild',
        sourcemap: false,
        chunkSizeWarningLimit: 800,
        rollupOptions: {
          output: {
            // Vendor chunks isolés → cache long-terme stable + parallel download
            manualChunks: (id) => {
              if (!id.includes('node_modules')) return undefined;
              if (id.includes('react-dom') || id.includes('/react/')) return 'vendor-react';
              if (id.includes('react-router')) return 'vendor-router';
              if (id.includes('motion')) return 'vendor-motion';
              if (id.includes('@calcom/embed-react')) return 'vendor-cal';
              if (id.includes('lucide-react')) return 'vendor-icons';
              if (id.includes('posthog-js')) return 'vendor-posthog';
              if (id.includes('@google/genai')) return 'vendor-genai';
              // Tools lourds (html2canvas/jspdf/jszip/file-saver) — déjà en
              // dynamic import dans CarouselEditor → Rollup les chunke seuls
              return 'vendor-misc';
            },
          },
        },
      },
    };
});
