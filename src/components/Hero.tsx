import { DATA } from "../constants/data";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-6 md:px-24">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-brand-text">
          {DATA.name}
        </h1>
        <h2 className="text-xl md:text-3xl font-light mb-8 text-brand-muted">
          {DATA.role}
        </h2>
        <p className="max-w-lg text-lg leading-relaxed text-brand-text opacity-90">
          {DATA.description}
        </p>

        <div className="mt-12">
          <a
            href="#projects"
            className="inline-block px-10 py-4 border border-brand-border text-brand-text text-sm font-mono uppercase tracking-widest hover:bg-brand-text hover:text-brand-bg transition-all"
          >
            Explore Projects
          </a>
        </div>
      </div>

      <div className="hidden lg:block w-1/3 hero-image-container p-4">
        <img
          src={DATA.image}
          alt={DATA.name}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
