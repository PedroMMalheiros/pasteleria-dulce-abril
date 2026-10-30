/** Resolve public assets using the same base path as the compiled application. */
export function assetUrl(filename: string): string {
  return `${import.meta.env.BASE_URL}assets/${filename}`;
}
