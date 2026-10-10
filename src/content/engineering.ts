/**
 * Engineering projects. Each entry drives both its gallery card on /engineering
 * and its own page at /engineering/<slug>.
 *
 * Images are found by slot name in public/work: e.g. "brewos-cover.jpg",
 * "brewos-1.jpg". Until a file exists, a placeholder block is drawn instead.
 */

export type GalleryImage = { slot: string; caption: string };

export type EngineeringProject = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  skills: string[];
  /** The hero gallery on the project page; the caption changes with each image. */
  gallery: GalleryImage[];
  sections: {
    problem: string[];
    process: string[];
    progress: string[];
    next: string[];
  };
  /** Marks wireframe "Ex." entries so they're easy to find and delete. */
  placeholder?: boolean;
};

const placeholderGallery = (slug: string): GalleryImage[] => [
  { slot: `${slug}-1`, caption: "Image description" },
  { slot: `${slug}-2`, caption: "Image description" },
  { slot: `${slug}-3`, caption: "Image description" },
];

export const engineeringProjects: EngineeringProject[] = [
  {
    slug: "brewos",
    title: "BrewOS",
    summary: "ESP32 Espresso System",
    tags: ["Embedded", "IoT", "C/C++"],
    skills: ["ESP32", "ESP-IDF", "C/C++", "IoT"],
    gallery: placeholderGallery("brewos"),
    sections: {
      problem: [
        "An IoT-based espresso extraction monitoring system. The aim is to sense, gather and store information on each extraction, so shots can be compared over time.",
      ],
      process: [
        "Disassembled and repaired the espresso machine, replacing worn components to prepare it for hardware modifications.",
        "Developing firmware in ESP-IDF on an ESP32 microcontroller to collect sensor data and transmit it for analysis, integrating embedded hardware, software communication and data visualization components.",
      ],
      progress: [
        "The machine is repaired and ready for modification. Firmware for collecting and transmitting sensor data is in active development.",
      ],
      next: ["Cloud-based data storage, and a dashboard for comparing extraction profiles over time."],
    },
  },
  {
    slug: "rabbithole",
    title: "RabbitHole",
    summary: "Literary Discovery Program",
    tags: ["Software", "React", "TypeScript"],
    skills: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    gallery: placeholderGallery("rabbithole"),
    sections: {
      problem: [
        "A social reading and discovery platform built around a concept-based recommendation system. Books are modelled through granular themes, cultural influences, settings, tone and narrative elements, so recommendations become more personal with each rating, preference and interaction.",
      ],
      process: [
        "Building the application with React Native, Expo, TypeScript, Supabase and PostgreSQL, including authentication, relational data modelling and external book APIs.",
        "The personalized feed integrates book recommendations with user-generated posts and threaded discussions.",
      ],
      progress: [
        "In active development, on a Git/GitHub workflow set up to scale as the recommendation system evolves.",
      ],
      next: [
        "Semantic search and vector embeddings, automated testing, CI/CD, and application security as the recommendation system evolves.",
      ],
    },
  },
  ...[1, 2].map(
    (n): EngineeringProject => ({
      slug: `example-${n}`,
      title: "Ex.",
      summary: "Desc",
      tags: ["Type", "Languages", "etc"],
      skills: ["Skill", "Skill", "Skill", "Skill"],
      gallery: placeholderGallery(`example-${n}`),
      sections: {
        problem: ["What motivated the project, and what existing limitation are you trying to address?"],
        process: ["Hardware modifications, firmware architecture, sensor integration, and technical decisions."],
        progress: ["Document the problems encountered, how you approached them, and what currently works."],
        next: ["Planned features, testing, and future development."],
      },
      placeholder: true,
    })
  ),
];

export const SECTION_TITLES = {
  problem: "The Problem",
  process: "The Process",
  progress: "Challenges & Progress",
  next: "Next Steps",
} as const;
