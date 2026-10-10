/**
 * Creative / commerce projects. Each entry drives a tile on /creative and its
 * own page at /creative/<slug>.
 *
 * Images are found by slot name in public/work: the tile uses "<slug>-cover",
 * the project page uses each entry in `images`.
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

export type CreativeImage = { slot: string; ratio: string; caption?: string };

export type CreativeProject = {
  slug: string;
  title: string;
  category: CreativeCategory;
  /** Shape of the tile on /creative. */
  ratio: string;
  description?: string;
  images: CreativeImage[];
  placeholder?: boolean;
};

const RATIOS = ["aspect-square", "aspect-[3/4]", "aspect-[4/3]", "aspect-[2/3]", "aspect-[5/4]", "aspect-[4/5]"];

const placeholderImages = (slug: string): CreativeImage[] =>
  RATIOS.map((ratio, i) => ({ slot: `${slug}-${i + 1}`, ratio, caption: "Ex." }));

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
  images: placeholderImages(`example-${i + 1}`),
  placeholder: true,
}));
