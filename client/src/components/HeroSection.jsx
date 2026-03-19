import { ArrowDown, MousePointerClick, Code, Award, Download, Shield, Zap, TrendingUp, Briefcase, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  const codeSnippets = [
    "import { SoftwareEngineer } from 'mahidharreddy.dev';",
    "",
    "const developer = new SoftwareEngineer({",
    "  name: 'G Mahidhar Reddy',",
    "  stack: ['React', 'Spring Boot', 'Java', 'MySQL'],",
    "  focus: 'Building real-world web applications',",
    "  status: 'Open to new opportunities'",
    "});",
    "",
    "await developer.launchPortfolio();",
    "// Projects: ShopEase, Shortly, Resolve-Now",
    "",
    "developer.connect();",
    "console.log('Let s build something great together!');"
  ];

  const achievements = [
    { number: "7+", label: "Projects Built", icon: <Shield className="h-3 w-3" /> },
    { number: "9.09", label: "CGPA", icon: <TrendingUp className="h-3 w-3" /> },
    { number: "2026", label: "Graduating", icon: <Zap className="h-3 w-3" /> }
  ];

  useEffect(() => {
    const currentLine = codeSnippets[currentCodeLine];
    if (displayedCode.length < currentLine.length) {
      setTimeout(() => {
        setDisplayedCode(currentLine.slice(0, displayedCode.length + 1));
      }, 30);
    } else {
      setTimeout(() => {
        if (currentCodeLine < codeSnippets.length - 1) {
          setCurrentCodeLine(prev => prev + 1);
          setDisplayedCode("");
        } else {
          setTimeout(() => {
            setCurrentCodeLine(0);
            setDisplayedCode("");
          }, 5000);
        }
      }, 800);
    }
  }, [displayedCode, currentCodeLine]);

  const handleViewResume = () => {
    window.open('/Mahidhar_Reddy_Resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/10" ref={ref}>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-lg"
            style={{
              width: Math.random() * 60 + 20 + 'px',
              height: Math.random() * 60 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              rotate: Math.random() * 360
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
        <motion.div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-orange-600/10 blur-[100px]" animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-orange-400/10 to-yellow-500/10 blur-[100px]" animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, delay: 2 }} />
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-16 sm:mt-0">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.5 } } }}
        >

          {/* Left — Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 w-full">
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
            >
              <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" /> Currently Accepting new Opportunities
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
            >
              <span className="block text-foreground">I'm Mahidhar Reddy</span>
              <motion.span
                className="block bg-gradient-to-r from-pink-400 via-orange-400 to-amber-400 bg-clip-text text-transparent mt-2"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: '200% 100%' }}
              >
                Software Engineer
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground mt-4 sm:mt-6 leading-relaxed max-w-2xl"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
            >
              I build <span className="text-primary font-semibold">real-world web applications</span> using React, Spring Boot and Java. Passionate about clean code, problem solving and continuously learning.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 my-6 sm:my-8"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-3 sm:p-4 rounded-xl bg-background/60 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    {achievement.icon}
                    <div className="text-lg sm:text-2xl font-bold text-foreground">{achievement.number}</div>
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
            >
              <motion.a
                href="#projects"
                className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg text-sm flex items-center justify-center gap-2 sm:gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>View Projects</span>
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-2 sm:gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </motion.a>

              <motion.button
                onClick={handleViewResume}
                className="px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold border border-border text-muted-foreground hover:border-primary/30 transition-all duration-300 bg-background/60 backdrop-blur-sm text-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-4 sm:mt-6 text-center lg:text-left"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
            >
              <div className="text-xs sm:text-sm text-muted-foreground">
                🎓 <span className="text-primary font-semibold">B.Tech CSE</span> — Sri Venkateswara College of Engineering, 2026
              </div>
            </motion.div>
          </div>

          {/* Right — Code Card — HIDDEN on mobile */}
          <motion.div
            className="hidden lg:flex flex-1 justify-center lg:justify-end w-full"
            variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
          >
            <div className="relative w-full max-w-md">
              <motion.div
                className="bg-background/90 border border-border rounded-2xl p-6 xl:p-8 backdrop-blur-sm shadow-2xl w-full"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-sm font-mono font-semibold text-muted-foreground">portfolio.js</div>
                  </div>
                  <div className="w-4 h-4 bg-green-400/20 rounded-full animate-pulse"></div>
                </div>

                <div className="font-mono text-sm bg-primary/5 rounded-lg border border-primary/10 min-h-[280px] flex">
                  <div className="p-4 xl:p-6 w-full">
                    <div className="grid grid-cols-1 gap-1 h-full content-start">
                      {codeSnippets.map((line, index) => (
                        <div
                          key={index}
                          className={`
                            min-h-[20px] flex items-start text-xs xl:text-sm
                            ${index < currentCodeLine ? 'opacity-100' : 'opacity-0'}
                            ${index === currentCodeLine ? 'opacity-100' : ''}
                            transition-opacity duration-150 ease-in-out
                            ${line.includes("import") ? "text-orange-400 font-semibold" :
                              line.includes("const") || line.includes("new") ? "text-orange-300 font-semibold" :
                                line.includes("React") || line.includes("Spring Boot") ? "text-yellow-400" :
                                  line.includes("SoftwareEngineer") ? "text-orange-500 font-semibold" :
                                    line.includes("//") ? "text-muted-foreground italic" :
                                      line.includes("await") || line.includes("connect") ? "text-yellow-400" :
                                        line.includes("'") ? "text-amber-400" :
                                          "text-foreground"}
                          `}
                        >
                          {index < currentCodeLine ? line : ''}
                          {index === currentCodeLine ? (
                            <>
                              {displayedCode}
                              <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="ml-1 text-primary inline-block"
                              >
                                ▊
                              </motion.span>
                            </>
                          ) : ''}
                          {line === '' && '‎'}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-3 -right-3 w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center border-2 border-background shadow-2xl"
                  animate={{ y: [0, -5, 0], rotate: [0, -2, 0], scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Code className="h-4 w-4 xl:h-5 xl:w-5 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -top-3 -left-3 bg-background/90 backdrop-blur-sm px-3 py-1.5 xl:px-4 xl:py-2 rounded-xl border border-border shadow-lg flex items-center gap-2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.5, type: "spring" }}
                >
                  <Award className="h-3 w-3 xl:h-4 xl:w-4 text-orange-500" />
                  <span className="text-xs xl:text-sm font-semibold text-foreground">Solutions</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-border shadow-lg text-center"
                  initial={{ scale: 0, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ delay: 2, type: "spring" }}
                >
                  <div className="text-[10px] font-mono text-muted-foreground">Built with</div>
                  <div className="text-xs font-bold text-foreground">Modern Tech</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [0, 6, 0, -6] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}
      >
        <motion.div
          className="text-xs text-primary mb-3 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <MousePointerClick className="h-3 w-3" />
          <span>Explore My Portfolio</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};