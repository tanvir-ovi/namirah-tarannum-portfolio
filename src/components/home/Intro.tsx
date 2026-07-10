import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { profile, stats } from "@/lib/data";

export function Intro() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow">Introduction</span>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-balance font-display text-[1.7rem] leading-[1.28] text-ivory sm:text-[2.15rem] sm:leading-[1.26]">
                For over{" "}
                <span className="text-gilded">five years</span>, I’ve helped
                brands turn a glance into a decision, designing the visuals
                people stop for, share, and remember.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl leading-relaxed text-muted">
                {profile.statement}
              </p>
            </Reveal>
          </div>

          {/* Stats card */}
          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-line bg-ink-2 p-8 shadow-[var(--shadow-lift)]">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {stats.map((s) => (
                  <div key={s.label} className="border-l border-gold-line pl-4">
                    <div className="font-display text-[2.6rem] leading-none text-ivory">
                      {s.value}
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.16em] text-faint">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
