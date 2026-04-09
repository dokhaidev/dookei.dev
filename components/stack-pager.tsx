"use client";

import type { CSSProperties, ComponentType } from "react";
import { useEffect, useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import {
  SiAngular,
  SiAstro,
  SiBun,
  SiCloudflare,
  SiCss,
  SiCypress,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGo,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiNuxt,
  SiPhp,
  SiPnpm,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiStorybook,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiVuedotjs,
  SiWebpack,
  SiYarn,
} from "react-icons/si";

type StackLogo = {
  label: string;
  color: string;
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
};

const stackLogos: StackLogo[] = [
  { label: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { label: "CSS3", Icon: SiCss, color: "#1572B6" },
  { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { label: "Vue", Icon: SiVuedotjs, color: "#4FC08D" },
  { label: "Nuxt", Icon: SiNuxt, color: "#00DC82" },
  { label: "Angular", Icon: SiAngular, color: "#DD0031" },
  { label: "Svelte", Icon: SiSvelte, color: "#FF3E00" },
  { label: "Astro", Icon: SiAstro, color: "#FF5D01" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { label: "SCSS", Icon: SiSass, color: "#CC6699" },
  { label: "Shadcn/UI", Icon: SiShadcnui, color: "#FFFFFF" },
  { label: "Redux", Icon: SiRedux, color: "#764ABC" },
  { label: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { label: "Express", Icon: SiExpress, color: "#FFFFFF" },
  { label: "Python", Icon: SiPython, color: "#3776AB" },
  { label: "Go", Icon: SiGo, color: "#00ADD8" },
  { label: "PHP", Icon: SiPhp, color: "#777BB4" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { label: "Prisma", Icon: SiPrisma, color: "#2D3748" },
  { label: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { label: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { label: "Jest", Icon: SiJest, color: "#C21325" },
  { label: "Vitest", Icon: SiVitest, color: "#6E9F18" },
  { label: "Cypress", Icon: SiCypress, color: "#69D3A7" },
  { label: "Vite", Icon: SiVite, color: "#646CFF" },
  { label: "Webpack", Icon: SiWebpack, color: "#8DD6F9" },
  { label: "Storybook", Icon: SiStorybook, color: "#FF4785" },
  { label: "NPM", Icon: SiNpm, color: "#CB3837" },
  { label: "PNPM", Icon: SiPnpm, color: "#F69220" },
  { label: "Yarn", Icon: SiYarn, color: "#2C8EBB" },
  { label: "Bun", Icon: SiBun, color: "#FBF0DF" },
  { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  { label: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
  { label: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
  { label: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },
  { label: "Git", Icon: SiGit, color: "#F05032" },
  { label: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { label: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { label: "Linux", Icon: SiLinux, color: "#FCC624" },
  { label: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

export function StackPager() {
  const [page, setPage] = useState(0);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const onResize = () => {
      setColumns(window.innerWidth < 640 ? 2 : 3);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const itemsPerPage = columns * 4;
  const totalPages = Math.max(1, Math.ceil(stackLogos.length / itemsPerPage));

  useEffect(() => {
    if (page > totalPages - 1) {
      setPage(totalPages - 1);
    }
  }, [page, totalPages]);

  const visibleItems = useMemo(() => {
    const start = page * itemsPerPage;
    return stackLogos.slice(start, start + itemsPerPage);
  }, [itemsPerPage, page]);

  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);
  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);

  return (
    <div className="mt-4">
      <div className={`grid gap-2 ${columns === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {visibleItems.map(({ label, Icon, color }) => (
          <div key={label} className="stack-icon h-auto min-h-16 flex-col gap-1 py-3">
            <Icon className="text-lg" style={{ color }} />
            <span className="text-[11px] text-muted">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prevPage}
          className="icon-btn h-8 w-8"
          aria-label="Previous stack page"
        >
          <FaChevronLeft className="text-xs" />
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={`stack-dot-${idx}`}
              type="button"
              onClick={() => setPage(idx)}
              aria-label={`Go to stack page ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full border border-border transition ${
                idx === page ? "bg-foreground" : "bg-transparent"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextPage}
          className="icon-btn h-8 w-8"
          aria-label="Next stack page"
        >
          <FaChevronRight className="text-xs" />
        </button>
      </div>
    </div>
  );
}
