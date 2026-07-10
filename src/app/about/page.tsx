import type { Metadata } from "next";
import { Trophy, PenNib, GraduationCap, Certificate, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Monogram } from "@/components/brand/Monogram";
import {
  profile,
  experience,
  education,
  activities,
  training,
  achievement,
  tools,
  skills,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Namirah Tarannum is a graphics designer in Chattogram, Bangladesh, with six years across social, brand, and product design. An Adobe Photoshop and Illustrator specialist, and an award-winning logo designer.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A designer obsessed with
            <br />
            <span className="italic text-gilded">the second glance.</span>
          </>
        }
      />

      {/* Bio */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
            <div>
              <Reveal>
                <p className="text-balance font-display text-[1.6rem] leading-[1.32] text-ivory sm:text-[2rem] sm:leading-[1.3]">
                  I’m {profile.name}, a graphics designer who believes good
                  design is the difference between being{" "}
                  <span className="text-gilded">seen</span> and being scrolled
                  past.
                </p>
              </Reveal>
              <div className="mt-8 space-y-5 leading-relaxed text-muted">
                <Reveal delay={0.05}>
                  <p>{profile.statement}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    Trained as an engineer and self-driven as a designer, I pair
                    a structured, detail-first process with an eye for colour,
                    type, and rhythm. Today I lead brand and communications
                    creative at {experience[0].orgShort}, while continuing to
                    design for clients around the world.
                  </p>
                </Reveal>
              </div>

              {/* Achievement callout */}
              <Reveal delay={0.12}>
                <div className="mt-10 flex items-start gap-4 rounded-2xl border border-gold-line bg-ink-2 p-6">
                  <Trophy size={26} weight="fill" className="mt-0.5 shrink-0 text-gold" />
                  <div>
                    <div className="font-display text-lg text-ivory">
                      {achievement.title}
                    </div>
                    <div className="mt-1 text-sm text-faint">{achievement.org}</div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* At-a-glance card */}
            <Reveal delay={0.1}>
              <aside className="h-fit rounded-2xl border border-line bg-ink-2 p-8 shadow-[var(--shadow-lift)]">
                <div className="flex items-center justify-between">
                  <Monogram size={40} variant="chip" />
                  <span className="rounded-full border border-gold-line px-3 py-1 text-[0.66rem] font-medium uppercase tracking-wider text-gold">
                    Available
                  </span>
                </div>
                <dl className="mt-8 space-y-5 text-sm">
                  <Detail label="Based in" value={profile.location} />
                  <Detail label="Experience" value={`${profile.yearsExperience} years`} />
                  <Detail label="Focus" value="Social · Brand · Product" />
                  <Detail label="Toolkit" value={tools.join(" · ")} />
                </dl>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <SectionLabel icon={<PenNib size={18} weight="fill" />} eyebrow="Experience" title="Where I've designed" />
          <div className="mt-12 divide-y divide-line border-t border-line">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={(i % 2) * 0.05}>
                <div className="grid gap-3 py-8 sm:grid-cols-[0.9fr_1.6fr] sm:gap-8">
                  <div>
                    <div className="text-sm text-faint">{e.period}</div>
                    <div className="mt-1 font-display text-xl text-ivory">{e.role}</div>
                    <div className="mt-1 text-sm text-gold">{e.org}</div>
                  </div>
                  <p className="leading-relaxed text-muted">{e.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Education / Training / Activities */}
      <section className="border-t border-line bg-ink-2/50 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <Panel icon={<GraduationCap size={18} weight="fill" />} title="Education">
              {education.map((ed) => (
                <Entry key={ed.degree} period={ed.period} title={ed.degree} org={ed.org} note={ed.detail} />
              ))}
            </Panel>

            <Panel icon={<Certificate size={18} weight="fill" />} title="Training">
              {training.map((t) => (
                <Entry key={t.title} period={t.period} title={t.title} org={t.org} />
              ))}
            </Panel>

            <Panel icon={<Sparkle size={18} weight="fill" />} title="Design Leadership">
              {activities.map((a) => (
                <Entry key={a.role + a.org} period={a.period} title={a.role} org={a.org} />
              ))}
            </Panel>
          </div>
        </Container>
      </section>

      {/* Skills & Tools */}
      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionLabel eyebrow="Toolkit" title="Craft & tools" />
              <div className="mt-8 space-y-4">
                {tools.map((t) => (
                  <Reveal key={t}>
                    <div className="flex items-center gap-3 rounded-xl border border-line bg-ink-2 px-5 py-4">
                      <span className="h-2 w-2 rounded-full bg-gold" />
                      <span className="text-ivory">{t}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <span className="eyebrow">Capabilities</span>
              <div className="mt-8 flex flex-wrap gap-3">
                {skills.map((s, i) => (
                  <Reveal key={s} delay={(i % 4) * 0.04}>
                    <span className="rounded-full border border-line-strong px-5 py-2.5 text-sm text-muted transition-colors hover:border-gold-line hover:text-ivory">
                      {s}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-line pb-4 last:border-0 last:pb-0">
      <dt className="text-faint">{label}</dt>
      <dd className="text-right text-ivory">{value}</dd>
    </div>
  );
}

function SectionLabel({
  icon,
  eyebrow,
  title,
}: {
  icon?: React.ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <Reveal>
        <div className="flex items-center gap-2.5 text-gold">
          {icon}
          <span className="eyebrow text-gold">{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-[1.9rem] leading-tight sm:text-[2.4rem]">{title}</h2>
      </Reveal>
    </div>
  );
}

function Panel({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div>
        <div className="flex items-center gap-2.5 text-gold">
          {icon}
          <span className="eyebrow text-gold">{title}</span>
        </div>
        <div className="mt-6 space-y-6">{children}</div>
      </div>
    </Reveal>
  );
}

function Entry({
  period,
  title,
  org,
  note,
}: {
  period: string;
  title: string;
  org: string;
  note?: string;
}) {
  return (
    <div className="border-l border-gold-line pl-5">
      <div className="text-xs uppercase tracking-wider text-faint">{period}</div>
      <div className="mt-1.5 font-display text-lg leading-snug text-ivory">{title}</div>
      <div className="mt-1 text-sm text-muted">{org}</div>
      {note && <div className="mt-1 text-sm text-gold">{note}</div>}
    </div>
  );
}
