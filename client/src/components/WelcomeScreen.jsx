import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const WelcomeScreen = ({ onWelcomeComplete }) => {
  const [phase, setPhase] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [typedText, setTypedText] = useState("");

  const portfolioUrl = "mahidharreddy.dev";
  const welcomeMessages = [
    "Software Engineer",
    "Building real-world apps",
    "Java · Spring Boot · React"
  ];

  useEffect(() => {
    const phase1 = setTimeout(() => setPhase(1), 800);
    const phase2 = setTimeout(() => setPhase(2), 1600);
    const phase3 = setTimeout(() => setPhase(3), 2400);
    const complete = setTimeout(() => {
      setExitAnimation(true);
      setTimeout(onWelcomeComplete, 1000);
    }, 5000);

    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
      clearTimeout(complete);
    };
  }, [onWelcomeComplete]);

  useEffect(() => {
    if (phase >= 2) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= portfolioUrl.length) {
          setTypedText(portfolioUrl.substring(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 60);
      return () => clearInterval(typingInterval);
    }
  }, [phase]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const contentVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: { duration: 1, repeat: Infinity, repeatDelay: 0 }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="h-full w-full flex items-center justify-center p-4 bg-[#0a0a0a]"
        variants={containerVariants}
        initial="hidden"
        animate={exitAnimation ? "exit" : "visible"}
      >
        {/* Background glows */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full blur-[80px] md:blur-[120px] opacity-20"
            style={{ background: "linear-gradient(to right, #f97316, #fb923c)" }}
            animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-36 h-36 md:w-72 md:h-72 rounded-full blur-[80px] md:blur-[120px] opacity-15"
            style={{ background: "linear-gradient(to right, #fbbf24, #f97316)" }}
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(249,115,22,1)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="w-full max-w-2xl mx-auto text-center px-4">
          <motion.div className="space-y-4 md:space-y-8">

            {/* Phase 0 — Tag */}
            {phase >= 0 && (
              <motion.div variants={contentVariants}>
                <motion.div
                  className="text-xs md:text-sm font-mono inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                  {welcomeMessages[phase % welcomeMessages.length]}
                </motion.div>
              </motion.div>
            )}

            {/* Phase 1 — Hello There */}
            {phase >= 1 && (
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight text-white"
                variants={contentVariants}
              >
                <span className="inline-block">Hello</span>
                <motion.span
                  className="inline-block ml-2 sm:ml-3 relative"
                  style={{ color: "#f97316" }}
                  variants={contentVariants}
                >
                  There !
                  <motion.span
                    className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 w-full bg-orange-500"
                    variants={underlineVariants}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.span>
              </motion.h1>
            )}

            {/* Phase 2 — URL typing */}
            {phase >= 2 && (
              <motion.div variants={contentVariants}>
                <motion.div
                  className="text-base sm:text-lg md:text-xl font-mono flex justify-center items-center text-orange-400"
                >
                  <span className="text-orange-500/50 mr-1">~/</span>
                  {typedText}
                  {phase >= 2 && (
                    <motion.span
                      className="ml-0.5 h-4 sm:h-5 w-0.5 sm:w-1 inline-block bg-orange-400"
                      variants={cursorVariants}
                      animate="blinking"
                    />
                  )}
                </motion.div>
                <motion.p
                  className="mt-3 text-xs sm:text-sm text-white/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  G Mahidhar Reddy — Software Engineer
                </motion.p>
              </motion.div>
            )}

            {/* Phase 3 — Loading bar */}
            {phase >= 3 && (
              <motion.div className="pt-4 sm:pt-6" variants={contentVariants}>
                <div className="w-48 sm:w-64 h-1 bg-orange-500/10 rounded-full mx-auto overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                  />
                </div>
                <motion.p
                  className="mt-3 text-xs text-white/30 font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Loading portfolio...
                </motion.p>
              </motion.div>
            )}

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;