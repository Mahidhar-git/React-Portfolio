import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const educationData = [
  {
    num: "01 — CURRENT",
    icon: "🏛️",
    school: "Sri Venkateswara College of Engineering",
    degree: "B.Tech · Computer Science & Engineering",
    year: "2022 – 2026 · Tirupati, Andhra Pradesh",
    grade: "9.09",
    gradeLabel: "/ 10.0 CGPA",
  },
  {
    num: "02 — INTERMEDIATE",
    icon: "📚",
    school: "Sai Sri Chaitanya Junior College",
    degree: "Class XII · MPC · Board of Intermediate Education",
    year: "2020 – 2022 · Palamaner, Andhra Pradesh",
    grade: "95.7%",
    gradeLabel: "percentage",
  },
  {
    num: "03 — SECONDARY",
    icon: "🏫",
    school: "Sri Sarada English Medium High School",
    degree: "Class X · Board of Secondary Education",
    year: "2020 · Palamaner, Andhra Pradesh",
    grade: "96.5%",
    gradeLabel: "percentage",
  },
];

export const EducationSection = () => {
  const [phase, setPhase] = useState("idle");
  const particlesRef = useRef([]);

  const generateParticles = () => {
    const colors = ["#f97316","#fb923c","#fbbf24","#ffffff","#fed7aa","#fdba74"];
    return Array.from({ length: 50 }, (_, i) => {
      const angle = (i / 50) * 360 + Math.random() * 15;
      const dist = 120 + Math.random() * 180;
      const tx = Math.cos((angle * Math.PI) / 180) * dist;
      const ty = Math.sin((angle * Math.PI) / 180) * dist;
      const size = 3 + Math.random() * 9;
      return { id: i, tx, ty, size, color: colors[i % colors.length], delay: i * 0.008 };
    });
  };

  const handleClick = () => {
    if (phase !== "idle") return;
    setPhase("loading");
    particlesRef.current = generateParticles();
    setTimeout(() => setPhase("exploding"), 2000);
    setTimeout(() => setPhase("cards"), 2600);
  };

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10" />

      <p className="text-xs font-bold tracking-[4px] text-orange-500 mb-3">
        ACADEMIC JOURNEY
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-16 text-center">
        Built on a Strong{" "}
        <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-400 bg-clip-text text-transparent">
          Foundation
        </span>
      </h2>

      <div className="relative flex items-center justify-center w-full min-h-[380px]">

        {/* CAP */}
        <AnimatePresence>
          {phase === "idle" && (
            <motion.div
              className="flex flex-col items-center justify-center cursor-pointer relative z-10"
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
              onClick={handleClick}
            >
              <div className="relative flex items-center justify-center">
                {[130, 200, 270].map((size, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border border-orange-500/20"
                    style={{ width: size, height: size }}
                    animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
                  />
                ))}
                <motion.div
                  className="w-28 h-28 rounded-full flex items-center justify-center text-5xl relative z-10"
                  style={{
                    background: "radial-gradient(circle at 35% 35%, #fb923c, #ea580c)",
                    boxShadow: "0 0 50px rgba(249,115,22,0.5), 0 0 100px rgba(249,115,22,0.15)",
                  }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎓
                </motion.div>
              </div>
              <motion.p
                className="mt-5 text-xs font-bold tracking-[3px] text-orange-500/70"
                animate={{ y: [0, -5, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦ TAP TO EXPLORE ✦
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LOADER */}
        <AnimatePresence>
          {phase === "loading" && (
            <motion.div
              className="absolute flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.4, transition: { duration: 0.3 } }}
              transition={{ duration: 0.3 }}
            >
              {[120, 90, 60].map((size, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    border: `${i === 0 ? "3px" : "2px"} solid transparent`,
                   borderTopColor: i === 0 ? "#f97316" : i === 2 ? "#fbbf24" : "transparent",
                    borderRightColor: i === 0 ? "#fbbf24" : "transparent",
                    borderBottomColor: i === 1 ? "#fb923c" : "transparent",
                    borderTopColor: i === 1 ? "transparent" : i === 2 ? "#fbbf24" : "#f97316",
                  }}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: i === 2 ? 0.6 : i === 1 ? 1.2 : 0.8, repeat: Infinity, ease: "linear" }}
                />
              ))}
              <motion.div
                className="absolute w-3 h-3 rounded-full bg-orange-500"
                style={{ boxShadow: "0 0 20px #f97316" }}
                animate={{ boxShadow: ["0 0 10px #f97316", "0 0 30px #f97316, 0 0 60px rgba(249,115,22,0.4)", "0 0 10px #f97316"] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* EXPLOSION PARTICLES */}
        <AnimatePresence>
          {phase === "exploding" && (
            <>
              {particlesRef.current.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full"
                  style={{ width: p.size, height: p.size, background: p.color }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{ x: p.tx, y: p.ty, opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4 + Math.random() * 0.3, delay: p.delay, ease: "easeOut" }}
                />
              ))}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border-2 border-orange-500"
                  style={{ width: 110, height: 110 }}
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 10, opacity: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                />
              ))}
              <motion.div
                className="absolute inset-0 bg-white rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.25, 0] }}
                transition={{ duration: 0.5 }}
              />
            </>
          )}
        </AnimatePresence>

        {/* CARDS */}
        <AnimatePresence>
          {phase === "cards" && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {educationData.map((edu, i) => (
                <motion.div
                  key={i}
                  className="relative rounded-2xl p-5 overflow-hidden border border-orange-500/20 bg-card group hover:border-orange-500/60 transition-colors duration-300"
                  initial={{ opacity: 0, y: 50, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: i * 0.15, type: "spring", bounce: 0.4 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: "linear-gradient(90deg, #f97316, #fbbf24)" }}
                  />
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full bg-orange-500"
                    style={{ boxShadow: "0 0 10px #f97316" }}
                    animate={{ boxShadow: ["0 0 10px #f97316", "0 0 20px #f97316", "0 0 10px #f97316"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
                  />
                  <p className="text-[10px] font-bold tracking-[3px] text-orange-500/40 mb-3">{edu.num}</p>
                  <div className="text-3xl mb-3">{edu.icon}</div>
                  <p className="text-sm font-bold text-foreground mb-1 leading-snug">{edu.school}</p>
                  <p className="text-xs text-orange-500/70 mb-1 leading-relaxed">{edu.degree}</p>
                  <p className="text-[10px] text-muted-foreground mb-4">{edu.year}</p>
                  <div className="inline-flex items-baseline gap-1 bg-orange-500/10 border border-orange-500/25 rounded-full px-3 py-1">
                    <span className="text-base font-extrabold text-orange-500">{edu.grade}</span>
                    <span className="text-[10px] text-orange-500/50">{edu.gradeLabel}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};