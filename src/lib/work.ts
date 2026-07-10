import generated from "./work.generated.json";

export type WorkCategory = "brand" | "editorial" | "food";

export type WorkItem = {
  slug: string;
  title: string;
  category: WorkCategory;
  tags: string[];
  blurb: string;
  src: string;
  width: number;
  height: number;
};

export const works: WorkItem[] = generated as WorkItem[];

export function worksByCategory(category: WorkCategory): WorkItem[] {
  return works.filter((w) => w.category === category);
}

/** A hand-picked marquee set for the home page featured strip. */
export const featuredSlugs = [
  "classic-timeless",
  "airpods-audio",
  "blueberry-bliss",
  "anua-skincare",
  "amuse-handbag",
  "spicy-ramen",
] as const;

export const featuredWorks: WorkItem[] = featuredSlugs
  .map((slug) => works.find((w) => w.slug === slug))
  .filter((w): w is WorkItem => Boolean(w));
