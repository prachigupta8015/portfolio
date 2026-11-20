/**
 * @file site.ts
 * Site-wide URL used by metadata, sitemap, robots and structured data.
 * Set NEXT_PUBLIC_SITE_URL to the deployed domain so absolute URLs are correct.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
