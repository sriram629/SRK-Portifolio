import { DATA } from "../constants/data";

const Resume = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-24 border-t border-brand-border"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-text mb-8">
            Experience & <br /> Vision
          </h3>
          <p className="text-brand-text/80 text-lg md:text-xl leading-relaxed max-w-md">
            I specialize in full-stack architecture with a growing focus on AI
            engineering. My goal is to build software that is not just
            functional, but resilient.
          </p>
        </div>

        <div className="flex flex-col justify-between border-l border-brand-border pl-8 md:pl-16">
          <div className="space-y-8">
            <div>
              <p className="font-mono text-xs uppercase text-brand-muted mb-2">
                Education
              </p>
              <p className="text-xl font-medium text-brand-text">
                Master's Student in Computer Science
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-brand-muted mb-2">
                Specialization
              </p>
              <p className="text-xl font-medium text-brand-text">
                AI Orchestration & Full-Stack Systems
              </p>
            </div>
          </div>

          <a
            href={DATA.resumeUrl}
            target="_blank"
            className="mt-12 inline-block w-fit px-8 py-4 border border-brand-border text-brand-text font-mono text-xs uppercase tracking-widest hover:bg-brand-text hover:text-brand-bg transition-all"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
