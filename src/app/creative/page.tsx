import type { Metadata } from "next";
import { Suspense } from "react";
import { BackLink, BreadcrumbBar } from "@/components/breadcrumb-bar";
import { CreativeGallery, type CreativeTile, GalleryView } from "@/components/creative-gallery";
import { creativeProjects } from "@/content/creative";
import { photo } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Creative",
  description: "Brand, Shopify and campaign work by Alishbah Kapadia.",
};

export default function Creative() {
  // Resolve image paths here on the server (photo() reads the filesystem),
  // then hand plain data to the client-side gallery.
  const tiles: CreativeTile[] = creativeProjects.map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    ratio: p.ratio,
    src: photo(`${p.slug}-cover`),
    logo: p.logo,
  }));

  return (
    <>
      <BreadcrumbBar trail={[{ label: "Creatives", caps: true }]} back={<BackLink href="/" />} />

      <main className="page-in mx-auto max-w-6xl px-5 pb-32 sm:px-10">
        <h1 className="sr-only">Creative work</h1>
        <div className="mt-12 sm:mt-16">
          {/* useSearchParams() needs a Suspense boundary; the fallback is the unfiltered gallery. */}
          <Suspense fallback={<GalleryView tiles={tiles} filter="all" />}>
            <CreativeGallery tiles={tiles} />
          </Suspense>
        </div>
      </main>
    </>
  );
}
