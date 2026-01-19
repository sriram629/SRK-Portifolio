import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <main className="relative min-h-screen bg-brand-bg transition-colors duration-500 overflow-hidden">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <SocialIcons />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Resume />
      <Contact />
    </main>
  );
}

export default App;
