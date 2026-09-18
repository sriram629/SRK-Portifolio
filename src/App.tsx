import { lazy, Suspense, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Github,
  Menu,
  X,
  ArrowRight,
  Download,
  MoveUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DATA } from "./constants/data";
import "./App.css";

const Scene = lazy(() => import("./components/Scene"));
gsap.registerPlugin(ScrollTrigger);
const nav = [
  ["projects", "Work"],
  ["experience", "Experience"],
  ["about", "About"],
] as const;
const projects = [
  {
    title: "Multimodal AI Chat",
    category: "AI ENGINEERING",
    description:
      "One conversation. Multiple models. A full-stack chat application with streamed responses, image inputs, and context from uploaded documents.",
    detail:
      "FastAPI streams model responses over WebSockets. Session-scoped document retrieval supplies relevant text, with Gemini, Groq, and Mistral integrations.",
    stack: ["React", "FastAPI", "WebSockets", "MongoDB"],
    type: "ai",
    source: DATA.projects[0].github,
    live: DATA.projects[0].link,
  },
  {
    title: "Finance Manager",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A clearer view of everyday finances. Track expenses and schedules, import spreadsheets, and turn records into useful reports.",
    detail:
      "Express APIs and MongoDB aggregation power the reports. Spreadsheet imports and PDF, CSV, and Excel exports connect the workflow from entry to analysis.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    type: "finance",
    source: DATA.projects[1].github,
    live: DATA.projects[1].link,
  },
  {
    title: "Dynamic Quiz",
    category: "INTERACTIVE WEB",
    description:
      "A customizable trivia experience with timed questions, immediate feedback, and a final score. Choose a category and make every second count.",
    detail:
      "React manages the quiz flow, Open Trivia DB supplies questions, and Chakra UI supports the interface. Answer selection includes audio feedback.",
    stack: ["React", "Chakra UI", "Open Trivia DB"],
    type: "quiz",
    source: DATA.projects[2].github,
    live: DATA.projects[2].link,
  },
];
function ProjectVisual({ type }: { type: string }) {
  return (
    <div className={`project-visual ${type}`} aria-hidden="true">
      <span className="visual-label">
        INTERFACE STUDY / {type.toUpperCase()}
      </span>
      <div className="app-window">
        <div className="window-bar">
          <i />
          <i />
          <i />
          <span>
            {type === "ai"
              ? "conversation.workspace"
              : type === "finance"
                ? "finance.overview"
                : "quiz.session"}
          </span>
        </div>
        {type === "ai" ? (
          <div className="chat-demo">
            <div className="mini-logo">✳</div>
            <h4>
              A little more context.
              <br />A much better answer.
            </h4>
            <div className="chat-bubble">
              Help me understand this document. <span>↗</span>
            </div>
            <div className="response">
              <b>✳</b>
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="chat-input">
              Ask something interesting <span>↑</span>
            </div>
          </div>
        ) : type === "finance" ? (
          <div className="finance-demo">
            <p>YOUR FINANCIAL PICTURE</p>
            <h4>A clearer overview.</h4>
            <div className="demo-stats">
              <div>
                Income
                <strong>
                  $4,250<span>.00</span>
                </strong>
              </div>
              <div>
                Expenses
                <strong>
                  $1,680<span>.00</span>
                </strong>
              </div>
            </div>
            <div className="chart">
              {[34, 55, 42, 68, 51, 81, 67, 90, 72, 96, 84, 110].map((h, i) => (
                <i key={i} style={{ height: h }} />
              ))}
            </div>
            <div className="chart-label">
              <span>JAN</span>
              <span>JUN</span>
              <span>DEC</span>
            </div>
          </div>
        ) : (
          <div className="quiz-demo">
            <div className="quiz-top">
              SCIENCE & TECHNOLOGY <span>00:24</span>
            </div>
            <p>QUESTION 04 / 10</p>
            <h4>
              Curiosity is
              <br />a good starting point.
            </h4>
            <div className="quiz-answer">
              <b>A</b> Keep exploring <span>↗</span>
            </div>
            <div className="quiz-answer">
              <b>B</b> Challenge what you know
            </div>
          </div>
        )}
      </div>
      <span className="visual-note">
        Illustrative interface · sample content
      </span>
    </div>
  );
}
function App() {
  const root = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState("");
  const motion = !reduced && !paused;
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(query.matches);
    query.addEventListener("change", change);
    return () => query.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("motion-off", !motion);
    const ctx = gsap.context(() => {
      if (!motion) return;
      gsap.to(".hero-copy", {
        y: -100,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.fromTo(
          card,
          { rotateX: 9, y: 85, scale: 0.93 },
          {
            rotateX: 0,
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top 24%",
              scrub: 0.5,
            },
          },
        );
      });
      gsap.utils
        .toArray<HTMLElement>(".reveal")
        .forEach((el) =>
          gsap.from(el, {
            y: 35,
            opacity: 0,
            duration: 0.75,
            scrollTrigger: { trigger: el, start: "top 93%", once: true },
          }),
        );
    }, root);
    return () => ctx.revert();
  }, [motion]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -50% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, []);
  return (
    <div ref={root} className={motion ? "portfolio" : "portfolio motion-off"}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a href="#home" className="wordmark" aria-label="SRK home">
          srk<span>✳</span>
        </a>
        <span className="header-caption">ENGINEERING WITH INTENTION</span>
        <nav className={menu ? "nav open" : "nav"} aria-label="Main navigation">
          {nav.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenu(false)}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
              <span>0{nav.findIndex((n) => n[0] === id) + 1}</span>
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setMenu(false)}
          >
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </nav>
        <button
          className="menu-button"
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> OPEN TO INTERNSHIPS & 2027 GRAD
              ROLES
            </p>
            <h1>
              Engineering
              <br />
              ideas into
              <br />
              <span>intelligence.</span>
            </h1>
            <div className="hero-intro">
              <span className="intro-line" />
              <div>
                <p className="intro-name">Hi, I’m Sri Rama Krishna.</p>
                <p>
                  AI engineer & full-stack developer.
                  <br />
                  Connecting thoughtful interfaces with
                  <br className="desktop-break" /> the systems that make them
                  work.
                </p>
              </div>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <ArrowDown size={17} />
              </a>
              <a
                className="text-link"
                href={DATA.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Résumé <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <Suspense fallback={<div className="scene-loading">✳</div>}>
              <Scene enabled={motion} />
            </Suspense>
            <div className="art-coordinate">FIG. 01 — THE CONNECTED CORE</div>
            <div className="art-caption">
              <span>IDEA → SYSTEM → EXPERIENCE</span>
              <span>SCROLL TO UNFOLD ↘</span>
            </div>
          </div>
          <div className="hero-bottom">
            <span>MONTGOMERY, AL · MS COMPUTER SCIENCE</span>
            <a href="#projects">
              SCROLL TO DISCOVER <ArrowDown size={13} />
            </a>
            <span>PORTFOLIO / 2026</span>
          </div>
        </section>
        <div className="stack-strip">
          <span>FROM INTERFACE TO INFRASTRUCTURE</span>
          <p>
            React <b>✳</b> Python <b>✳</b> FastAPI <b>✳</b> Node.js <b>✳</b>{" "}
            MongoDB <b>✳</b> AWS
          </p>
        </div>
        <section id="projects" className="work-section section-shell">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>
                Built to solve.
                <br />
                <span>Made to matter.</span>
              </h2>
            </div>
            <p>
              A selection of projects at the intersection
              <br />
              of AI, data, and everyday experience.
            </p>
          </div>
          <div className="projects-stack">
            {projects.map((project, i) => (
              <article
                className="project-card"
                key={project.title}
                style={{ "--card-index": i } as React.CSSProperties}
              >
                <div className="project-info">
                  <p className="eyebrow">
                    <span className="project-index">0{i + 1}</span>{" "}
                    {project.category}
                  </p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <details>
                    <summary>
                      Behind the build <span>+</span>
                    </summary>
                    <p>{project.detail}</p>
                  </details>
                  <div className="tags">
                    {project.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">
                      View project <ArrowUpRight size={17} />
                    </a>
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} source on GitHub`}
                    >
                      <Github size={16} /> Source
                    </a>
                  </div>
                </div>
                <ProjectVisual type={project.type} />
              </article>
            ))}
          </div>
          <div className="more-work reveal">
            <p className="eyebrow">MORE EXPLORATIONS</p>
            <a href={DATA.projects[3].github} target="_blank" rel="noreferrer">
              <span>
                Browser Media Capture
                <small>
                  Screen + microphone recording with native browser APIs
                </small>
              </span>
              <ArrowUpRight />
            </a>
            <a href={DATA.projects[4].github} target="_blank" rel="noreferrer">
              <span>
                Rock, Paper, Scissors
                <small>JavaScript game with locally saved scores</small>
              </span>
              <ArrowUpRight />
            </a>
          </div>
        </section>
        <section id="experience" className="experience section-shell">
          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">02 / IN PRACTICE</p>
              <h2>Under the hood.</h2>
            </div>
            <p>
              Hands-on experience building AI services
              <br />
              and the infrastructure behind them.
            </p>
          </div>
          <div className="experience-layout reveal">
            <div className="company">
              <span className="small-label">MAR 2024 — FEB 2025</span>
              <h3>Eficens Systems</h3>
              <p>Software Development Engineer Intern</p>
              <span className="remote">
                <i /> Remote
              </span>
            </div>
            <div className="experience-points">
              <div>
                <span>01</span>
                <article>
                  <h4>From models to applications</h4>
                  <p>
                    Worked on Trusynth, a generative AI training platform using
                    GPT models and ChromaDB, and developed backend services for
                    AI workflows.
                  </p>
                </article>
              </div>
              <div>
                <span>02</span>
                <article>
                  <h4>Less infrastructure. More clarity.</h4>
                  <p>
                    Contributed to container consolidation and cloud resource
                    optimization on AWS.
                  </p>
                </article>
              </div>
              <div>
                <span>03</span>
                <article>
                  <h4>Built for the next iteration</h4>
                  <p>
                    Worked on an Express-to-NestJS migration and an online
                    examination platform using FastAPI and AWS Cognito.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about section-shell">
          <div className="about-image reveal">
            <img
              src={DATA.image}
              alt="Portfolio photograph selected by Sri Rama Krishna"
              loading="lazy"
            />
            <span>ALWAYS CURIOUS. ALWAYS BUILDING.</span>
            <div className="image-cross">+</div>
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">03 / THE PERSON BEHIND THE CODE</p>
            <h2>
              Curiosity drives.
              <br />
              <span>Engineering delivers.</span>
            </h2>
            <p>
              I’m Sri Rama Krishna Chowdary Maddipati, a developer interested in
              how intelligent systems become useful products.
            </p>
            <p>
              I work across React interfaces, Python and Node.js services, and
              cloud infrastructure. I enjoy connecting the pieces: a clear user
              experience, a dependable API, and data that helps the system do
              something useful.
            </p>
            <div className="education">
              <span className="small-label">CURRENT CHAPTER</span>
              <h3>MS in Computer Science</h3>
              <p>Auburn University at Montgomery</p>
              <span>Expected graduation · May 2027</span>
            </div>
            <a
              href={DATA.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              View my résumé <Download size={17} />
            </a>
          </div>
        </section>
        <section id="contact" className="contact section-shell">
          <div className="contact-top">
            <p className="eyebrow">
              <span className="status-dot" /> LET’S BUILD WHAT’S NEXT
            </p>
            <p>
              Seeking CPT internships
              <br />& 2027 full-time roles with OPT.
            </p>
          </div>
          <a className="contact-title" href={`mailto:${DATA.email}`}>
            Have something
            <br />
            in mind? <span>Let’s talk.</span>
            <MoveUpRight aria-hidden="true" />
          </a>
          <div className="contact-bottom">
            <a href={`mailto:${DATA.email}`}>
              {DATA.email}
              <ArrowUpRight size={17} />
            </a>
            <div>
              {DATA.socials
                .filter((s) => s.name !== "Email")
                .map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                    {s.name}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a href="#home" className="wordmark">
          srk<span>✳</span>
        </a>
        <p>© {new Date().getFullYear()} SRI RAMA KRISHNA MADDIPATI</p>
        <button
          aria-pressed={paused || reduced}
          onClick={() => setPaused(!paused)}
          disabled={reduced}
        >
          {reduced
            ? "Reduced motion enabled"
            : paused
              ? "Enable motion"
              : "Pause motion"}
          <span className={motion ? "motion-dot on" : "motion-dot"} />
        </button>
        <a href="#home">
          BACK TO TOP <ArrowRight size={14} />
        </a>
      </footer>
    </div>
  );
}
export default App;
