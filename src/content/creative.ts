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
  /** Text under the picture on the project page. One string per paragraph. */
  description: string[];
  placeholder?: boolean;
};

// Wireframe placeholders, to be replaced with real projects.
const placeholders: [CreativeCategory, string][] = [
  ["brand", "aspect-square"],
  ["shopify", "aspect-[2/3]"],
  ["campaign", "aspect-[16/9]"],
  ["shopify", "aspect-[4/3]"],
  ["campaign", "aspect-square"],
  ["brand", "aspect-[3/4]"],
  ["campaign", "aspect-[4/3]"],
  ["brand", "aspect-[4/3]"],
  ["shopify", "aspect-[3/4]"],
];

export const creativeProjects: CreativeProject[] = placeholders.map(([category, ratio], i) => ({
  slug: `example-${i + 1}`,
  title: "Ex.",
  category,
  ratio,
  description: ["Project description."],
  placeholder: true,
}));
