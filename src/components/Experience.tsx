import { DATA } from "../constants/data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 md:px-24 border-t border-brand-border bg-brand-bg"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-brand-muted mb-4  md:text-left">
            Professional Experience
          </p>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-brand-text  md:text-left">
            WORK.
          </h2>
        </div>

        {DATA.experience.map((exp, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h3 className="text-3xl font-bold text-brand-text uppercase">
                {exp.company}
              </h3>
              <p className="text-brand-muted font-mono text-sm mt-2">
                {exp.role}
              </p>
              <p className="text-brand-muted font-mono text-xs mt-1 italic">
                {exp.duration}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 border border-brand-border text-[10px] font-mono text-brand-text uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <p className="text-xl text-brand-text font-light leading-relaxed">
                {exp.summary}
              </p>
              <div className="space-y-8">
                {exp.highlights.map((item, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-sm font-mono uppercase tracking-widest text-brand-muted mb-2">
                      {item.title}
                    </h4>
                    <p className="text-lg text-brand-text leading-snug">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
