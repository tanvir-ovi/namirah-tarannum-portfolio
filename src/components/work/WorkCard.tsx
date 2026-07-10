import Image from "next/image";
import type { WorkItem } from "@/lib/work";
import { clsx } from "@/lib/clsx";

/**
 * A single piece, framed like a gallery print: a warm mat, a soft-shadowed
 * image, and a caption rail that reveals the brief on hover. The Work page can
 * opt into a uniform frame so filtered sections stay symmetrical.
 */
export function WorkCard({
  item,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className,
  uniformFrame = false,
}: {
  item: WorkItem;
  priority?: boolean;
  sizes?: string;
  className?: string;
  uniformFrame?: boolean;
}) {
  return (
    <figure
      className={clsx(
        "group relative mb-6 flex h-full break-inside-avoid flex-col overflow-hidden rounded-2xl border border-line bg-ink-3 p-2.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-gold-line hover:shadow-[var(--shadow-lift)]",
        className
      )}
    >
      <div className={clsx("relative overflow-hidden rounded-xl", uniformFrame && "aspect-[4/5] bg-ink")}>
        {uniformFrame ? (
          <Image
            src={item.src}
            alt={`${item.title}, graphic design by Namirah Tarannum`}
            fill
            sizes={sizes}
            priority={priority}
            quality={90}
            className="object-contain transform-gpu transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <Image
            src={item.src}
            alt={`${item.title}, graphic design by Namirah Tarannum`}
            width={item.width}
            height={item.height}
            sizes={sizes}
            priority={priority}
            quality={90}
            className="h-auto w-full transform-gpu transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        )}
        {/* Hover veil + brief */}
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/92 via-ink/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="translate-y-3 p-4 text-sm leading-relaxed text-ivory/90 transition-transform duration-500 group-hover:translate-y-0">
            {item.blurb}
          </p>
        </div>
      </div>

      <figcaption className="flex items-center justify-between px-2 pb-1 pt-3">
        <span className="font-display text-[1.05rem] text-ivory">{item.title}</span>
        <span className="flex gap-1.5">
          {item.tags.slice(0, 1).map((t) => (
            <span
              key={t}
              className="rounded-full border border-line-strong px-2.5 py-0.5 text-[0.66rem] font-medium uppercase tracking-wider text-faint"
            >
              {t}
            </span>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}
