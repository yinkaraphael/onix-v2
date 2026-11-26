import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

function resolveBasePath(): string {
  const explicit = process.env.VITE_BASE_PATH?.trim();
  if (explicit) {
    const withLeading = explicit.startsWith('/') || explicit.startsWith('./') ? explicit : `/${explicit}`;
    return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
  }

  const ghRepo = process.env.GITHUB_REPOSITORY?.trim();
  if (ghRepo && ghRepo.includes('/')) {
    const repoName = ghRepo.split('/')[1];
    if (repoName && !repoName.endsWith('.github.io')) {
      return `/${repoName}/`;
    }
    return '/';
  }

  return './';
}

export default defineConfig(() => {
  return {
    base: resolveBasePath(),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      strictPort: true,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
