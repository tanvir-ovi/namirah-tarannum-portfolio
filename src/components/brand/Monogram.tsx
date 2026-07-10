import { clsx } from "@/lib/clsx";

/**
 * Namirah Tarannum's monogram — a gilded serif "N", matching the favicon
 * medallion so the mark reads the same at 16px in a browser tab and at 40px in
 * the header. Pure SVG (the glyph uses the display face) so it stays crisp and
 * animates cheaply. `chip` wraps it in the dark medallion; `bare` is the glyph.
 */
export function Monogram({
  size = 40,
  variant = "bare",
  className,
  title = "Namirah Tarannum monogram",
}: {
  size?: number;
  variant?: "bare" | "chip";
  className?: string;
  title?: string;
}) {
  const uid = variant;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role="img"
      aria-label={title}
      className={clsx("block", className)}
    >
      <defs>
        <linearGradient id={`nt-n-${uid}`} x1="26" y1="26" x2="74" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffe6ac" />
          <stop offset="0.4" stopColor="#f2c063" />
          <stop offset="0.65" stopColor="#e2ab4d" />
          <stop offset="1" stopColor="#b9863a" />
        </linearGradient>
        <radialGradient id={`nt-chipbg-${uid}`} cx="0.32" cy="0.22" r="0.9">
          <stop offset="0" stopColor="#2b201a" />
          <stop offset="0.5" stopColor="#1a120f" />
          <stop offset="1" stopColor="#100b09" />
        </radialGradient>
      </defs>

      {variant === "chip" && (
        <>
          <rect x="4" y="4" width="92" height="92" rx="24" fill={`url(#nt-chipbg-${uid})`} />
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            rx="23"
            fill="none"
            stroke="rgba(226,171,77,0.5)"
            strokeWidth="2"
          />
        </>
      )}

      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-display), Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize={variant === "chip" ? 66 : 84}
        letterSpacing="-2"
        fill={`url(#nt-n-${uid})`}
      >
        N
      </text>
    </svg>
  );
}
