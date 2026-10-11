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
    // theme-dark (globals.css): espresso background, cream text, lighter accent
    <div className="theme-dark min-h-svh">
      <BreadcrumbBar large trail={[{ label: "Engineering", caps: true }]} back={<BackLink href="/" />} />

      <main className="page-in mx-auto max-w-6xl px-5 pb-32 sm:px-10">
        <h1 className="sr-only">Engineering</h1>
        <h2 className="mt-20 text-center text-2xl font-medium sm:mt-24">Selected Works:</h2>

        {/* Flex + justify-center keeps the cards centered however many there are */}
        <ul className="mt-14 flex flex-wrap justify-center gap-x-16 gap-y-20 sm:mt-16">
          {engineeringProjects.map((project) => (
            <li key={project.slug} className="w-full max-w-[26rem] sm:w-[22rem] lg:w-[26rem]">
              <ProjectCard
                href={`/engineering/${project.slug}`}
                image={photo(`${project.slug}-cover`)}
                title={project.title}
                summary={project.summary}
                tags={project.tags}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
