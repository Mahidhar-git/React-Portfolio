import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import jsIcon from "@/assets/icons/javascript.png";
import reactIcon from "@/assets/icons/react.png";
import javaIcon from "@/assets/icons/java.png";
import pythonIcon from "@/assets/icons/python.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import MySQLIcon from "@/assets/icons/mysql.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import dockerIcon from "@/assets/icons/docker.png";
import vscodeIcon from "@/assets/icons/vscode.png";

const springBootIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg";
const intellijIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg";
const postmanIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg";
const tailwindIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg";
const cIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg";

const skills = [
  { name: "Java", level: 85, category: "backend", icon: "java" },
  { name: "Spring Boot", level: 55, category: "backend", icon: "springboot" },
  { name: "REST APIs", level: 50, category: "backend", icon: "postman" },
  { name: "JWT Auth", level: 50, category: "backend", icon: "springboot" },
  { name: "HTML5", level: 85, category: "frontend", icon: "html" },
  { name: "CSS3", level: 80, category: "frontend", icon: "css" },
  { name: "JavaScript", level: 70, category: "frontend", icon: "javascript" },
  { name: "React", level: 50, category: "frontend", icon: "react" },
  { name: "Tailwind CSS", level: 70, category: "frontend", icon: "tailwind" },
  { name: "MySQL", level: 80, category: "database", icon: "mysql" },
  { name: "PostgreSQL", level: 70, category: "database", icon: "postgresql" },
  { name: "Git", level: 80, category: "tools", icon: "git" },
  { name: "GitHub", level: 80, category: "tools", icon: "github" },
  { name: "Docker", level: 60, category: "tools", icon: "docker" },
  { name: "VS Code", level: 90, category: "tools", icon: "vscode" },
  { name: "IntelliJ", level: 80, category: "tools", icon: "intellij" },
  { name: "Postman", level: 75, category: "tools", icon: "postman" },
  { name: "C", level: 80, category: "other", icon: "c" },
  { name: "Python", level: 40, category: "other", icon: "python" },
  { name: "DSA", level: 70, category: "other", icon: "java" },
  { name: "OOP", level: 80, category: "other", icon: "java" },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" },
  { id: "other", label: "CS Fundamentals" },
];

const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  javascript: jsIcon,
  react: reactIcon,
  tailwind: tailwindIcon,
  java: javaIcon,
  springboot: springBootIcon,
  python: pythonIcon,
  c: cIcon,
  mongodb: mongodbIcon,
  postgresql: postgresqlIcon,
  mysql: MySQLIcon,
  git: gitIcon,
  github: githubIcon,
  docker: dockerIcon,
  vscode: vscodeIcon,
  intellij: intellijIcon,
  postman: postmanIcon,
};

const SkillBar = ({ level }) => (
  <div className="w-full h-2 bg-orange-500/10 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
    />
  </div>
);

const InfiniteScrollSkills = ({ skills }) => {
  const duplicatedSkills = [...skills, ...skills, ...skills];
  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-8 mb-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-orange-500/30 flex items-center justify-center shadow-lg hover:scale-110 hover:border-orange-500/70 transition-all duration-300"
              style={{ boxShadow: "0 0 0 0 rgba(249,115,22,0)" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(249,115,22,0.2)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 0 0 rgba(249,115,22,0)"}
            >
              <img src={iconImages[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-xs font-medium text-center text-muted-foreground">{skill.name}</span>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-8"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...duplicatedSkills].reverse().map((skill, index) => (
          <div key={`${skill.name}-reverse-${index}`} className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-orange-500/30 flex items-center justify-center shadow-lg hover:scale-110 hover:border-orange-500/70 transition-all duration-300">
              <img src={iconImages[skill.icon]} alt={skill.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="text-xs font-medium text-center text-muted-foreground">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(skill =>
    activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-28 px-4 bg-gradient-to-br from-background via-orange-500/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold tracking-[4px] text-orange-500 mb-3">TECHNICAL SKILLS</p>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-foreground">
            My{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with and my honest proficiency levels
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-card border border-orange-500/20 text-muted-foreground hover:border-orange-500/50 hover:text-orange-500"
              }`}
              style={{ borderRadius: "999px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {activeCategory === "all" ? (
          <InfiniteScrollSkills skills={skills} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-card p-5 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg group"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:border-orange-500/50 transition-all duration-300">
                      <img src={iconImages[skill.icon]} alt={skill.name} className="w-7 h-7 object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold group-hover:text-orange-500 transition-colors">
                          {skill.name}
                        </h3>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                          skill.level >= 75 ? "bg-orange-500/10 text-orange-500" :
                          skill.level >= 50 ? "bg-amber-500/10 text-amber-500" :
                          "bg-yellow-500/10 text-yellow-600"
                        }`}>
                          {skill.level >= 75 ? "Strong" : skill.level >= 50 ? "Intermediate" : "Basic"}
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};