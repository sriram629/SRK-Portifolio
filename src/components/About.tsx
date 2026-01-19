import { DATA } from "../constants/data";

const About = () => {
  const { about } = DATA;

  return (
    <section id="about" className="py-24 px-6 md:px-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-brand-text sticky top-24 whitespace-pre-line">
            {about.title}
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-16">
          <p className="text-3xl md:text-5xl font-light leading-tight text-brand-text">
            {about.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-brand-muted font-mono text-sm leading-relaxed">
            <div className="space-y-4">
              <p className="uppercase tracking-widest text-brand-text border-b border-brand-border pb-2">
                {about.philosophy.title}
              </p>
              <p>{about.philosophy.text}</p>
            </div>
            <div className="space-y-4">
              <p className="uppercase tracking-widest text-brand-text border-b border-brand-border pb-2">
                {about.education.title}
              </p>
              <p>{about.education.text}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 border-y border-brand-border py-8">
            {about.metrics.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-brand-text">
                  {stat.value}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-brand-muted mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
