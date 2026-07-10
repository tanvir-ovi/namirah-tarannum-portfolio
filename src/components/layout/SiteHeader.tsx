"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { List, X, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Monogram } from "@/components/brand/Monogram";
import { clsx } from "@/lib/clsx";

const nav: { label: string; href: Route }[] = [
  { label: "Work", href: "/work" as Route },
  { label: "About", href: "/about" as Route },
  { label: "Contact", href: "/contact" as Route },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the mobile sheet is open. (The sheet closes itself when
  // a link inside it is tapped, so no route-change effect is needed.)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[76rem] items-center justify-between px-6 sm:px-8 lg:h-[4.75rem]">
        <Link
          href={"/" as Route}
          className="group flex items-center gap-2.5"
          aria-label="Namirah Tarannum, home"
        >
          <Monogram size={30} className="transition-transform duration-500 group-hover:rotate-[-6deg]" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.05rem] tracking-tight text-ivory">
              Namirah Tarannum
            </span>
            <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-faint">
              Graphics Designer
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "link-underline pb-1 text-sm font-medium transition-colors duration-300",
                  active ? "text-gold" : "text-muted hover:text-ivory"
                )}
                style={active ? { backgroundSize: "100% 1px" } : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={"/contact" as Route}
            className="group inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-ivory transition-all duration-300 hover:border-gold-line hover:text-gold"
          >
            Start a project
            <ArrowUpRight
              size={15}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ivory md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={clsx(
          "grid overflow-hidden border-line bg-ink/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-1 px-6 py-5">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-4 font-display text-2xl text-ivory"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {item.label}
                <ArrowUpRight size={20} className="text-faint" />
              </Link>
            ))}
            <Link
              href={"/contact" as Route}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
