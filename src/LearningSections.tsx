import {
  ArrowUpRight,
  Award,
  BookOpen,
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Cpu,
  GraduationCap,
  Layers3,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { coursework, developmentPrograms } from "./learning";

const courseIcons = {
  network: Network,
  workflow: Workflow,
  cloud: Cloud,
  web: Code2,
  cpu: Cpu,
  brain: BrainCircuit,
  layers: Layers3,
  calculus: ChartNoAxesCombined,
};
const programIcons = {
  compute: Cpu,
  cloud: Cloud,
  career: ChartNoAxesCombined,
  foundations: ShieldCheck,
};

export function Development() {
  return (
    <section
      className="development-section"
      aria-labelledby="development-heading"
    >
      <div className="development-heading">
        <div>
          <p className="eyebrow">
            <span>CONTINUING TO GROW</span> / TECHNICAL & CAREER DEVELOPMENT
          </p>
          <h3 id="development-heading">Building beyond the classroom.</h3>
        </div>
        <p>
          New perspectives, practical skills, and the people helping me become a
          better engineer.
        </p>
      </div>
      <div className="development-grid">
        {developmentPrograms.map((program) => {
          const Icon = programIcons[program.illustration];
          return (
            <article
              className={`development-card program-${program.id}`}
              key={program.id}
            >
              <div className="program-art" aria-hidden="true">
                <span className="program-art-corner" />
                <span className="program-art-orbit">
                  <Icon size={34} strokeWidth={1.3} />
                </span>
                <span className="program-art-track">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span className="mono">{program.illustrationLabel}</span>
              </div>
              <div className="program-body">
                <p className="program-organization mono">
                  {program.organization}
                </p>
                <h4>{program.title}</h4>
                <p className="program-type mono">{program.type}</p>
                <p className="program-summary">{program.summary}</p>
                <ul className="program-lessons">
                  {program.lessons.map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
                <ul
                  className="program-topics"
                  aria-label={`${program.title} topics`}
                >
                  {program.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section
      className="section container education-section"
      id="education"
      aria-labelledby="education-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span>04</span> / EDUCATION
          </p>
          <h2 id="education-heading">The foundation behind the work.</h2>
        </div>
        <p className="section-description">
          Computer science fundamentals, a builder’s curiosity, and a place to
          put both into practice.
        </p>
      </div>
      <div className="university-card">
        <div className="university-identity">
          <img
            src={`${import.meta.env.BASE_URL}images/logos/grambling.png`}
            width="337"
            height="83"
            alt="Grambling State University logo"
            loading="lazy"
          />
          <p className="mono">GRAMBLING, LOUISIANA</p>
          <span className="university-illustration" aria-hidden="true">
            <GraduationCap size={74} strokeWidth={1} />
            <span>LEARN. BUILD. REPEAT.</span>
          </span>
        </div>
        <div className="university-detail">
          <div className="degree-topline">
            <span className="mono">JUNIOR · CLASS OF 2028</span>
            <a
              href="https://www.gram.edu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Grambling State University (opens in a new tab)"
            >
              <ArrowUpRight size={20} />
            </a>
          </div>
          <h3>Grambling State University</h3>
          <p className="degree-name">Bachelor of Science in Computer Science</p>
          <div className="education-facts">
            <div>
              <strong>3.90</strong>
              <span>CUMULATIVE GPA</span>
            </div>
            <div>
              <strong>May 2028</strong>
              <span>EXPECTED GRADUATION</span>
            </div>
          </div>
          <div className="academic-honors">
            <Award size={19} />
            <div>
              <strong>Academic Achievement Scholarship</strong>
              <span>
                Alpha Lambda Delta Honor Society · Recognized for a 3.80+ GPA
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="coursework-heading">
        <h3>
          <BookOpen size={20} /> Relevant coursework
        </h3>
        <span className="mono">FROM THEORY TO PRACTICE</span>
      </div>
      <div className="coursework-grid">
        {coursework.map((course) => {
          const Icon = courseIcons[course.icon];
          return (
            <article
              className={`course-card course-${course.icon}`}
              key={course.title}
            >
              <div className="course-illustration" aria-hidden="true">
                <Icon size={28} strokeWidth={1.35} />
                <span className="mono">{course.notation}</span>
              </div>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
