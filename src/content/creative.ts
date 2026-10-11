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
  /** Logos: shown whole and padded on a soft panel instead of filling the frame. */
  logo?: boolean;
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

  // Brand identity (described by what each brand is, not by name)
  {
    slug: "advertising-logo",
    title: "Advertising Company Logo",
    category: "brand",
    ratio: "aspect-square",
    description: ["Logo for an advertising company."],
    logo: true,
  },
  {
    slug: "beauty-health-logo",
    title: "Women's Beauty & Health Brand",
    category: "brand",
    ratio: "aspect-square",
    description: ["Logo for a women's beauty and health brand."],
    logo: true,
  },
  {
    slug: "jewellery-banner",
    title: "Jewellery Brand Banner",
    category: "brand",
    ratio: "aspect-square",
    description: ["Banner for a jewellery brand."],
  },
  {
    slug: "baby-care-logo",
    title: "Baby Care Brand Logo",
    category: "brand",
    ratio: "aspect-square",
    description: ["Logo for a baby care brand."],
    logo: true,
  },

  // Campaigns
  {
    slug: "retropixel-black-friday-sale",
    title: "RetroPixel — Black Friday Sale",
    category: "campaign",
    ratio: "aspect-square",
    description: [],
  },
  {
    slug: "game-on",
    title: "Game On.",
    category: "campaign",
    ratio: "aspect-[2/1]",
    description: [],
  },
  {
    slug: "retropixel-black-friday-gift",
    title: "RetroPixel — The Perfect Gift",
    category: "campaign",
    ratio: "aspect-square",
    description: [],
  },
  {
    slug: "bitboy-mines",
    title: "You Play. BitBoy Mines.",
    category: "campaign",
    ratio: "aspect-square",
    description: [],
  },
  {
    slug: "retropixel-pro-v2-ad",
    title: "RetroPixel Pro V2 — Launch Ad",
    category: "campaign",
    ratio: "aspect-square",
    description: [],
  },
  {
    slug: "connect-play-earn",
    title: "Connect. Play. Earn.",
    category: "campaign",
    ratio: "aspect-[2/1]",
    description: [],
  },
  {
    slug: "illuminate-with-intention",
    title: "Illuminate with Intention",
    category: "campaign",
    ratio: "aspect-square",
    description: [],
  },
];
