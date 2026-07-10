/**
 * All site copy in one place. Content is curated from Namirah's CV per the
 * agreed scope: freelance + brand-comms roles only, design-related activities
 * only, the graphics-design training only, and the single logo-contest award.
 */

export const profile = {
  name: "Namirah Tarannum",
  role: "Graphics Designer",
  location: "Chattogram, Bangladesh",
  email: "namirahnimu@gmail.com",
  phone: "+880 1638 202516",
  phoneHref: "+8801638202516",
  yearsExperience: "5+",
  since: 2020,
  // The hero punchline.
  punchline: "Design people can’t scroll past.",
  headline: ["Design that makes", "the scroll stop."],
  intro:
    "I’m Namirah Tarannum, a graphics designer based in Chattogram. For five years I’ve turned brands, products, and menus into scroll-stopping visuals: social campaigns, posters, and product ads built to catch the eye and hold it.",
  statement:
    "I design at the intersection of appetite and attention. Whether it’s a plated hero shot, a beauty banner, or an automotive poster, my job is the same: make someone stop, look, and remember. Clean hierarchy, deliberate type, and colour that earns its place. Every layout is built to move people from a glance to an action.",
} as const;

export const services = [
  {
    title: "Social & Ad Creative",
    description:
      "Scroll-stopping posts, stories, and paid ads engineered for feed performance, with bold hierarchy, appetite-first framing, and a consistent brand voice.",
  },
  {
    title: "Brand & Product Campaigns",
    description:
      "Cohesive key-visuals for launches and promotions across beauty, tech, fashion, and food, from single posts to full campaign sets.",
  },
  {
    title: "Poster & Editorial Design",
    description:
      "Art-directed, magazine-grade posters where typography and image do the heavy lifting. Kinetic, composed, and unmistakably premium.",
  },
  {
    title: "Logo & Visual Identity",
    description:
      "Marks and identity systems that read at a glance and scale everywhere. Award-winning logo design as a starting point, not an afterthought.",
  },
  {
    title: "Food & Beverage Marketing",
    description:
      "Menu-to-feed promos that make food impossible to ignore. The niche where hierarchy, colour, and craving meet.",
  },
  {
    title: "Packaging & Product Layouts",
    description:
      "Feature layouts, spec callouts, and packaging-ready visuals that make a product feel considered and worth buying.",
  },
] as const;

export type WorkCategoryMeta = {
  id: "brand" | "editorial" | "food";
  label: string;
  blurb: string;
};

export const workCategories: WorkCategoryMeta[] = [
  {
    id: "brand",
    label: "Brand & Product",
    blurb:
      "Launch key-visuals and campaign creative across beauty, tech, fashion, and automotive.",
  },
  {
    id: "editorial",
    label: "Editorial & Poster",
    blurb:
      "Art-directed posters where typography and image carry the whole composition.",
  },
  {
    id: "food",
    label: "Food & Beverage",
    blurb:
      "The vibrant marketing engine: appetite-first social promos built to convert.",
  },
];

export const experience = [
  {
    role: "Brands & Communications Executive",
    org: "KY Steel Ltd, KDS Group",
    orgShort: "KY Steel Ltd",
    period: "Sep 2025 – Present",
    description:
      "Leading brand and communications creative for one of the country’s largest industrial groups: campaigns, key-visuals, and consistent visual identity across channels.",
  },
  {
    role: "Freelance Graphics Designer",
    org: "Freelancer.com",
    orgShort: "Freelancer.com",
    period: "Oct 2020 – Present",
    description:
      "Five years designing for international clients: social media creative, product ads, posters, and brand collateral across food, beauty, fashion, and retail.",
  },
] as const;

export const education = [
  {
    degree: "B.Sc. in Electrical & Electronic Engineering",
    org: "University of Chittagong",
    period: "2020 – 2025",
    detail: "CGPA 3.38 / 4.00",
  },
] as const;

// Design-related activities only.
export const activities = [
  {
    role: "Design Coordinator",
    org: "IEEE Student Branch, University of Chittagong",
    period: "Mar 2023 – Dec 2024",
  },
  {
    role: "Lead Designer",
    org: "EEE FEST 2023 & 2025",
    period: "2023 & 2025",
  },
  {
    role: "Lead Designer",
    org: "Engineering Day 2022",
    period: "Jun – Jul 2022",
  },
] as const;

// Graphics-design training only.
export const training = [
  {
    title: "Graphics Design",
    org: "Digital IT Institute",
    period: "Jul – Sep 2020",
  },
] as const;

// The single achievement.
export const achievement = {
  title: "Winner, Logo Design Contest",
  org: "EEE FEST 2023, Dept. of EEE, University of Chittagong",
} as const;

export const tools = ["Adobe Photoshop", "Adobe Illustrator"] as const;

export const skills = [
  "Social Media Creative",
  "Ad & Campaign Design",
  "Poster & Editorial Layout",
  "Logo & Identity",
  "Product & Packaging Visuals",
  "Typography",
  "Colour & Composition",
  "Brand Communication",
] as const;

export const stats = [
  { value: "5+", label: "Years designing" },
  { value: "6", label: "Industries served" },
  { value: "15", label: "Selected works" },
  { value: "1", label: "Logo contest, won" },
] as const;
