import { useState, useEffect } from "react";
import { Sun, Moon, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { DATA } from "../constants/data";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

const Navbar = ({ isDark, setIsDark }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <Github size={16} />;
      case "linkedin":
        return <Linkedin size={16} />;
      case "email":
        return <Mail size={16} />;
      default:
        return null;
    }
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-100 flex justify-between items-center px-6 md:px-12 py-8 bg-brand-bg/80 backdrop-blur-md transition-colors duration-500">
        <div className="flex items-center gap-6">
          <div className="font-bold text-2xl tracking-tighter text-brand-text">
            SRK<span className="text-brand-muted">.</span>
          </div>
          <div className="flex md:hidden items-center gap-4 border-l border-brand-border/20 pl-4">
            {DATA.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-brand-muted hover:text-brand-text transition-colors"
              >
                {getIcon(social.name)}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-widest text-brand-text">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:opacity-40 transition-opacity"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-300"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-brand-text z-110"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-90 flex flex-col items-center justify-center transition-all duration-700 ease-in-out md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100 backdrop-blur-xl bg-brand-bg/50"
            : "-translate-y-full opacity-0 backdrop-blur-none bg-transparent"
        }`}
      >
        <div className="flex flex-col gap-10 text-center">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`text-5xl font-bold tracking-tighter uppercase text-brand-text transition-all duration-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-30">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Menu
          </p>
          <div className="w-px h-16 bg-brand-text"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
