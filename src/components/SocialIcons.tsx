import { DATA } from "../constants/data";

const SocialIcons = () => {
  return (
    <div className="fixed left-6 md:left-12 bottom-0 z-50 flex flex-col items-center gap-8 pb-12 md:flex">
      {DATA.socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="text-[10px] font-mono uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180 brand-text hover:-translate-y-2 transition-transform"
        >
          {social.name}
        </a>
      ))}

      <div className="w-px h-20 bg-brand-border transition-colors duration-500"></div>
    </div>
  );
};

export default SocialIcons;
