import { site } from "./site";

export type Project = {
  title: string;
  company: string;
  period: string;
  position: string;
  teamSize: string;
  description: string;
  highlights: string[];
  stack: string[];
  href?: string;
  repo?: string;
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export type Education = {
  school: string;
  major: string;
  period: string;
  details: string[];
};

export type Stat = {
  label: string;
  value: string;
  note: string;
};

export type TechGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: site.name,
  role: site.role,
  location: site.location,
  tagline: site.tagline,
  intro:
    "My name is Huynh Phan Do Khai (born 2005). I am passionate about music, sports, and technology, with a strong interest in programming and software development. I graduated with distinction from FPT Polytechnic, achieving a GPA of 3.68. Currently, I work as a Software Engineer specializing in frontend development, where I enjoy building intuitive, responsive, and user-friendly web experiences.",
  availability: "Currently employed · Available for freelance projects",
  english: "English: intermediate",
  skills: [
    "HTML5",
    "CSS3 / SCSS",
    "JavaScript (ESNext)",
    "TypeScript",
    "React",
    "Next.js",
    "Vue",
    "Nuxt",
    "Angular",
    "Svelte",
    "Astro",
    "Tailwind CSS",
    "Bootstrap",
    "Shadcn/UI",
    "Redux Toolkit",
    "Zustand",
    "React Query",
    "Framer Motion",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Jest",
    "Cypress",
    "CI/CD",
    "Docker",
  ],
} as const;

export const stats: Stat[] = [
  { label: "Years of experience", value: "3+", note: "Production-focused frontend" },
  { label: "Delivered projects", value: "20+", note: "SaaS, landing pages, e-commerce" },
  { label: "Core stack", value: "React/Next", note: "TypeScript-first approach" },
];

export const education: Education[] = [
  {
    school: "FPT Polytechnic",
    major: "Web Development",
    period: "2023 - 2025",
    details: ["GPA: 3.68/4.0"],
  },
];

export const projects: Project[] = [
  {
    title: "Green E-commerce Platform",
    company: "Green24H Technology Co., Ltd.",
    period: "3/2025 - 2/2026",
    position: "Front-End Developer",
    teamSize: "5 members",
    description:
      "Built and maintained a green e-commerce platform for eco-friendly products with strong performance and UX focus.",
    highlights: [
      "Built responsive UI components with Next.js and TypeScript.",
      "Integrated RESTful APIs for listing, cart, orders, and authentication.",
      "Optimized rendering with SSR/SSG for better loading performance.",
      "Converted Figma designs into pixel-perfect production screens.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "RESTful API"],
  },
  {
    title: "Container Yard Management System",
    company: "ITECH System Integration Co., Ltd.",
    period: "6/2025 - 2/2026",
    position: "Front-End Developer (Freelancer)",
    teamSize: "6 members",
    description:
      "Developed a logistics operations frontend for HMM Tan Cang with real-time data workflows and heavy operational screens.",
    highlights: [
      "Built responsive UI modules for warehouse operations.",
      "Integrated real-time RESTful APIs and optimized data presentation.",
      "Designed data-heavy views for daily operation efficiency.",
      "Coordinated with backend team for stable API integration.",
    ],
    stack: ["Vue.js", "TypeScript", "RESTful API"],
  },
  {
    title: "Dental Clinic Chain Management System",
    company: "SMAC Technology Investment and Development Co., Ltd.",
    period: "Present",
    position: "Front-End Developer",
    teamSize: "7 members",
    description:
      "Built a healthcare operations interface for multi-branch clinic management, from patient flow to scheduling and reporting.",
    highlights: [
      "Implemented appointment, patient, and clinic operation modules.",
      "Built complex forms and tables using Ant Design.",
      "Integrated APIs for real-time synchronization across branches.",
      "Maintained consistent UI/UX across the full system.",
    ],
    stack: ["React.js", "Ant Design (antd)", "RESTful API"],
  },
];

export const techGroups: TechGroup[] = [
  {
    title: "Programming Languages",
    items: ["HTML5", "CSS3", "JavaScript (ESNext)", "TypeScript", "SQL", "Bash"],
  },
  {
    title: "Frontend Core",
    items: [
      "React",
      "Next.js",
      "Vue",
      "Nuxt",
      "Angular",
      "Component Architecture",
      "SSR / SSG / ISR",
    ],
  },
  {
    title: "UI Engineering",
    items: [
      "Tailwind CSS",
      "SCSS",
      "Shadcn/UI",
      "Framer Motion",
      "Design System",
      "Responsive UI",
      "Accessibility (a11y)",
    ],
  },
  {
    title: "Data & State",
    items: [
      "React Query",
      "Redux Toolkit",
      "Zustand",
      "REST API",
      "GraphQL",
      "Form Architecture",
      "Client-side Caching",
    ],
  },
  {
    title: "Testing, Tooling & Delivery",
    items: ["Jest", "Cypress", "Git/GitHub", "CI/CD", "Docker", "Vercel", "Performance Audit"],
  },
  {
    title: "Collaboration & Design",
    items: ["Figma", "Notion", "Agile/Scrum", "Technical Documentation"],
  },
];

export const experience: Experience[] = [
  {
    company: "Green24H Technology Co., Ltd.",
    title: "Front-End Developer",
    period: "3/2025 - 2/2026",
    summary:
      "Developed a green e-commerce platform for eco-friendly products, building and maintaining the frontend with Next.js focused on performance and user experience.",
    bullets: [
      "Built responsive UI components with Next.js and TypeScript.",
      "Integrated RESTful APIs for product listing, cart, order management, and authentication.",
      "Optimized page performance using Next.js SSR/SSG strategies.",
      "Translated Figma designs into pixel-perfect interfaces.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "RESTful API"],
  },
  {
    company: "ITECH System Integration Co., Ltd.",
    title: "Front-End Developer (Freelancer)",
    period: "6/2025 - 2/2026",
    summary:
      "Developed a container yard management system for HMM Tan Cang, building the frontend interface for complex logistics and warehouse operations.",
    bullets: [
      "Built responsive UI components with Next.js and TypeScript.",
      "Integrated RESTful APIs for real-time data display and warehouse operations.",
      "Developed responsive, data-heavy interfaces optimized for operational use.",
      "Collaborated with backend team to ensure smooth API integration and data flow.",
    ],
    stack: ["Vue.js", "RESTful API"],
  },
  {
    company: "SMAC Technology Investment and Development Co., Ltd.",
    title: "Front-End Developer",
    period: "Present",
    summary:
      "Developed a chain-based dental clinic management system, building the frontend interface for complex healthcare and operational workflows across multiple clinic branches.",
    bullets: [
      "Built and maintained UI components for patient management, appointment scheduling, and clinic operations.",
      "Implemented complex data tables and forms using Ant Design (antd).",
      "Integrated RESTful APIs for real-time data synchronization across clinic branches.",
      "Ensured consistent UI/UX experience across the entire clinic chain system.",
    ],
    stack: ["React.js", "Ant Design (antd)", "RESTful API"],
  },
];

