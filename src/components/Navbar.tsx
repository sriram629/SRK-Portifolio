import { Sun, Moon } from "lucide-react";
interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

const Navbar = ({ isDark, setIsDark }: NavbarProps) => {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" }, // Points to professional history
    { name: "Projects", href: "#projects" }, // Points to your 5-project accordion
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 bg-brand-bg/80 backdrop-blur-sm transition-colors duration-500">
      <div className="font-bold text-2xl tracking-tighter text-brand-text">
        SRK<span className="text-brand-muted">.</span>
      </div>

      <div className="flex items-center gap-8">
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
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 text-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-300"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
