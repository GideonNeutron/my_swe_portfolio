import { useState } from "react";
import { ArrowUpRight, Code2, Search, X } from "lucide-react";
import { technologies, techCategories, techLogo, type TechCategory } from "./techData";
import "./techStack.css";

export function TechStack() {
  const [category, setCategory] = useState<TechCategory | "All">("All");
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();
  const matching = technologies.filter((tech) =>
    `${tech.name} ${tech.detail} ${tech.aliases ?? ""} ${tech.category}`.toLowerCase().includes(search),
  );
  const visible = matching.filter((tech) => category === "All" || tech.category === category);

  return (
    <section className="section stack-section" id="stack" aria-labelledby="stack-heading">
      <div className="container">
        <div className="stack-heading">
          <div>
            <p className="eyebrow"><span>03</span> / THE TECH STACK</p>
            <h2 id="stack-heading">Ideas need the right tools.</h2>
            <p className="stack-intro">From the interface to the infrastructure. An evolving toolkit shaped by
              my projects, research, coursework, and career programs.</p>
          </div>
          <div className="stack-signature" aria-hidden="true">
            <span className="mono">BUILD / CONNECT / SHIP</span>
            <Code2 size={42} strokeWidth={1.25} />
            <span className="stack-signature-line" />
          </div>
        </div>

        <div className="stack-console">
          <div className="stack-console-bar">
            <span className="mono stack-console-title"><span className="stack-status-dot" /> toolkit / explore</span>
            <label className="stack-search">
              <Search size={16} aria-hidden="true" />
              <span className="sr-only">Search technologies</span>
              <input type="search" placeholder="Find a technology…" value={query}
                onChange={(event) => setQuery(event.target.value)} />
              {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")}><X size={15} /></button>}
            </label>
          </div>
          <div className="stack-filters" role="group" aria-label="Filter technologies by category">
            {(["All", ...techCategories] as const).map((item) => (
              <button type="button" key={item} aria-pressed={category === item}
                aria-controls="stack-results" onClick={() => setCategory(item)}>
                {item}<span>{item === "All" ? matching.length : matching.filter((tech) => tech.category === item).length}</span>
              </button>
            ))}
          </div>
          <div className="stack-results-bar">
            <h3>{category === "All" ? "The full toolkit" : category}</h3>
            <span className="mono" role="status">{visible.length} {visible.length === 1 ? "technology" : "technologies"}</span>
          </div>
          <ul className="stack-grid" id="stack-results" aria-label="Technologies">
            {visible.map((tech) => (
              <li className="tech-card" key={tech.name}>
                <div className={`tech-logo${tech.logo === "htcondor.png" ? " tech-logo-wide" : ""}`}>
                  <img src={techLogo(tech.logo)} alt="" width="34" height="34" loading="lazy" />
                </div>
                <div className="tech-label"><h4>{tech.name}</h4><p>{tech.detail}</p></div>
              </li>
            ))}
          </ul>
          {visible.length === 0 && <div className="stack-empty">
            <Search size={28} aria-hidden="true" />
            <p>No matching technologies in {category === "All" ? "the toolkit" : category.toLowerCase()}.</p>
            <button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>Show the full toolkit</button>
          </div>}
          <div className="stack-site-note">
            <span><Code2 size={17} aria-hidden="true" /> This portfolio is built with</span>
            <div>{[["React", "react"], ["TypeScript", "typescript"], ["Vite", "vitejs"]].map(([name, logo]) =>
              <span className="stack-site-tech" key={name}><img src={techLogo(logo)} alt="" width="18" height="18" />{name}</span>,
            )}</div>
            <a href="#work">See the tools at work <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
