import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink, BreadcrumbBar } from "@/components/breadcrumb-bar";
import { CaseStudy } from "@/components/case-study";
import { HeroGallery } from "@/components/hero-gallery";
import { engineeringProjects } from "@/content/engineering";
import { photo } from "@/lib/photos";

type Props = { params: Promise<{ slug: string }> };

const findProject = (slug: string) => engineeringProjects.find((p) => p.slug === slug);

// Tells Next every slug that exists, so each project page is prerendered at build time.
export function generateStaticParams() {
  return engineeringProjects.map((p) => ({ slug: p.slug }));
}

// Any slug not in the list above is a 404 rather than an attempted render.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: `${project.title} — ${project.summary}.` };
}

export default async function EngineeringProjectPage({ params }: Props) {
  const project = findProject((await params).slug);
  if (!project) notFound();

  const images = project.gallery.map((image) => ({
    src: photo(image.slot),
    alt: `${project.title}: ${image.caption}`,
    caption: image.caption,
  }));

  return (
    <>
      <BreadcrumbBar
        trail={[{ label: "Engineering", href: "/engineering", caps: true }, { label: project.title }]}
        back={<BackLink href="/engineering" />}
      />

      <main className="page-in mx-auto max-w-5xl px-5 pb-32 sm:px-10">
        <h1 className="sr-only">{project.title}</h1>

        <div className="mt-12 sm:mt-16">
          <HeroGallery images={images} />
        </div>

        <h2 className="sr-only">Technical skills</h2>
        <ul className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 sm:gap-x-14 text-lg sm:mt-20">
          {project.skills.map((skill, i) => (
            <li key={skill + i}>{skill}</li>
          ))}
        </ul>

        <div className="mt-14 sm:mt-20">
          <CaseStudy sections={project.sections} />
        </div>
      </main>
    </>
  );
}
