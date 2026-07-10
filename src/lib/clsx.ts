/** Minimal classnames joiner — no dependency, tree-shakes to nothing. */
export function clsx(
  ...parts: Array<string | false | null | undefined>
): string {
  return parts.filter(Boolean).join(" ");
}
