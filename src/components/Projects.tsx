import { DATA } from "../constants/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-brand-bg text-brand-text py-24 px-6 md:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 border-b border-brand-border pb-10">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-brand-muted mb-4">
            Selected Works
          </p>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase">
            Projects
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-0">
          {DATA.projects.map((project, index) => (
            <div
              key={index}
              className="group border-b border-brand-border overflow-hidden transition-all duration-700 ease-in-out"
            >
              {/* Project Header (Always Visible) */}
              <div className="flex justify-between items-center py-10 cursor-default">
                <div className="flex items-baseline gap-8">
                  <span className="font-mono text-sm text-brand-muted">
                    0{index + 1}
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase group-hover:italic transition-all">
                    {project.name}
                  </h3>
                </div>
                <div className="hidden md:block">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brand-muted italic">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Project Content (Expands on Hover or Scroll-Focus) */}
              <div className="max-h-0 group-hover:max-h-250 transition-all duration-1000 ease-in-out">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 pt-4">
                  {/* Technical Narrative */}
                  <div className="lg:col-span-7 space-y-8">
                    <p className="text-2xl md:text-4xl font-light leading-snug">
                      "{project.description}"
                    </p>
                    <div className="p-8 bg-brand-text text-brand-bg">
                      <p className="font-mono text-[10px] uppercase mb-4 opacity-60">
                        Engineering Victory
                      </p>
                      <p className="text-xl font-bold leading-tight">
                        {project.technicalWin}
                      </p>
                    </div>
                  </div>

                  {/* Metrics & Metadata */}
                  <div className="lg:col-span-5 flex flex-col justify-between border-l border-brand-border pl-12">
                    <div className="space-y-8">
                      <div>
                        <p className="text-6xl font-bold tracking-tighter">
                          {project.impactValue}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-brand-muted">
                          {project.impactLabel}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[9px] border border-brand-border px-2 py-1 uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-8 pt-12">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold uppercase tracking-widest hover:line-through"
                      >
                        Live ↗
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold uppercase tracking-widest italic hover:line-through"
                      >
                        Source {"</>"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
