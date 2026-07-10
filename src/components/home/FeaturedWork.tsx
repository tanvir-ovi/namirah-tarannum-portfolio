import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "@/components/work/WorkCard";
import { featuredWorks } from "@/lib/work";

export function FeaturedWork() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">Selected work</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-[2rem] leading-[1.08] sm:text-[2.7rem]">
                A few pieces worth
                <br />
                <span className="italic text-gilded">a second look.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link
              href={"/work" as Route}
              className="group inline-flex items-center gap-2 self-start rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ivory transition-all duration-300 hover:border-gold-line hover:text-gold"
            >
              View all work
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {featuredWorks.map((item, i) => (
              <WorkCard key={item.slug} item={item} priority={i < 2} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
