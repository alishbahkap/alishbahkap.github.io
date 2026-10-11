/**
 * Creative / commerce projects. Each entry drives a tile on /creative and its
 * own page at /creative/<slug>.
 *
 * Image: public/work/<slug>-cover.jpg (or .png/.webp). The tile shows it cropped
 * to `ratio`; the project page shows the whole picture, with `description`
 * underneath.
 *
 * Tailwind finds class names by scanning source files, so ratios must be written
 * out in full ("aspect-[3/4]"), never built from pieces.
 */

export const CATEGORIES = ["brand", "shopify", "campaign"] as const;
export type CreativeCategory = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<CreativeCategory, string> = {
  brand: "Brand",
  shopify: "Shopify",
  campaign: "Campaign",
};

export function isCategory(value: string | null | undefined): value is CreativeCategory {
  return CATEGORIES.includes(value as CreativeCategory);
}

export type CreativeProject = {
  slug: string;
  title: string;
  category: CreativeCategory;
  /** Shape of the tile on /creative (and of the placeholder until a photo exists). */
  ratio: string;
  /**
   * Text under the picture on the project page. One string per paragraph,
   * e.g. ["First paragraph.", "Second paragraph."]. Leave as [] to show no text.
   */
  description: string[];
};

// Ratios use each image's exact pixel size (width/height), so tiles never crop.
// Order here is the order in the gallery (it fills top-to-bottom, column by column).
export const creativeProjects: CreativeProject[] = [
  {
    slug: "nuve-luma-arancio",
    title: "Nuvé Luma Arancio",
    category: "shopify",
    ratio: "aspect-[2040/1162]",
    description: [],
  },
  {
    slug: "retropixel-pro-v2",
    title: "RetroPixel Pro V2",
    category: "shopify",
    ratio: "aspect-[1290/2209]",
    description: [],
  },
  {
    slug: "nuve-luma-mandala",
    title: "Nuvé Luma Mandala",
    category: "shopify",
    ratio: "aspect-[2048/1228]",
    description: [],
  },
  {
    slug: "luma-arancio-features",
    title: "Luma Arancio — Feature Sections",
    category: "shopify",
    ratio: "aspect-[1825/1218]",
    description: [],
  },
];
