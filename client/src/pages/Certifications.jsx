import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Award, ChevronDown, ChevronUp } from "lucide-react";

const certifications = [
  { id: 1, title: "Programming in Java", issuer: "NPTEL", category: "Programming", date: "2024", image: "/certifications/Programming in Java.jpg", color: "#f97316" },
  { id: 2, title: "Cloud Computing", issuer: "NPTEL", category: "Cloud", date: "2024", image: "/certifications/Cloud Computing.jpg", color: "#fb923c" },
  { id: 3, title: "OCI AI Foundations Associate", issuer: "Oracle University", category: "AI / Cloud", date: "Oct 2025", image: "/certifications/oracle3.jpg", color: "#ef4444" },
  { id: 4, title: "OCI Generative AI Professional", issuer: "Oracle University", category: "AI / Cloud", date: "Oct 2025", image: "/certifications/oracle2.jpg", color: "#dc2626" },
  { id: 5, title: "OCI Data Science Professional", issuer: "Oracle University", category: "AI / Cloud", date: "Oct 2025", image: "/certifications/oracle1.jpg", color: "#f97316" },
  { id: 6, title: "Exploring Artificial Intelligence", issuer: "IBM SkillsBuild", category: "AI", date: "Feb 2026", image: "/certifications/Completion Certificate _ SkillsBuild.jpg", color: "#3b82f6" },
  { id: 7, title: "Interacting with AI", issuer: "IBM SkillsBuild", category: "AI", date: "Feb 2026", image: "/certifications/Completion Certificate _ SkillsBuild1.jpg", color: "#06b6d4" },
  { id: 8, title: "Technology Job Simulation", issuer: "Deloitte", category: "Industry", date: "Jul 2025", image: "/certifications/deloitte-job-simulation.jpg", color: "#22c55e" },
  { id: 9, title: "Competitive Programming & Algorithmic Techniques", issuer: "Six Phrase — SVCE", category: "Internship", date: "May–Jul 2025", image: "/certifications/internship-sixprase.jpg", color: "#f59e0b" },
  { id: 10, title: "Generative AI for Beginners", issuer: "Simplilearn SkillUp", category: "AI", date: "Jul 2025", image: "/certifications/simplilearn-genai.jpg", color: "#f97316" },
];

export const Certifications = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const accumulatedDelta = useRef(0);
  const touchStartY = useRef(0);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const goNext = () => {
    if (isAnimating || current >= certifications.length - 1) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrent(prev => prev + 1);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goPrev = () => {
    if (isAnimating || current <= 0) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrent(prev => prev - 1);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const jumpTo = (i) => {
    if (isAnimating || i === current) return;
    setDirection(i > current ? 1 : -1);
    setIsAnimating(true);
    setCurrent(i);
    setTimeout(() => setIsAnimating(false), 700);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      accumulatedDelta.current += e.deltaY;
      if (accumulatedDelta.current > 80) {
        goNext();
        accumulatedDelta.current = 0;
      } else if (accumulatedDelta.current < -80) {
        goPrev();
        accumulatedDelta.current = 0;
      }
    };

    const handleKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goNext();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goPrev();
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (diff > 50) goNext();
      else if (diff < -50) goPrev();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [current, isAnimating]);

  const cert = certifications[current];

  return (
    <div className="fixed inset-0 bg-background text-foreground overflow-hidden">

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-40 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between bg-background/60 backdrop-blur-md border-b border-orange-500/10">
        <motion.button
          onClick={() => navigate(-1)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-orange-500 font-semibold text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Back</span>
        </motion.button>

        <div className="text-center">
          <p className="text-[10px] sm:text-xs font-bold tracking-[2px] sm:tracking-[3px] text-orange-500">
            CERTIFICATIONS
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            {current + 1} of {certifications.length}
          </p>
        </div>

        <div className="text-[10px] sm:text-xs font-bold text-orange-500 bg-orange-500/10 px-2 sm:px-3 py-1 rounded-full border border-orange-500/20 max-w-[100px] sm:max-w-none truncate">
          {cert.category}
        </div>
      </div>

      {/* Progress dots — hidden on mobile, shown on sm+ */}
      <div className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
        {certifications.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => jumpTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "8px" : "6px",
              height: i === current ? "8px" : "6px",
              background: i === current ? "#f97316" : "rgba(249,115,22,0.3)",
            }}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </div>

      {/* Progress dots — mobile horizontal at top below header */}
      <div className="flex sm:hidden absolute top-14 left-0 right-0 z-30 justify-center gap-1.5 py-2">
        {certifications.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => jumpTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "16px" : "6px",
              height: "6px",
              background: i === current ? "#f97316" : "rgba(249,115,22,0.3)",
            }}
          />
        ))}
      </div>

      {/* Main cert display */}
      <div className="absolute inset-0 flex items-center justify-center pt-20 sm:pt-16 pb-20 sm:pb-16 px-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter: (dir) => ({ y: dir > 0 ? "100%" : "-100%", opacity: 0, scale: 0.95 }),
              center: { y: 0, opacity: 1, scale: 1 },
              exit: (dir) => ({ y: dir > 0 ? "-30%" : "30%", opacity: 0, scale: 0.95 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col items-center gap-3 sm:gap-6 w-full max-w-xl sm:max-w-2xl"
          >
            {/* Cert info */}
            <div className="text-center px-4">
              <p className="text-[10px] sm:text-xs font-bold tracking-[2px] sm:tracking-[3px] text-orange-500 mb-1">
                {cert.issuer}
              </p>
              <h2 className="text-base sm:text-xl md:text-2xl font-extrabold text-foreground leading-tight">
                {cert.title}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{cert.date}</p>
            </div>

            {/* Certificate image */}
            <motion.div
              className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 shadow-2xl w-full"
              style={{
                borderColor: cert.color,
                boxShadow: `0 10px 40px ${cert.color}30`,
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-1 w-full" style={{ background: cert.color }} />
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full object-contain"
                style={{ maxHeight: "45vh" }}
              />
            </motion.div>

            {/* Category badge */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span
                className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold border"
                style={{
                  background: `${cert.color}15`,
                  borderColor: `${cert.color}40`,
                  color: cert.color,
                }}
              >
                {cert.category}
              </span>
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows bottom */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 sm:gap-6">
        <motion.button
          onClick={goPrev}
          disabled={current === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 sm:p-3 rounded-full border border-orange-500/30 bg-card text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-500/10 transition-all"
        >
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>

        <span className="text-[10px] sm:text-xs text-muted-foreground font-mono hidden sm:inline">
          scroll or use arrows
        </span>
        <span className="text-[10px] text-muted-foreground font-mono sm:hidden">
          swipe or tap
        </span>

        <motion.button
          onClick={goNext}
          disabled={current === certifications.length - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 sm:p-3 rounded-full border border-orange-500/30 bg-card text-orange-500 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-500/10 transition-all"
        >
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>
    </div>
  );
};