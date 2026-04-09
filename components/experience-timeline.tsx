"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Experience } from "@/lib/data";

type ExperienceTimelineProps = {
  items: Experience[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const safeItems = useMemo(() => items ?? [], [items]);

  useEffect(() => {
    const host = scrollRef.current;
    if (!host || safeItems.length === 0) return;

    const updateActive = () => {
      const hostRect = host.getBoundingClientRect();
      const pivot = hostRect.top + 140;
      let nextIdx = 0;
      let best = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((node, idx) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const delta = Math.abs(rect.top - pivot);
        if (delta < best) {
          best = delta;
          nextIdx = idx;
        }
      });

      setActiveIndex(nextIdx);
    };

    updateActive();
    host.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      host.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [safeItems.length]);

  return (
    <div className="exp-scroll relative mt-1 max-h-[700px] overflow-y-auto pr-2" ref={scrollRef}>
      <div className="relative pb-1">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-border" />

        <div className="grid gap-5">
          {safeItems.map((item, idx) => (
            <article
              key={`${item.company}-${item.period}`}
              className="relative pl-10"
              ref={(node) => {
                itemRefs.current[idx] = node;
              }}
            >
              <span
                className={`absolute left-4 top-4 h-4 w-4 -translate-x-1/2 rounded-full border transition-colors ${
                  idx === activeIndex
                    ? "border-zinc-100 bg-zinc-100 shadow-[0_0_0_4px_rgba(255,255,255,0.14)]"
                    : "border-border bg-background shadow-[0_0_0_3px_color-mix(in_oklab,var(--foreground)_10%,transparent)]"
                }`}
              />
              <span className="absolute left-4 top-6 h-px w-6 bg-border" />

              <div className="relative rounded-xl border border-border bg-background/60 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-muted">@ {item.company}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-background/60 px-2 py-1 text-[10px] uppercase tracking-widest text-muted">
                    Milestone {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-border bg-background/60 px-2 py-1 text-[10px] uppercase tracking-widest text-muted">
                    Frontend Track
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
                <p className="mt-3 text-sm font-semibold">Key Responsibilities:</p>
                <ul className="mt-3 grid gap-1.5 text-sm text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="pl-4">
                      <span className="-ml-4 mr-2 inline-block">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm">
                  <span className="font-semibold">Tech Stack: </span>
                  <span className="text-muted">{item.stack.join(", ")}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
