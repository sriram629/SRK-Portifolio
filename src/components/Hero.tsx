import { motion } from "framer-motion";
import { DATA } from "../constants/data";

const Hero = () => {
  // Animation variants for staggered text entry
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-between px-6 md:px-24 pt-20">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-muted">
            Status: Currently building RAG Pipelines with LangChain
          </p>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-6xl font-bold tracking-tighter mb-4 text-brand-text"
        >
          {DATA.name}
        </motion.h1>

        <motion.h2
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-3xl font-light mb-8 text-brand-muted italic"
        >
          {DATA.role}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-lg text-lg leading-relaxed text-brand-text opacity-90"
        >
          {DATA.description}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="#projects"
            className="group relative inline-block px-10 py-4 border border-brand-border text-brand-text text-sm font-mono uppercase tracking-widest overflow-hidden transition-all"
          >
            <span className="relative z-10 group-hover:text-brand-bg transition-colors duration-300">
              Explore Projects
            </span>
            <div className="absolute inset-0 bg-brand-text translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block w-1/3 hero-image-container p-4"
      >
        <motion.img
          src={DATA.image}
          alt={DATA.name}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
