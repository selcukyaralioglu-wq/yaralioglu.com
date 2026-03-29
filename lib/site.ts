/**
 * Canonical site URL for metadata and hreflang.
 * - Production custom domain: set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://yaralioglu.com)
 * - Vercel preview: falls back to VERCEL_URL automatically
 */
export function getSiteUrl(): string {
  const custom = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (custom) {
    try {
      return new URL(
        custom.startsWith("http") ? custom : `https://${custom}`,
      ).origin;
    } catch {
      /* fall through */
    }
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://yaralioglu.com";
}
