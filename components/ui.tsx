import Link from "next/link";
import { ReactNode } from "react";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-border bg-card/85 shadow-(--shadow)",
        "backdrop-blur supports-backdrop-filter:bg-card/80",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-border px-3 py-1.5 text-xs",
        "text-muted bg-background/55 backdrop-blur",
      )}
    >
      {children}
    </span>
  );
}

export function Divider() {
  return <div className="h-px w-full bg-border" />;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? cx(
          base,
          "bg-foreground text-background hover:opacity-90",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )
      : cx(
          base,
          "border border-border bg-background/40 hover:bg-background/70 text-foreground",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        );

  return (
    <Link href={href} className={cx(styles, className)}>
      {children}
    </Link>
  );
}

