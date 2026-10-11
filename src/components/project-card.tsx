import Link from "next/link";
import { ImageBox } from "./image-box";

export function ProjectCard({
  href,
  image,
  title,
  summary,
  tags,
}: {
  href: string;
  image?: string;
  title: string;
  summary: string;
  tags: string[];
}) {
  return (
    <Link href={href} className="group block text-center focus-visible:outline-offset-8">
      {/* Cream frame around the image, like the panel on the home page */}
      <div className="bg-cream p-3 sm:p-4">
        <ImageBox src={image} alt={title} ratio="aspect-square" />
      </div>
      <h2 className="mt-7 text-2xl font-medium transition-colors duration-200 group-hover:text-oxblood group-focus-visible:text-oxblood sm:text-[1.7rem]">
        {title}
      </h2>
      {/* opacity rather than a fixed colour, so it works on light or dark pages */}
      <p className="mt-2 text-lg opacity-85">{summary}</p>
      <p className="mt-1 opacity-70">{tags.join(" - ")}</p>
    </Link>
  );
}
