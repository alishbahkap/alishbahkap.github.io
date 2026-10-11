import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BackLink, BreadcrumbBar } from "@/components/breadcrumb-bar";
import { CreativeBackLink } from "@/components/creative-gallery";
import { ImageBox } from "@/components/image-box";
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

  const src = photo(`${project.slug}-cover`);

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

      <main className="page-in mx-auto max-w-5xl px-5 pb-32 sm:px-10">
        <h1 className="sr-only">{project.title}</h1>

        {/* The whole picture, uncropped, sized to fit the screen */}
        <figure className="mt-12 sm:mt-16">
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={project.title} className="mx-auto block h-auto max-h-[80svh] w-auto max-w-full" />
          ) : (
            <ImageBox alt={project.title} ratio={project.ratio} className="mx-auto max-h-[80svh] max-w-xl" />
          )}
        </figure>

        <div className="mx-auto mt-12 max-w-xl space-y-5 text-lg leading-relaxed text-espresso/85 sm:mt-16 sm:text-xl">
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </main>
    </>
  );
}
