/**
 * Safely combines the Vite BASE_URL with an asset path.
 * Ensures no double slashes and handles both root and subfolder deployments.
 */
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // Remove trailing slash if present
  const cleanPath = path.startsWith("/") ? path : `/${path}`; // Ensure leading slash
  return `${base}${cleanPath}`;
};
