import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 60% at 80% 0%, rgba(226,171,77,0.10) 0%, rgba(16,12,11,0) 60%)",
        }}
      />
      <Container className="relative">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-[2.6rem] leading-[1.02] tracking-tight sm:text-[4rem] lg:text-[4.6rem]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-muted">
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
    </header>
  );
}
