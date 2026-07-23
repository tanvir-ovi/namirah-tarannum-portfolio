import type { Metadata } from "next";
import { fraunces, archivo } from "@/lib/fonts";
import { site, SITE_URL } from "@/lib/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { MotionProvider } from "@/components/layout/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Namirah Tarannum",
    "Namirah",
    "Namriah",
    "Namriah Tarannum",
    "Namirah Nimu",
    "Nimu",
    "graphics designer",
    "social media design",
    "ad creative",
    "poster design",
    "brand design",
    "food and beverage marketing",
    "logo design",
    "Chattogram",
    "Bangladesh",
  ],
  alternates: { canonical: "/" },
  verification: {
    google: "orb3Iik4Z-XwqyhWibz5jqaSBXr3oVSSAdp1QUEdtNk",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} · ${site.role}`,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Structured data (JSON-LD): a linked graph of Person + WebSite + ProfilePage
// so search engines resolve "Namirah Tarannum" / "Namirah" / the common
// misspelling "Namriah" / the nickname "Nimu" to this site.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: site.name,
      alternateName: ["Namirah", "Namriah", "Namriah Tarannum", "Namirah Nimu", "Nimu"],
      givenName: "Namirah",
      familyName: "Tarannum",
      jobTitle: site.role,
      url: SITE_URL,
      image: `${SITE_URL}/logo.png`,
      description: site.description,
      email: "mailto:namirahnimu@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chattogram",
        addressCountry: "Bangladesh",
      },
      knowsAbout: [
        "Graphic Design",
        "Social Media Design",
        "Advertising Creative",
        "Poster Design",
        "Brand Identity",
        "Logo Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: `${site.name} · ${site.role}`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${archivo.variable}`}>
      <body className="bg-grain min-h-dvh antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </MotionProvider>
        <div className="noise-overlay" aria-hidden />
      </body>
    </html>
  );
}
