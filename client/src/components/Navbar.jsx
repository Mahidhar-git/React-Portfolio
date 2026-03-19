import React, { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  GraduationCap,
  Code,
  Briefcase,
  Award,
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Certifications", href: "#certifications", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setTheme(stored);
      if (stored === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{ borderRadius: "999px", padding: "8px" }}
      className="hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
    >
      {theme === "dark"
        ? <Sun className="w-5 h-5 text-orange-400" />
        : <Moon className="w-5 h-5 text-orange-500" />
      }
    </button>
  );
};

const NavItem = ({ item, isActive }) => {
  const Icon = item.icon;
  const handleClick = () => {
    const el = document.getElementById(item.href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label={item.name}
      style={{
        borderRadius: "12px",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: isActive ? "#f97316" : "transparent",
        color: isActive ? "#ffffff" : undefined,
        border: "none",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
      className={isActive ? "" : "text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400"}
    >
      <Icon className="w-5 h-5" />
      <span className="hidden sm:block" style={{ fontSize: "11px", marginTop: "4px", fontWeight: 500 }}>
        {item.name}
      </span>
    </button>
  );
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollYRef.current = currentScrollY;
      const scrollPosition = currentScrollY + 100;
      for (const item of navItems) {
        const sectionId = item.href.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      <motion.div
        className="fixed top-4 right-4 z-50 flex gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => window.open("https://github.com/Mahidhar-git", "_blank")}
          style={{ borderRadius: "999px" }}
          className="p-2 bg-white/80 dark:bg-black/80 backdrop-blur-md text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/30 border border-gray-200 dark:border-orange-900/40 shadow-sm flex items-center justify-center transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-5 h-5" />
        </motion.button>

        <motion.button
          onClick={() => window.open("https://www.linkedin.com/in/g-mahidhar-reddy/", "_blank")}
          style={{ borderRadius: "999px" }}
          className="p-2 bg-white/80 dark:bg-black/80 backdrop-blur-md text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/30 border border-gray-200 dark:border-orange-900/40 shadow-sm flex items-center justify-center transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin className="w-5 h-5" />
        </motion.button>
      </motion.div>

      <motion.div
        style={{
          position: "fixed",
          bottom: "16px",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "center",
          zIndex: 50,
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: showNavbar ? 0 : 200, opacity: showNavbar ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="flex items-center justify-center bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg p-2 border border-gray-200 dark:border-orange-900/40"
          style={{ borderRadius: "999px" }}
        >
          <div className="flex space-x-1 items-center">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                isActive={activeSection === item.href.replace("#", "")}
              />
            ))}
            <div
              className="flex items-center px-2 ml-1"
              style={{ borderLeft: "1px solid rgba(234,88,12,0.2)" }}
            >
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};