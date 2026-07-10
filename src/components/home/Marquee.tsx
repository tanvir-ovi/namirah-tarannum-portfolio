import { Asterisk } from "@phosphor-icons/react/dist/ssr";

const words = [
  "Social Creative",
  "Ad Campaigns",
  "Poster Design",
  "Brand Identity",
  "Logo Design",
  "Food & Beverage",
  "Packaging",
  "Editorial Layout",
];

/**
 * A quiet, endlessly-scrolling ribbon of capabilities — CSS-only motion,
 * duplicated once so the loop is seamless, paused for reduced-motion visitors
 * (handled globally). Sets the tone between hero and body without shouting.
 */
export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-2/60 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee items-center">
        {row.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap font-display text-[1.35rem] italic text-muted sm:text-[1.6rem]">
              {w}
            </span>
            <Asterisk size={18} weight="bold" className="mx-7 text-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
