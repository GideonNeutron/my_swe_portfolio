import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Network,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sun,
  Terminal,
  Users,
  X,
} from "lucide-react";
import {
  experiences,
  profile,
  projects,
  skillGroups,
  type Project,
} from "./content";

const asset = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;
const navItems = ["Work", "Experience", "About", "Contact"];
const homeTitle = "Gideon Appiah | Software Engineer";

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ProjectVisual({
  slug,
  large = false,
}: {
  slug: string;
  large?: boolean;
}) {
  if (slug === "gram-eats")
    return (
      <div className={`project-visual gram-visual ${large ? "large" : ""}`}>
        <div className="diagram-heading">
          <span className="mini-logo">
            <ShoppingBag size={16} /> gram eats
          </span>
          <span className="mono">THE ECOSYSTEM</span>
        </div>
        <div
          className="ecosystem"
          aria-label="Customers, merchants, and administrators connect through a shared Firebase backend"
        >
          <div className="ecosystem-nodes">
            <div>
              <Users />
              <span>Customers</span>
            </div>
            <div>
              <ShoppingBag />
              <span>Merchants</span>
            </div>
            <div>
              <ShieldCheck />
              <span>Admins</span>
            </div>
          </div>
          <div className="connection-lines">
            <i />
            <i />
            <i />
          </div>
          <div className="data-hub">
            <Database size={20} />
            <div>
              <strong>One connected platform</strong>
              <span>Firebase · Firestore · real-time sync</span>
            </div>
            <span className="live-dot" />
          </div>
          <div className="diagram-pills">
            <span>Order</span>
            <ArrowRight size={13} />
            <span>Prepare</span>
            <ArrowRight size={13} />
            <span>Track</span>
          </div>
        </div>
        <span className="visual-caption mono">01 / SYSTEM OVERVIEW</span>
      </div>
    );
  if (slug === "stroke-patient-manager")
    return (
      <div className={`project-visual health-visual ${large ? "large" : ""}`}>
        <div className="diagram-heading">
          <span className="mono">PATIENT CARE / CONNECTED</span>
          <ShieldCheck size={19} />
        </div>
        <svg
          className="pulse-line"
          viewBox="0 0 440 95"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 49H94l14-16 14 30 22-55 25 80 21-39h52l15-18 15 30 20-44 20 49 14-17h114"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <div className="health-nodes">
          <span>Patient records</span>
          <span>Vital alerts</span>
          <span>Care roles</span>
        </div>
        <span className="visual-caption mono">02 / APPLICATION CONCEPT</span>
      </div>
    );
  return (
    <div className={`project-visual chat-visual ${large ? "large" : ""}`}>
      <div className="diagram-heading">
        <span className="mono">CONTEXT IN. CONVERSATION OUT.</span>
        <Sparkles size={19} />
      </div>
      <div className="chat-diagram">
        <div className="chat-input">
          <Terminal size={17} />
          <span>message + conversation history</span>
        </div>
        <span className="chat-connector">↓</span>
        <div className="chat-output">
          <Sparkles size={18} />
          <span>
            Context-aware response
            <span className="typing-cursor" />
          </span>
        </div>
      </div>
      <span className="visual-caption mono">03 / CONVERSATION FLOW</span>
    </div>
  );
}

function Header({
  theme,
  toggleTheme,
  hash,
}: {
  theme: string;
  toggleTheme: () => void;
  hash: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [hash]);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  useEffect(() => {
    if (hash.startsWith("#/")) {
      setActive("Work");
      return;
    }
    let frame = 0;
    const updateActive = () => {
      let current = "";
      for (const item of navItems) {
        const element = document.getElementById(item.toLowerCase());
        if (element && element.getBoundingClientRect().top <= innerHeight * 0.35)
          current = item;
      }
      if (scrollY + innerHeight >= document.documentElement.scrollHeight - 4)
        current = "Contact";
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActive);
    };
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [hash]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="wordmark" aria-label="Gideon Appiah, home">
          g<span>.</span>
          <span className="wordmark-name">GIDEON APPIAH</span>
        </a>
        <nav
          id="primary-navigation"
          className={open ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={active === item ? "active" : ""}
              aria-current={active === item ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="header-contact" href={`mailto:${profile.email}`}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
          <button
            ref={menuButton}
            className="icon-button menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <a
        className="visual-link"
        href={`#/projects/${project.slug}`}
        aria-label={`Explore ${project.name}`}
      >
        <ProjectVisual slug={project.slug} />
      </a>
      <div className="project-content">
        <div className="project-meta">
          <span className="mono">{project.category}</span>
          {featured && (
            <span className="favorite">
              <span className="live-dot" /> PERSONAL FAVORITE
            </span>
          )}
        </div>
        <h3>
          <a href={`#/projects/${project.slug}`}>{project.name}</a>
        </h3>
        <p>{project.summary}</p>
        <Tags items={project.tags} />
        <div className="project-links">
          <a href={`#/projects/${project.slug}`}>
            Explore project <ArrowUpRight size={17} />
          </a>
          <ExternalLink href={project.github}>
            <Github size={16} /> GitHub <ArrowUpRight size={13} />
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}

function Home() {
  return (
    <>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="live-dot" /> OPEN TO SUMMER 2027 INTERNSHIPS
          </div>
          <p className="hero-intro">
            Hey, I’m Gideon <span aria-hidden="true">↗</span>
          </p>
          <h1>
            Building software.
            <br />
            Connecting systems.
            <br />
            <span>Moving forward.</span>
          </h1>
          <p className="hero-description">
            A computer science junior at Grambling State University turning
            curiosity into useful products — from campus apps to distributed
            computing.
          </p>
          <div className="hero-buttons">
            <a href="#work" className="button primary">
              Explore my work <ArrowDown size={17} />
            </a>
            <a href="#contact" className="button secondary">
              Get in touch <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-socials">
            <ExternalLink href={profile.github}>
              <Github size={17} /> GitHub <ArrowUpRight size={12} />
            </ExternalLink>
            <ExternalLink href={profile.linkedin}>
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={12} />
            </ExternalLink>
            <span className="hero-location">Grambling, LA</span>
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="portrait-corner top-left" />
          <div className="portrait-corner bottom-right" />
          <div className="portrait-frame">
            <img
              className="hero-portrait"
              src={asset("gideon-portrait.jpg")}
              alt="Gideon Appiah wearing a suit outside a campus building"
              width="2426"
              height="3238"
              fetchPriority="high"
            />
            <div className="portrait-shade" />
            <div className="portrait-caption">
              <span className="mono">THE PERSON BEHIND THE CODE</span>
              <strong>
                Curious by nature.
                <br />
                An engineer by choice.
              </strong>
            </div>
          </div>
          <div className="floating-label">
            <Code2 size={17} />
            <span>Always learning. Always building.</span>
          </div>
          <span className="portrait-side-note mono">
            GIDEON APPIAH / PORTFOLIO 2026
          </span>
        </div>
      </section>
      <div className="intro-strip container">
        <span className="mono strip-label">IDEAS TO IMPLEMENTATION</span>
        <div>
          <Code2 /> Software engineering
        </div>
        <div>
          <Network /> Distributed systems
        </div>
        <div>
          <Sparkles /> Applied AI & mobile
        </div>
      </div>
      <section className="section container" id="work">
        <SectionHeading
          number="01"
          label="SELECTED WORK"
          title="Ideas made real."
          description="A few things I’ve built, the problems behind them, and what I learned along the way."
        />
        <ProjectCard project={projects[0]} featured />
        <div className="project-grid">
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <ExternalLink href={profile.github} className="all-projects">
          More experiments on GitHub <ArrowUpRight size={16} />
        </ExternalLink>
      </section>
      <section className="experience-section" id="experience">
        <div className="section container">
          <SectionHeading
            number="02"
            label="EXPERIENCE"
            title="Learning by doing."
            description="Building in teams, working through real problems, and getting better with every iteration."
          />
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="experience-row" key={experience.company}>
                <div className={`company-mark mark-${index}`}>
                  {experience.mark}
                  <span>.</span>
                </div>
                <div className="experience-main">
                  <div className="experience-top">
                    <div>
                      <h3>{experience.company}</h3>
                      <p className="experience-role">{experience.role}</p>
                    </div>
                    <div className="experience-date">
                      <span className="mono">{experience.date}</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <p>{experience.text}</p>
                  <p className="experience-detail">{experience.detail}</p>
                  <Tags items={experience.tags} />
                </div>
              </article>
            ))}
          </div>
          <div className="development">
            <span className="mono">ALSO LEARNING WITH</span>
            <p>
              NVIDIA Summer Bridge <span>/</span> TMCF Google Cloud{" "}
              <span>/</span> Amazon Career Prep <span>/</span> IBM
            </p>
          </div>
        </div>
      </section>
      <section className="section container about-section" id="about">
        <div className="about-story">
          <p className="eyebrow">
            <span>03</span> / A LITTLE ABOUT ME
          </p>
          <h2>
            I want to help build
            <br />
            what comes next.
          </h2>
          <p className="about-lead">
            Technology makes life easier, faster, and more connected. I don’t
            want to just watch that future happen. I want to help create it.
          </p>
          <p>
            That’s what drew me to computer science, and it’s what keeps me
            building. I’m especially interested in software engineering and the
            backend systems that make great products possible, with a growing
            curiosity for mobile development and AI.
          </p>
          <p>
            Whether I’m figuring out how an order moves through Gram Eats or how
            to observe concurrent processes at Fermilab, I enjoy connecting the
            pieces and understanding why they work.
          </p>
          <div className="education">
            <div className="education-symbol">
              G<span>.</span>
            </div>
            <div>
              <strong>Grambling State University</strong>
              <p>B.S. Computer Science · Expected May 2028</p>
              <span>
                3.90 GPA <i /> Academic Achievement Scholar
              </span>
            </div>
          </div>
        </div>
        <div className="toolkit">
          <p className="mono toolkit-label">
            <Terminal size={16} /> MY TOOLKIT
          </p>
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.number}>
              <span className="skill-number mono">{group.number}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <Tags items={group.skills} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </>
  );
}

function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Please select the email address to copy it.");
    }
    timer.current = setTimeout(() => setCopyStatus(""), 4000);
  }
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">
            <span>04</span> / WHAT’S NEXT?
          </p>
          <h2>
            Let’s build
            <br />
            <span>something that matters.</span>
          </h2>
          <p>
            I’m looking for a summer 2027 software engineering internship.
            <br />
            Have an opportunity, an idea, or just want to say hello?
          </p>
          <div className="contact-email">
            <a href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight size={24} />
            </a>
            <button
              className="icon-button"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              {copyStatus === "Email copied" ? (
                <Check size={17} />
              ) : (
                <Copy size={17} />
              )}
            </button>
          </div>
          <span className="copy-status" role="status">
            {copyStatus}
          </span>
        </div>
        <a
          className="contact-orbit"
          href={`mailto:${profile.email}`}
          aria-label="Email Gideon"
        >
          <ArrowUpRight size={72} strokeWidth={1} />
        </a>
      </div>
    </section>
  );
}

function ProjectPage({ project }: { project: Project }) {
  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="container project-page">
      <a className="back-link" href="#work">
        <ArrowLeft size={16} /> Back to selected work
      </a>
      <div className="project-page-heading">
        <p className="eyebrow">
          <span>PROJECT {project.number}</span> / {project.category}
        </p>
        <h1>{project.name}</h1>
        <p className="project-page-summary">{project.summary}</p>
        <div className="project-page-meta">
          <Tags items={project.tags} />
          <ExternalLink href={project.github} className="button secondary">
            <Github size={17} /> View on GitHub <ArrowUpRight size={16} />
          </ExternalLink>
        </div>
      </div>
      <ProjectVisual slug={project.slug} large />
      <div className="case-story">
        <div className="case-section">
          <p className="eyebrow">01 / THE STARTING POINT</p>
          <h2>A problem worth solving.</h2>
          <p>{project.problem}</p>
        </div>
        <div className="case-section">
          <p className="eyebrow">02 / THE APPROACH</p>
          <h2>Connecting the pieces.</h2>
          <p>{project.approach}</p>
        </div>
      </div>
      <div className="case-features">
        {project.features.map((feature, index) => (
          <section key={feature.title}>
            <span className="mono">0{index + 1}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </section>
        ))}
      </div>
      <section className="architecture-section">
        <div>
          <p className="eyebrow">03 / UNDER THE HOOD</p>
          <h2>How it fits together.</h2>
          <p>A high-level view of the components behind the experience.</p>
        </div>
        <ol className="architecture-flow">
          {project.architecture.map((layer, index) => (
            <li key={layer}>
              <span className="mono">0{index + 1}</span>
              {layer}
              {index < project.architecture.length - 1 && (
                <ArrowDown size={16} />
              )}
            </li>
          ))}
        </ol>
      </section>
      <section className="takeaway">
        <p className="eyebrow">04 / THE TAKEAWAY</p>
        <h2>Beyond the code.</h2>
        <p>{project.takeaway}</p>
      </section>
      <div className="project-bottom">
        <a href="#work" className="back-link">
          <ArrowLeft size={16} /> All projects
        </a>
        <a href={`#/projects/${nextProject.slug}`} className="next-project">
          <span className="mono">NEXT PROJECT</span>
          <strong>
            {nextProject.name} <ArrowRight size={23} />
          </strong>
        </a>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="container footer">
      <a href="#home" className="footer-brand">
        Gideon Appiah<span>.</span>
      </a>
      <span>Thoughtfully built. Always evolving.</span>
      <div>
        <ExternalLink href={profile.github}>
          <Github size={16} />
          <span className="sr-only">GitHub</span>
        </ExternalLink>
        <ExternalLink href={profile.linkedin}>
          <Linkedin size={16} />
          <span className="sr-only">LinkedIn</span>
        </ExternalLink>
        <a href={`mailto:${profile.email}`} aria-label="Email Gideon">
          <Mail size={17} />
        </a>
        <span className="mono">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [theme, setTheme] = useState(
    document.documentElement.dataset.theme || "dark",
  );
  const main = useRef<HTMLElement>(null);
  const route = hash.startsWith("#/") ? hash.slice(2) : "";
  const project = projects.find((item) => route === `projects/${item.slug}`);
  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0b0c10" : "#f7f7fa");
    try {
      localStorage.setItem("gideon-theme", theme);
    } catch {
      /* The theme still works when storage is unavailable. */
    }
  }, [theme]);
  useEffect(() => {
    document.title = project
      ? `${project.name} | Gideon Appiah`
      : route
        ? `Page not found | Gideon Appiah`
        : homeTitle;
    const handle = requestAnimationFrame(() => {
      if (route) {
        window.scrollTo({ top: 0, behavior: "instant" });
        main.current?.focus({ preventScroll: true });
      } else if (hash) {
        const target = document.getElementById(hash.slice(1));
        target?.scrollIntoView({ behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(handle);
  }, [hash, route, project]);
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          main.current?.focus();
          main.current?.scrollIntoView({ behavior: "instant" });
        }}
      >
        Skip to content
      </a>
      <Header
        theme={theme}
        toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
        hash={hash}
      />
      <main id="main-content" ref={main} tabIndex={-1}>
        {project ? (
          <ProjectPage project={project} />
        ) : route ? (
          <section className="container not-found">
            <p className="eyebrow">404 / A SMALL DETOUR</p>
            <h1>This page isn’t here.</h1>
            <a className="button primary" href="#work">
              Explore my projects <Send size={16} />
            </a>
          </section>
        ) : (
          <Home />
        )}
      </main>
      <Footer />
    </>
  );
}
