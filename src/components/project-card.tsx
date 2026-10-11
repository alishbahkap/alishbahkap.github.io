import Link from "next/link";
import { ImageBox } from "./image-box";

export function ProjectCard({
  href,
  image,
  title,
  summary,
}: {
  href: string;
  image?: string;
  title: string;
  summary: string;
}) {
  return (
    <Link href={href} className="group block text-center focus-visible:outline-offset-8">
      <ImageBox src={image} alt={title} ratio="aspect-square" />
      <h2 className="mt-5 text-xl transition-colors duration-200 group-hover:text-oxblood group-focus-visible:text-oxblood">
        {title}
      </h2>
      <p className="mt-2 text-espresso/80">{summary}</p>
    </Link>
  );
}
