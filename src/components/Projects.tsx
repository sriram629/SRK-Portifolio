import React, { useState, useRef } from "react";
import { DATA } from "../constants/data";
import { ChevronDown } from "lucide-react";

const MagneticLink = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <div onMouseMove={handleMouse} onMouseLeave={reset} className="flex">
      <div
        ref={ref}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        className="transition-transform duration-200 ease-out"
      >
        {children}
      </div>
    </div>
  );
};

const Projects = () => {
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(
    null,
  );

  const handleMobileClick = (index: number) => {
    if (window.innerWidth < 1024) {
      setMobileExpandedIndex(mobileExpandedIndex === index ? null : index);
    }
  };

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

        <div className="space-y-0">
          {DATA.projects.map((project, index) => {
            const isMobileOpen = mobileExpandedIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleMobileClick(index)}
                className={`group border-b border-brand-border overflow-hidden transition-all duration-700 ease-in-out ${
                  isMobileOpen ? "is-mobile-expanded" : ""
                }`}
              >
                <div className="flex justify-between items-center py-10 cursor-default">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-mono text-sm text-brand-muted">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase group-hover:italic transition-all">
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-brand-muted italic opacity-60 group-hover:opacity-100 transition-opacity">
                        {project.tagline}
                      </p>
                    </div>
                    <ChevronDown
                      className="md:hidden opacity-40 transition-transform group-[.is-mobile-expanded]:rotate-180"
                      size={18}
                    />
                  </div>
                </div>

                <div
                  className={`
                  transition-all duration-1000 ease-in-out
                  md:max-h-0 md:group-hover:max-h-300 
                  ${isMobileOpen ? "max-h-500 opacity-100" : "max-h-0 opacity-0 md:opacity-100"}
                `}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 pt-4 pb-20 items-stretch">
                    <div className="lg:col-span-7 space-y-8 pb-8 lg:pb-0">
                      <p className="text-2xl md:text-4xl font-light leading-snug italic">
                        "{project.description}"
                      </p>
                      <div className="p-8 bg-brand-text text-brand-bg">
                        <p className="font-mono text-[10px] uppercase mb-4 opacity-60">
                          Engineering Victory
                        </p>
                        <p className="text-xl font-bold">
                          {project.technicalWin}
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-brand-border" />

                      <div className="h-full flex flex-col justify-between pl-0 lg:pl-12 pt-8 lg:pt-0">
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

                        <div className="flex gap-12 pt-12">
                          <MagneticLink>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs font-bold uppercase tracking-widest border-b border-brand-text pb-1 block hover:opacity-50 transition-all"
                            >
                              Live ↗
                            </a>
                          </MagneticLink>
                          <MagneticLink>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs font-bold uppercase tracking-widest italic border-b border-brand-text pb-1 block hover:opacity-50 transition-all"
                            >
                              Source
                            </a>
                          </MagneticLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
