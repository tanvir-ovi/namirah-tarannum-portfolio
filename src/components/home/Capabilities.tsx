import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

export function Capabilities() {
  return (
    <section className="border-t border-line bg-ink-2/50 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What I do"
          title={
            <>
              Design that earns
              <br />
              <span className="italic text-gilded">attention & action.</span>
            </>
          }
          intro="From a single scroll-stopping post to a full campaign system. Here's where I can help."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <article className="group flex h-full flex-col bg-ink-2 p-8 transition-colors duration-500 hover:bg-ink-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-6 font-display text-[1.35rem] text-ivory">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
