import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight, EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Monogram } from "@/components/brand/Monogram";
import { Container } from "@/components/ui/Container";
import { profile } from "@/lib/data";
import { developer } from "@/lib/site";

const navLinks: { label: string; href: Route }[] = [
  { label: "Work", href: "/work" as Route },
  { label: "About", href: "/about" as Route },
  { label: "Contact", href: "/contact" as Route },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-ink-2">
      <Container className="py-16 sm:py-20">
        {/* Closing line */}
        <div className="flex flex-col gap-10 border-b border-line pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Let’s work together</span>
            <p className="mt-5 font-display text-[2rem] leading-[1.08] text-ivory sm:text-[2.7rem]">
              Have something worth
              <br />
              <span className="italic text-gilded">staring at?</span>
            </p>
          </div>
          <Link
            href={"/contact" as Route}
            className="group inline-flex items-center gap-2 self-start rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:bg-gold-strong hover:-translate-y-0.5"
          >
            Start a project
            <ArrowUpRight
              size={16}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Middle grid */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Monogram size={30} />
              <span className="font-display text-lg text-ivory">Namirah Tarannum</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-faint">
              Graphics designer crafting scroll-stopping social, brand, and
              product campaigns from Chattogram, Bangladesh.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="eyebrow mb-1">Menu</span>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="w-fit text-sm text-muted transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow mb-1">Contact</span>
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-gold"
            >
              <EnvelopeSimple size={16} className="text-faint group-hover:text-gold" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="group flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-gold"
            >
              <Phone size={16} className="text-faint group-hover:text-gold" />
              {profile.phone}
            </a>
            <span className="flex items-center gap-2.5 text-sm text-muted">
              <MapPin size={16} className="text-faint" />
              {profile.location}
            </span>
          </div>
        </div>

        {/* Bottom bar — copyright + developer credit */}
        <div className="flex flex-col gap-4 border-t border-line pt-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Namirah Tarannum. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            <span>Designed &amp; developed by</span>
            <a
              href={developer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-muted transition-colors hover:text-gold"
            >
              {developer.name}
            </a>
            <span aria-hidden className="text-line-strong">·</span>
            <a
              href={developer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              {developer.websiteLabel}
            </a>
            <span aria-hidden className="text-line-strong">·</span>
            <a
              href={`mailto:${developer.email}`}
              className="transition-colors hover:text-gold"
            >
              {developer.email}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
