import { DATA } from "../constants/data";

const SocialIcons = () => {
  return (
    <div className="hidden md:flex fixed left-6 md:left-12 bottom-0 z-100 flex-col items-center gap-8 pb-12 mix-blend-difference">
      {DATA.socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="text-[10px] font-mono uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180 text-white hover:-translate-y-2 transition-all duration-300"
        >
          {social.name}
        </a>
      ))}
      <div className="w-[1.5px] h-20 bg-white opacity-50"></div>
    </div>
  );
};

export default SocialIcons;
