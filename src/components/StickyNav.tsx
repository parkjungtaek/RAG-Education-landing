import { useState, useEffect } from "react";
import { Info, Cpu, Gift, Calendar, Folder, Building } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { id: "overview", label: "과정 개요", icon: Info },
  { id: "tech", label: "기술 스택", icon: Cpu },
  { id: "benefits", label: "교육 혜택", icon: Gift },
  { id: "curriculum", label: "커리큘럼", icon: Calendar },
  { id: "projects", label: "프로젝트", icon: Folder },
  { id: "companies", label: "참여기업", icon: Building },
];

export const StickyNav = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      // Simple scroll spy
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 py-4 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-smooth ${
                activeSection === item.id
                  ? "gradient-bg text-white shadow-glow"
                  : "hover:bg-muted"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
