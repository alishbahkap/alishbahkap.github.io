import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BackLink, BreadcrumbBar } from "@/components/breadcrumb-bar";
import { CreativeBackLink } from "@/components/creative-gallery";
import { ImageBox } from "@/components/image-box";
import { Masonry, MasonryItem } from "@/components/masonry";
import { CATEGORY_LABELS, creativeProjects } from "@/content/creative";
import { photo } from "@/lib/photos";

type Props = { params: Promise<{ slug: string }> };

const findProject = (slug: string) => creativeProjects.find((p) => p.slug === slug);

export function generateStaticParams() {
  return creativeProjects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};
  return { title: `${project.title} — ${CATEGORY_LABELS[project.category]}` };
}

export default async function CreativeProjectPage({ params }: Props) {
  const project = findProject((await params).slug);
  if (!project) notFound();

  return (
    <>
      <BreadcrumbBar
        trail={[
          { label: "Creative", href: "/creative", caps: true },
          { label: CATEGORY_LABELS[project.category], href: `/creative?filter=${project.category}`, caps: true },
          { label: project.title },
        ]}
        back={
          <Suspense fallback={<BackLink href="/creative" />}>
            <CreativeBackLink />
          </Suspense>
        }
      />

      <main className="page-in mx-auto max-w-6xl px-5 pb-32 sm:px-10">
        <h1 className="sr-only">{project.title}</h1>
        {project.description && (
          <p className="mx-auto mt-12 max-w-2xl text-center text-lg leading-relaxed">{project.description}</p>
        )}

        <div className="mt-12 sm:mt-16">
          <Masonry>
            {project.images.map((image) => (
              <MasonryItem key={image.slot}>
                <figure>
                  <ImageBox
                    src={photo(image.slot)}
                    alt={image.caption ?? project.title}
                    ratio={image.ratio}
                  />
                  {image.caption && (
                    <figcaption className="mt-3 text-center text-sm tracking-[0.06em] uppercase">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              </MasonryItem>
            ))}
          </Masonry>
        </div>
      </main>
    </>
  );
}
