import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink, BreadcrumbBar } from "@/components/breadcrumb-bar";
import { HeroGallery } from "@/components/hero-gallery";
import { StatusBar } from "@/components/status-bar";
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

        {/* Skills on the left, project status on the right (stacked on phones) */}
        <div className="mt-12 flex flex-col gap-10 sm:mt-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="sr-only">Technical skills</h2>
            <ul className="flex flex-wrap gap-3">
              {project.skills.map((skill, i) => (
                <li key={skill + i} className="border border-espresso/70 px-4 py-1.5">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <StatusBar status={project.status} progress={project.progress} />
        </div>

        {/* Case-study sections are hidden for now; the text is still in content/engineering.ts.
            To bring them back: import CaseStudy from "@/components/case-study" and add
            <div className="mt-20"><CaseStudy sections={project.sections} /></div> */}
      </main>
    </>
  );
}
