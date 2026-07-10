import { Fraunces, Archivo } from "next/font/google";

/**
 * Type system — a paired display + body face, neither Inter nor Roboto.
 *
 * Fraunces: a high-contrast "old-style" display serif with an editorial,
 * couture temperament. It carries the headlines and the brand voice.
 *
 * Archivo: a confident grotesque with tight, engineered proportions. It does
 * the reading work — body copy, labels, UI — and keeps the interface crisp.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  // Variable font: the full weight axis loads automatically, so `weight` must
  // be omitted when opting into extra axes for the soft / wonky optical feel.
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});
