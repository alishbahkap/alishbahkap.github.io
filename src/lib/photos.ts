import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

const basePath = process.env.STATIC_EXPORT === "true" ? process.env.BASE_PATH || "" : "";

/** Prefix a public path so it still resolves under a GitHub Pages base path. */
export function asset(publicPath: string) {
  return `${basePath}${publicPath}`;
}

function exists(publicPath: string) {
  return fs.existsSync(path.join(process.cwd(), "public", publicPath));
}

/**
 * Look up a photograph in public/work by slot name (e.g. "brewos-1").
 * Returns its URL if a file exists, otherwise undefined — callers then
 * draw a placeholder block at the same proportions.
 */
export function photo(slot: string): string | undefined {
  for (const ext of EXTENSIONS) {
    const rel = `/work/${slot}.${ext}`;
    if (exists(rel)) return asset(rel);
  }
  return undefined;
}

/** public/resume.png once it's added; the PDF until then. */
export function resumeHref() {
  return exists("/resume.png") ? asset("/resume.png") : asset("/Alishbah_Kapadia_Resume.pdf");
}
