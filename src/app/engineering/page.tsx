import type { Metadata } from "next";
import { BackLink, BreadcrumbBar } from "@/components/breadcrumb-bar";
import { ProjectCard } from "@/components/project-card";
import { engineeringProjects } from "@/content/engineering";
import { photo } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Engineering",
  description: "Embedded and software projects by Alishbah Kapadia, including BrewOS and RabbitHole.",
};

export default function Engineering() {
  return (
    <>
      <BreadcrumbBar trail={[{ label: "Engineering", caps: true }]} back={<BackLink href="/" />} />

      <main className="page-in mx-auto max-w-6xl px-5 pb-32 sm:px-10">
        <h1 className="sr-only">Engineering</h1>
        <h2 className="mt-14 text-center text-lg sm:mt-16">Selected Works:</h2>

        <ul className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {engineeringProjects.map((project) => (
            <li key={project.slug}>
              <ProjectCard
                href={`/engineering/${project.slug}`}
                image={photo(`${project.slug}-cover`)}
                title={project.title}
                summary={project.summary}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
