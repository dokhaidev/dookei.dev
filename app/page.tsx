import Image from "next/image";
import {
  FaBolt,
  FaCode,
  FaDiagramProject,
  FaFacebookF,
  FaFigma,
  FaInstagram,
  FaLinkedinIn,
  FaMedal,
  FaPeopleGroup,
  FaRocket,
  FaTrophy,
} from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { Container } from "@/components/container";
import { Badge, Card } from "@/components/ui";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeroTypewriter } from "@/components/hero-typewriter";
import { StackPager } from "@/components/stack-pager";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectsAccordion } from "@/components/projects-accordion";
import { AiRobotViewer } from "@/components/ai-robot-viewer";
import { education, experience, profile, projects, techGroups } from "@/lib/data";
import { site } from "@/lib/site";

const services = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description: "Build fast, scalable web apps with clean architecture and production-ready code.",
  },
  {
    icon: FaFigma,
    title: "UI Implementation from Figma",
    description: "Convert Figma designs into pixel-perfect, responsive interfaces across devices.",
  },
  {
    icon: FaBolt,
    title: "Performance Optimization",
    description: "Improve loading speed, Core Web Vitals, and runtime performance for real users.",
  },
  {
    icon: FaPeopleGroup,
    title: "Freelance Collaboration",
    description: "Support startups and teams with reliable delivery, communication, and ownership.",
  },
];

const achievements = [
  { icon: FaMedal, metric: "3.68 GPA", note: "Graduated with distinction at FPT Polytechnic" },
  { icon: FaRocket, metric: "3+ Years", note: "Hands-on frontend product development experience" },
  { icon: FaDiagramProject, metric: "20+ Features", note: "Delivered production modules for real business workflows" },
  { icon: FaTrophy, metric: "SSR/SSG Focus", note: "Strong optimization mindset with modern Next.js rendering" },
];

const aiNotes = [
  "Currently learning AI engineering fundamentals and LLM application workflows.",
  "Exploring prompt engineering, AI-assisted product features, and automation pipelines.",
  "Goal: combine strong frontend expertise with practical AI product development.",
];

export default function Home() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <div className="group relative inline-flex">
              <button type="button" className="brand-name cursor-default">
                Richard Huynh
              </button>
              <span
                className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max -translate-x-1/2 translate-y-1 rounded-md border border-border bg-card px-2 py-1 text-[11px] font-semibold text-foreground opacity-0 shadow-[0_8px_22px_rgba(0,0,0,0.22),0_0_16px_rgba(255,255,255,0.15)] invisible transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
              >
                dokhaidev
                <span className="absolute left-1/2 top-[-6px] h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-border bg-card" />
              </span>
            </div>
            <nav className="flex items-center gap-5 text-sm text-muted">
              <a href="#about" className="hover:text-foreground">About</a>
              <a href="#experience" className="hover:text-foreground">Experience</a>
              <a href="#stack" className="hover:text-foreground">Stack</a>
              <a href="#contact" className="hover:text-foreground">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </Container>
      </header>

      <section className="hero-wrap border-b border-border">
        <Container>
          <div className="hero-grid">
            <HeroTypewriter />
          </div>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container>
          <div className="profile-strip">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-border bg-card">
              <Image
                src="/z7613335881697_e36052a81580642946f9b202d2e2dbff.jpg"
                alt="Richard Huynh avatar"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">Software Engineer</p>
              <h1 className="mt-1 flex items-center gap-2 text-3xl font-semibold tracking-tight">
                <FaCode className="text-xl text-muted" aria-hidden />
                <span>Richard Huynh - dokhaidev</span>
              </h1>
              <p className="mt-1 text-sm text-muted">{profile.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>{profile.location}</Badge>
                <Badge>{profile.availability}</Badge>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a className="icon-btn" href={site.links.github} aria-label="GitHub"><SiGithub /></a>
              <a className="icon-btn" href={site.links.linkedin} aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a className="icon-btn" href={site.links.facebook} aria-label="Facebook"><FaFacebookF /></a>
              <a className="icon-btn" href={site.links.instagram} aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-7">
        <Container>
          <div className="grid items-start gap-4 lg:grid-cols-[1.65fr_1fr]">
            <div className="grid content-start gap-4">
              <section id="about">
                <Card className="panel p-6">
                  <h2 className="panel-title">About</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">{profile.intro}</p>
                </Card>
              </section>

              <Card className="panel p-6">
                <h2 className="panel-title">Education</h2>
                {education.map((item) => (
                  <article key={item.school} className="mt-4 rounded-xl border border-border bg-background/60 p-4">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex items-start gap-3">
                        <img
                          src="https://play-lh.googleusercontent.com/0UNPGXC2cP3GdbREaJQyBUDlhgUZlKJ8janqR_O2rVlQwinIoStuRRIEVzIKPslZIQ"
                          alt="FPT Polytechnic logo"
                          className="h-12 w-12 rounded-md border border-border object-cover"
                          draggable={false}
                        />
                        <div>
                          <p className="text-sm text-muted">{item.major}</p>
                          <h3 className="mt-1 text-2xl font-semibold leading-tight">{item.school}</h3>
                        </div>
                      </div>
                      <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-muted">
                        {item.period}
                      </span>
                    </div>
                    {item.details[0] ? (
                      <p className="mt-2 text-sm font-semibold">{item.details[0]}</p>
                    ) : null}
                  </article>
                ))}
              </Card>

              <section id="experience">
                <Card className="panel p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h2 className="panel-title">Experience</h2>
                    <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-muted">
                      Process Timeline
                    </span>
                  </div>
                  <ExperienceTimeline items={experience} />
                </Card>
              </section>

              <Card className="panel p-6">
                <h2 className="panel-title">Projects</h2>
                <ProjectsAccordion items={projects} />
              </Card>

              <Card className="panel p-6">
                <h2 className="panel-title">AI Journey</h2>
                <AiRobotViewer />
                <ul className="mt-4 grid gap-2 text-sm text-muted">
                  {aiNotes.map((item) => (
                    <li key={item} className="rounded-lg border border-border bg-background/60 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="grid content-start gap-4">
              <section id="stack">
                <Card className="panel p-6">
                  <h2 className="panel-title">Stack</h2>
                  <StackPager />
                  <div className="mt-4 grid gap-3">
                    {techGroups.map((group) => (
                      <div key={group.title}>
                        <p className="text-xs uppercase tracking-[0.14em] text-muted">{group.title}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <Badge key={item}>{item}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </section>

              <Card className="panel p-6">
                <h2 className="panel-title">Featured Services</h2>
                <div className="mt-3 grid gap-2">
                  {services.map((item) => (
                    <article key={item.title} className="rounded-lg border border-border bg-background/60 p-3">
                      <div className="flex items-center gap-2">
                        <item.icon className="text-sm text-muted" aria-hidden />
                        <p className="text-sm font-semibold">{item.title}</p>
                      </div>
                      <p className="mt-1 text-xs text-muted">{item.description}</p>
                    </article>
                  ))}
                </div>
              </Card>

              <Card className="panel p-6">
                <h2 className="panel-title">Achievements</h2>
                <div className="mt-3 grid gap-2">
                  {achievements.map((item) => (
                    <article key={item.metric} className="rounded-lg border border-border bg-background/60 px-3 py-3">
                      <div className="flex items-center gap-2">
                        <item.icon className="text-sm text-muted" aria-hidden />
                        <p className="text-base font-semibold">{item.metric}</p>
                      </div>
                      <p className="mt-1 text-xs text-muted">{item.note}</p>
                    </article>
                  ))}
                </div>
              </Card>

              <section id="contact">
                <Card className="panel p-6">
                  <h2 className="panel-title">Get in Touch</h2>
                  <p className="mt-2 text-sm text-muted">
                    Fill out the form below and I will get back to you shortly.
                  </p>
                  <form className="mt-4 grid gap-3">
                    <input className="contact-input" placeholder="Full name" />
                    <input className="contact-input" placeholder="Email" type="email" />
                    <input className="contact-input" placeholder="Phone number" />
                    <textarea className="contact-input min-h-32" placeholder="Tell me about your project..." />
                    <button type="button" className="contact-btn">Send message</button>
                  </form>
                </Card>
              </section>
            </div>
          </div>
        </Container>
      </main>

      <footer className="border-t border-border">
        <Container>
          <div className="flex items-center justify-center py-6 text-center text-xs text-muted">
            <p>© {new Date().getFullYear()} Richard Huynh - dokhaidev</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
