"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { Badge } from "@/components/ui";
import type { Project } from "@/lib/data";

type ProjectsAccordionProps = {
  items: Project[];
};

export function ProjectsAccordion({ items }: ProjectsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-4 grid gap-3">
      {items.map((project, idx) => {
        const isOpen = openIndex === idx;

        return (
          <article
            key={project.title}
            className={`rounded-xl border border-border p-4 transition-colors ${
              isOpen ? "bg-background/80" : "bg-background/60"
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 text-left"
              onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
              aria-expanded={isOpen}
              aria-label={`Toggle project ${project.title}`}
            >
              <div className="flex items-center gap-2">
                <FaCode className={`text-base ${isOpen ? "text-foreground" : "text-muted"}`} aria-hidden />
                <h3 className="text-base font-semibold">{project.title}</h3>
              </div>
              <motion.span
                className="text-xs text-muted"
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                ▶
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0, y: -6 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -6 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-sm text-muted">{project.description}</p>
                    <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                      <p><span className="font-semibold">Position:</span> <span className="text-muted">{project.position}</span></p>
                      <p><span className="font-semibold">Team size:</span> <span className="text-muted">{project.teamSize}</span></p>
                      <p><span className="font-semibold">Company:</span> <span className="text-muted">{project.company}</span></p>
                      <p><span className="font-semibold">Period:</span> <span className="text-muted">{project.period}</span></p>
                    </div>

                    <p className="mt-3 text-sm font-semibold">Highlights:</p>
                    <ul className="mt-2 grid gap-1.5 text-sm text-muted">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="pl-4">
                          <span className="-ml-4 mr-2 inline-block">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-3 text-sm font-semibold">Tech Stack:</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.stack.map((stack) => (
                        <Badge key={stack}>{stack}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
