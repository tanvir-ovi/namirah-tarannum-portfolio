"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "@/lib/clsx";

type Tag = "div" | "section" | "li" | "article" | "span";

/**
 * A quiet scroll reveal — a short rise and fade, once, when the element enters.
 *
 * Implemented with a plain IntersectionObserver + CSS transition rather than a
 * JS animation library so that:
 *   - server and client render identical markup (no hydration mismatch),
 *   - reduced-motion visitors always see content immediately (CSS media query),
 *   - the effect is GPU-cheap (opacity + transform only).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browsers): reveal on the next frame.
    // Reduced-motion visitors are handled purely in CSS, so nothing to do here.
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={clsx("reveal", shown && "reveal-in", className)}
      style={
        { "--reveal-y": `${y}px`, "--reveal-delay": `${delay}s` } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
