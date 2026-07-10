"use client";

import { useRef } from "react";
import Link from "next/link";
import type { Route } from "next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react/dist/ssr";
import { ComposingCanvas } from "./ComposingCanvas";
import { Container } from "@/components/ui/Container";
import { profile } from "@/lib/data";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.set("[data-line]", { yPercent: 120 });
      gsap.set(
        ["[data-eyebrow]", "[data-sub]", "[data-cta]", "[data-meta]"],
        { opacity: 0 }
      );

      gsap
        .timeline({ defaults: { ease: "power4.out" }, delay: 0.15 })
        .to("[data-eyebrow]", { opacity: 1, x: 0, duration: 0.7 }, 0)
        .fromTo(
          "[data-eyebrow]",
          { x: -12 },
          { x: 0, duration: 0.7 },
          0
        )
        .to("[data-line]", { yPercent: 0, duration: 1.15, stagger: 0.12 }, 0.15)
        .to("[data-sub]", { opacity: 1, y: 0, duration: 0.9 }, 0.65)
        .fromTo("[data-sub]", { y: 16 }, { y: 0, duration: 0.9 }, 0.65)
        .to("[data-cta]", { opacity: 1, y: 0, duration: 0.7 }, 0.82)
        .fromTo("[data-cta]", { y: 12 }, { y: 0, duration: 0.7 }, 0.82)
        .to("[data-meta]", { opacity: 1, duration: 0.8 }, 0.98);
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:min-h-dvh lg:pt-0 lg:pb-0"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 88% 20%, rgba(226,171,77,0.10) 0%, rgba(16,12,11,0) 55%)",
        }}
      />

      <Container className="relative lg:grid lg:min-h-dvh lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
        {/* Copy */}
        <div className="order-1 max-w-xl lg:py-32">
          <div
            data-eyebrow
            className="mb-6 flex items-center gap-3 text-[0.78rem] font-medium tracking-wide text-faint"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gold/60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="uppercase tracking-[0.2em]">
              Graphics Designer · Chattogram, BD
            </span>
          </div>

          <h1 className="font-display text-[3rem] font-normal leading-[1.02] tracking-tight sm:text-[4rem] lg:text-[4.6rem]">
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-line className="block text-ivory">
                Design that makes
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <span data-line className="block text-ivory">
                the scroll <span className="italic text-gilded">stop.</span>
              </span>
            </span>
          </h1>

          <p
            data-sub
            className="mt-7 max-w-[46ch] text-[1.05rem] leading-relaxed text-muted"
          >
            {profile.intro}
          </p>

          <div data-cta className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={"/work" as Route}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-gold-strong hover:-translate-y-0.5"
            >
              View selected work
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href={"/contact" as Route}
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 hover:border-gold-line hover:text-gold hover:-translate-y-0.5"
            >
              Start a project
            </Link>
          </div>

          <div
            data-meta
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6"
          >
            <Metric value={`${profile.yearsExperience} yrs`} label="Designing" />
            <span className="h-8 w-px bg-line" aria-hidden />
            <Metric value="6" label="Industries" />
            <span className="h-8 w-px bg-line" aria-hidden />
            <Metric value="Award" label="Logo, won" />
          </div>
        </div>

        {/* Composing canvas */}
        <div className="order-2 mt-14 lg:mt-0">
          <div className="relative mx-auto aspect-[440/560] w-full max-w-[380px] lg:max-w-[440px]">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(60% 50% at 60% 40%, rgba(226,171,77,0.18), rgba(16,12,11,0) 70%)",
              }}
            />
            <ComposingCanvas />
          </div>
        </div>
      </Container>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint lg:flex">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={14} className="motion-safe:animate-bounce" />
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-xl text-ivory">{value}</div>
      <div className="mt-0.5 text-xs uppercase tracking-[0.16em] text-faint">
        {label}
      </div>
    </div>
  );
}
