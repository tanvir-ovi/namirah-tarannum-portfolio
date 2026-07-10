/**
 * Single source of truth for site-wide identity, SEO, and the developer credit.
 * Update SITE_URL once the production domain is attached in Vercel.
 */
export const SITE_URL = "https://namirah-tarannum-portfolio.vercel.app";

export const site = {
  name: "Namirah Tarannum",
  role: "Graphics Designer",
  shortName: "Namirah Tarannum · Graphics Designer",
  description:
    "Namirah Tarannum is a graphics designer in Chattogram, Bangladesh, crafting scroll-stopping social, brand, and product campaigns. Six years of design across food, beauty, fashion, and automotive.",
  url: SITE_URL,
  locale: "en_US",
} as const;

/** The credit shown in the footer — the studio/developer who built the site. */
export const developer = {
  name: "Tanvir Hossain Ovi",
  website: "https://tanvir-hossain-ovi.me",
  websiteLabel: "tanvir-hossain-ovi.me",
  email: "tanvirhossainovi.eee@std.cu.ac.bd",
} as const;
