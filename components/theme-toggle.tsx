"use client";

import { useEffect, useMemo, useState } from "react";
import { cx } from "./ui";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const label = useMemo(
    () => (theme === "dark" ? "Dark mode" : "Light mode"),
    [theme],
  );

  useEffect(() => {
    const t = getPreferredTheme();
    setTheme(t);
    applyTheme(t);
  }, []);

  return (
    <button
      type="button"
      aria-label={`Toggle theme (current: ${label})`}
      onClick={() => {
        const next: Theme = theme === "dark" ? "light" : "dark";
        setTheme(next);
        window.localStorage.setItem("theme", next);
        applyTheme(next);
      }}
      className={cx(
        "inline-flex h-10 w-10 items-center justify-center rounded-full",
        "border border-border bg-background/40 hover:bg-background/70 transition",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <span className="text-sm text-muted">
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

