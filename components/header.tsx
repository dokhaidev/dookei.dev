import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./container";
import { cx } from "./ui";

const nav = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#education", label: "Học vấn" },
  { href: "#work", label: "Công việc" },
  { href: "#skills", label: "Tech Stack" },
] as const;

export function Header() {
  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b border-border",
        "bg-background/86 backdrop-blur supports-backdrop-filter:bg-background/72",
      )}
    >
      <Container>
        <div className="flex h-[76px] items-center justify-between">
          <Link
            href="#top"
            className={cx(
              "inline-flex items-center gap-2 rounded-full px-3 py-2 transition",
              "hover:bg-foreground/5",
            )}
          >
            <span
              className={cx(
                "h-2 w-2 rounded-full",
                "bg-linear-to-br from-accent to-(--accent-2)",
              )}
            />
            <span className="text-sm font-semibold tracking-tight md:text-base">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1.5 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-full px-3 py-2 text-xs tracking-[0.14em] text-muted transition",
                  "hover:bg-foreground/6 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="text-xs tracking-[0.14em] text-muted">LIGHT</div>
        </div>
      </Container>
    </header>
  );
}

