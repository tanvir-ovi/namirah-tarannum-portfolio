"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * "Composing Canvas" — an original, self-assembling design composition that
 * stands in for Namirah's craft: a modular grid snaps in, gold geometry
 * settles into balance, a pen-tool path draws itself with live anchor handles,
 * the monogram resolves, and a palette slides up. It is built entirely from
 * SVG + transforms (no images, no 3D) so it is tiny and smooth, and it degrades
 * to a fully-composed static poster when motion is reduced.
 */
export function ComposingCanvas() {
  const root = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const q = gsap.utils.selector(root);

      if (reduce) return; // SVG already renders in its final, composed state

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.25,
      });

      // 1 — frame + grid
      tl.from(q("[data-frame]"), { scale: 0.96, opacity: 0, duration: 0.9, transformOrigin: "50% 50%" })
        .from(q("[data-grid] line"), { opacity: 0, duration: 0.6, stagger: 0.03 }, "-=0.5")
        .from(q("[data-label]"), { opacity: 0, y: 8, duration: 0.6, stagger: 0.08 }, "-=0.4");

      // 2 — geometry settles
      tl.from(q("[data-ghost]"), { opacity: 0, scale: 0.9, duration: 1.1, transformOrigin: "50% 55%" }, "-=0.5")
        .from(q("[data-ring]"), { opacity: 0, scale: 0.6, duration: 1.0, transformOrigin: "72% 42%", ease: "back.out(1.6)" }, "-=0.8")
        .from(q("[data-arc]"), { opacity: 0, scale: 0.7, rotate: -30, duration: 0.9, transformOrigin: "38% 46%", ease: "back.out(1.5)" }, "-=0.7")
        .from(q("[data-square]"), { opacity: 0, scale: 0, duration: 0.7, stagger: 0.09, transformOrigin: "50% 50%", ease: "back.out(2)" }, "-=0.5");

      // 3 — the pen path draws, then its handles pop
      const path = q("[data-pen]")[0] as unknown as SVGPathElement;
      if (path) {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        tl.to(path, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }, "-=0.3");
      }
      tl.from(q("[data-handle]"), { opacity: 0, duration: 0.4, stagger: 0.05 }, "-=0.5")
        .from(q("[data-anchor]"), { opacity: 0, scale: 0, duration: 0.4, stagger: 0.06, transformOrigin: "50% 50%", ease: "back.out(2.5)" }, "-=0.4");

      // 4 — monogram + palette
      tl.from(q("[data-mono]"), { opacity: 0, y: 14, duration: 0.7 }, "-=0.3")
        .from(q("[data-swatch]"), { opacity: 0, y: 16, scale: 0.85, duration: 0.6, stagger: 0.07, transformOrigin: "50% 100%", ease: "back.out(1.8)" }, "-=0.5");

      // idle: a slow ring rotation + a one-off guide sweep, kept very subtle
      gsap.to(q("[data-ring]"), { rotate: 360, duration: 60, repeat: -1, ease: "none", transformOrigin: "72% 42%" });
      gsap.to(q("[data-arc]"), { y: -6, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.fromTo(
        q("[data-scan]"),
        { attr: { y1: 70, y2: 70 }, opacity: 0 },
        { attr: { y1: 512, y2: 512 }, opacity: 0.5, duration: 2.4, delay: 2.6, ease: "power1.inOut",
          onComplete: () => gsap.to(q("[data-scan]"), { opacity: 0, duration: 0.5 }) }
      );
    },
    { scope: root }
  );

  const swatches = ["#E23B2E", "#E2AB4D", "#F4EEE6", "#3E7D4F", "#2E7CC4"];

  return (
    <svg
      ref={root}
      viewBox="0 0 440 560"
      className="h-full w-full"
      role="img"
      aria-label="An original abstract composition: gold geometry, a pen-tool path, and a colour palette arranged on a design canvas."
    >
      <defs>
        <linearGradient id="cc-card" x1="40" y1="20" x2="410" y2="540" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1d1511" />
          <stop offset="1" stopColor="#120d0b" />
        </linearGradient>
        <linearGradient id="cc-gold" x1="120" y1="180" x2="330" y2="320" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f4c877" />
          <stop offset="0.5" stopColor="#e2ab4d" />
          <stop offset="1" stopColor="#a9772f" />
        </linearGradient>
        <radialGradient id="cc-glow" cx="0.72" cy="0.38" r="0.6">
          <stop offset="0" stopColor="rgba(226,171,77,0.22)" />
          <stop offset="1" stopColor="rgba(226,171,77,0)" />
        </radialGradient>
        <clipPath id="cc-clip">
          <rect x="16" y="16" width="408" height="528" rx="26" />
        </clipPath>
      </defs>

      {/* Frame */}
      <g data-frame>
        <rect x="16" y="16" width="408" height="528" rx="26" fill="url(#cc-card)" />
        <rect x="16.75" y="16.75" width="406.5" height="526.5" rx="25.25" fill="none" stroke="rgba(226,171,77,0.28)" strokeWidth="1.5" />
      </g>

      <g clipPath="url(#cc-clip)">
        <rect x="16" y="16" width="408" height="528" fill="url(#cc-glow)" />

        {/* Modular grid */}
        <g data-grid stroke="rgba(244,238,230,0.06)" strokeWidth="1">
          {[104, 176, 248, 320].map((x) => (
            <line key={`v${x}`} x1={x} y1="40" x2={x} y2="520" />
          ))}
          {[130, 210, 290, 370, 450].map((y) => (
            <line key={`h${y}`} x1="40" y1={y} x2="400" y2={y} />
          ))}
        </g>

        {/* Ghost monogram watermark */}
        <text
          data-ghost
          x="212"
          y="360"
          textAnchor="middle"
          fontFamily="var(--font-display), Georgia, serif"
          fontSize="360"
          fontWeight="600"
          fill="rgba(226,171,77,0.08)"
        >
          N
        </text>

        {/* Ring outline */}
        <circle data-ring cx="316" cy="234" r="92" fill="none" stroke="rgba(226,171,77,0.5)" strokeWidth="1.5" strokeDasharray="2 7" />

        {/* Gold arc / half-disc */}
        <path data-arc d="M96 250a72 72 0 0 1 144 0Z" fill="url(#cc-gold)" opacity="0.92" />

        {/* Pen-tool path with handles + anchors */}
        <g>
          <line data-handle x1="78" y1="430" x2="140" y2="392" stroke="rgba(226,171,77,0.55)" strokeWidth="1" />
          <line data-handle x1="300" y1="330" x2="356" y2="372" stroke="rgba(226,171,77,0.55)" strokeWidth="1" />
          <path
            data-pen
            d="M78 430C150 360 250 300 356 372"
            fill="none"
            stroke="#f0bd63"
            strokeWidth="2.25"
            strokeLinecap="round"
          />
          {/* Round control handles */}
          <circle data-handle cx="140" cy="392" r="4" fill="none" stroke="rgba(226,171,77,0.7)" strokeWidth="1.25" />
          <circle data-handle cx="356" cy="372" r="4" fill="none" stroke="rgba(226,171,77,0.7)" strokeWidth="1.25" />
          {/* Square anchor points */}
          <rect data-anchor data-square x="73" y="425" width="10" height="10" fill="#100c0b" stroke="#f0bd63" strokeWidth="1.75" />
          <rect data-anchor data-square x="295" y="325" width="10" height="10" fill="#f0bd63" />
          <rect data-anchor data-square x="351" y="367" width="10" height="10" fill="#100c0b" stroke="#f0bd63" strokeWidth="1.75" />
        </g>

        {/* Scan guide line */}
        <line data-scan x1="24" x2="416" y1="70" y2="70" stroke="rgba(240,189,99,0.6)" strokeWidth="1" opacity="0" />

        {/* Labels */}
        <text data-label x="42" y="56" fontFamily="var(--font-sans), sans-serif" fontSize="11" letterSpacing="3" fill="#9a8d7e">
          COMPOSITION Nº 01
        </text>
        <text data-label x="398" y="56" textAnchor="end" fontFamily="var(--font-sans), sans-serif" fontSize="11" letterSpacing="2" fill="#9a8d7e">
          NT · 2020–25
        </text>

        {/* Monogram signature bottom-left */}
        <g data-mono>
          <text x="42" y="474" fontFamily="var(--font-display), Georgia, serif" fontSize="26" fill="#f4eee6">
            Namirah T.
          </text>
          <text x="43" y="494" fontFamily="var(--font-sans), sans-serif" fontSize="10.5" letterSpacing="2.5" fill="#9a8d7e">
            SELECTED COMPOSITIONS
          </text>
        </g>

        {/* Palette swatches bottom-right */}
        <g transform="translate(250 476)">
          {swatches.map((c, i) => (
            <g data-swatch key={c} transform={`translate(${i * 30} 0)`}>
              <rect x="0" y="0" width="22" height="22" rx="5" fill={c} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}
