import Link from "next/link";
import type { Route } from "next";
import { clsx } from "@/lib/clsx";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-tight transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-50";

const sizes = "px-6 py-3";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-strong hover:-translate-y-0.5 shadow-[0_16px_40px_-18px_rgba(226,171,77,0.6)]",
  secondary:
    "border border-line-strong text-ivory hover:border-gold-line hover:text-gold hover:-translate-y-0.5",
  ghost: "text-ivory hover:text-gold",
};

export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  className,
  icon,
  children,
}: {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const cls = clsx(base, sizes, variants[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href as Route} className={cls}>
      {children}
      {icon}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  icon,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  icon?: React.ReactNode;
}) {
  return (
    <button
      className={clsx(base, sizes, variants[variant], className)}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}
