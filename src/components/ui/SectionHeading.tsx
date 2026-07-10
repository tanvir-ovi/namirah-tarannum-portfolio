import { Reveal } from "./Reveal";
import { clsx } from "@/lib/clsx";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            {align === "center" && (
              <span className="h-px w-8 bg-gold-line" aria-hidden />
            )}
            <span className="eyebrow">{eyebrow}</span>
            <span className="h-px w-8 bg-gold-line" aria-hidden />
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance text-[2rem] leading-[1.06] sm:text-[2.6rem] lg:text-[3rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={clsx(
              "mt-5 text-[1.02rem] leading-relaxed text-muted",
              align === "center" && "mx-auto max-w-xl"
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
