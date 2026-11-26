import { getBasePath } from './routes';

/**
 * Resolves static asset paths correctly across any hosting environment,
 * including GitHub Pages subpaths (e.g. /my-repo/), nested routes (e.g. /my-repo/fr/senegal),
 * custom domains, and local dev.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const envBase = import.meta.env.BASE_URL;
  if (envBase && envBase.startsWith('/')) {
    const normalizedBase = envBase.endsWith('/') ? envBase : `${envBase}/`;
    return `${normalizedBase}${cleanPath}`;
  }
  const runtimeBase = getBasePath();
  return runtimeBase ? `${runtimeBase}/${cleanPath}` : `/${cleanPath}`;
}
