"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { WorkCard } from "./WorkCard";
import { works, type WorkCategory } from "@/lib/work";
import { workCategories } from "@/lib/data";
import { clsx } from "@/lib/clsx";

type Filter = "all" | WorkCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  ...workCategories.map((c) => ({ id: c.id as Filter, label: c.label })),
];

export function WorkGallery() {
  const [active, setActive] = useState<Filter>("all");

  const visible =
    active === "all" ? works : works.filter((w) => w.category === active);

  const activeMeta = workCategories.find((c) => c.id === active);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        {/* Filter rail */}
        <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div
            role="tablist"
            aria-label="Filter work by category"
            className="flex flex-wrap gap-2"
          >
            {filters.map((f) => {
              const isActive = active === f.id;
              return (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f.id)}
                  className={clsx(
                    "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "border-gold bg-gold text-ink"
                      : "border-line-strong text-muted hover:border-gold-line hover:text-ivory"
                  )}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-faint">
            {activeMeta ? activeMeta.blurb : "Every selected piece, across every industry. Curated, not catalogued."}
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((item, i) => (
                <WorkCard key={item.slug} item={item} priority={i < 3} uniformFrame className="mb-0" />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
