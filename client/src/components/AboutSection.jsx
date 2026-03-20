import React, { useState, useEffect } from 'react';
import { Code, User, Download, Sparkles, Github, Linkedin, Mail, Star, MapPin, GraduationCap, Briefcase, Target, Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  const achievements = [
    { number: "9.09", label: "CGPA", icon: <GraduationCap className="h-5 w-5 text-orange-500" />, suffix: "" },
    { number: "8", label: "Projects Built", icon: <Briefcase className="h-5 w-5 text-orange-500" />, suffix: "+" },
    { number: "Tirupati", label: "Location", icon: <MapPin className="h-5 w-5 text-orange-500" />, suffix: "" },
    { number: "Open", label: "To Work", icon: <Target className="h-5 w-5 text-orange-500" />, suffix: "" },
  ];

  const techStack = [
    { category: "Languages", items: ["Java", "JavaScript", "C", "HTML5", "CSS3"] },
    { category: "Frontend & Backend", items: ["React", "Tailwind CSS", "Spring Boot", "REST APIs"] },
    { category: "Database & Tools", items: ["MySQL", "PostgreSQL", "Git", "GitHub", "Docker", "Postman", "DSA"] },
  ];

  const features = [
    "Strong DSA foundation",
    "Quick learner",
    "Clean code practices",
    "Real project experience",
    "Team player",
    "Problem solver",
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Mahidhar-git", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/g-mahidhar-reddy/", label: "LinkedIn" },
  ];

  const tabContent = {
    personal: "Passionate about building real-world applications that solve problems. When I am not coding, I am exploring new technologies, sharpening my DSA skills, and working on personal projects to grow as a developer.",
    approach: "I believe in writing clean, maintainable code and building things that actually work. I focus on understanding the problem first, then solving it step by step with best practices and continuous learning.",
  };

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Mahidhar_Reddy_Resume.pdf';
    link.download = 'Mahidhar_Reddy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mahidharreddy750@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="about" className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out" style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
        <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-orange-500/5 rounded-full blur-3xl transition-all duration-1500 ease-out" style={{ transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)` }} />
        <div className="absolute top-16 right-8 sm:top-20 sm:right-20 animate-float">
          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-orange-500/20 rounded-lg rotate-45" />
        </div>
        <div className="absolute bottom-32 left-8 sm:bottom-40 sm:left-20 animate-float animation-delay-2000">
          <div className="w-5 sm:w-6 h-5 sm:h-6 bg-orange-500/20 rounded-full" />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-16 md:mb-20 px-2 sm:px-6">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-6 hover:bg-orange-500/15 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="relative">
              <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-orange-500 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-ping" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-orange-500 tracking-wide">ABOUT ME</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-foreground to-orange-500 bg-clip-text text-transparent">Transforming</span>
            <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-amber-400 bg-clip-text text-transparent">Ideas Into Reality</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building digital experiences that combine
            <span className="text-orange-500 font-semibold"> clean code</span>,
            <span className="text-orange-500 font-semibold"> real projects</span>, and
            <span className="text-orange-500 font-semibold"> continuous learning</span>
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
          <div className="xl:col-span-2 space-y-8">
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:border-orange-500/40 hover:bg-card/60 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-orange-500 rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-orange-400 rounded-full -translate-x-16 translate-y-16" />
              </div>
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="relative flex-shrink-0">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-xl group-hover:scale-105 md:group-hover:scale-110 transition-all duration-500">
                      <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600">
                        <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
                          <img
                            src="/mahidharr.jpg"
                            alt="G Mahidhar Reddy"
                            className="w-full h-full object-cover object-[center_20%]"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-green-500 rounded-full border-2 border-background flex items-center justify-center shadow-md">
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">G Mahidhar Reddy</h2>
                    <p className="text-orange-500 text-base sm:text-lg font-semibold mb-3 sm:mb-4">Software Engineer</p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          className={counter === index ? "p-2 sm:p-3 rounded-xl bg-orange-500/10 border border-orange-500/50 transition-all duration-300" : "p-2 sm:p-3 rounded-xl bg-background/50 border border-border transition-all duration-300 hover:border-orange-500/30"}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="flex items-center gap-2 justify-center md:justify-start">
                            {achievement.icon}
                            <div>
                              <div className="font-bold text-sm sm:text-lg">{achievement.number}{achievement.suffix}</div>
                              <div className="text-[10px] sm:text-xs text-muted-foreground">{achievement.label}</div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex border-b border-border mb-4 sm:mb-6">
                  {['personal', 'approach'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={activeTab === tab ? "flex-1 py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-medium text-orange-500 border-b-2 border-orange-500 transition-all duration-300" : "flex-1 py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300"}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="min-h-[100px] sm:min-h-[120px]">
                  <AnimatePresence mode="sync">
                    <motion.p
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
                    >
                      {tabContent[activeTab]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:border-orange-500/40 hover:bg-card/60 transition-all duration-500">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Code className="h-4 sm:h-6 w-4 sm:w-6 text-orange-500" />Tech Stack
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {techStack.map((stack, index) => (
                  <div key={index} className="bg-background/50 border border-border rounded-2xl p-4 sm:p-6 hover:border-orange-500/30 hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="p-1 sm:p-2 bg-orange-500/10 rounded-lg text-orange-500 group-hover:scale-110 transition-transform duration-300">
                        <Code className="h-3 sm:h-4 w-3 sm:w-4" />
                      </div>
                      <h4 className="font-semibold text-sm sm:text-base">{stack.category}</h4>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {stack.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />{item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:border-orange-500/40 hover:bg-card/60 transition-all duration-500">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Let us Work Together</h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                  className="w-full p-3 sm:p-4 bg-orange-500 text-white rounded-xl text-center font-semibold hover:bg-orange-600 hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <User className="h-4 w-4" /> Contact Me
                </button>
                <button
                  onClick={handleDownload}
                  className="w-full p-3 sm:p-4 border border-border rounded-xl text-center font-semibold hover:bg-orange-500/10 hover:border-orange-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </button>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-background/50 rounded-xl border border-border">
                <h4 className="font-semibold mb-3 text-center text-sm sm:text-base">Quick Connect</h4>
                <div className="flex justify-center gap-3">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(social.href, '_blank')}
                      aria-label={social.label}
                      className="p-2 bg-background rounded-lg text-muted-foreground hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300 hover:scale-110"
                    >
                      {social.icon}
                    </button>
                  ))}

                  {/* Email — copy to clipboard */}
                  <motion.button
                    onClick={handleCopyEmail}
                    aria-label="Copy Email"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={emailCopied ? "Copied!" : "Copy email"}
                    className="p-2 bg-background rounded-lg text-muted-foreground hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                  >
                    {emailCopied
                      ? <Check className="h-5 w-5 text-orange-500" />
                      : <Mail className="h-5 w-5" />
                    }
                  </motion.button>
                </div>

                <AnimatePresence>
                  {emailCopied && (
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-orange-500 font-semibold text-center mt-2"
                    >
                      ✅ Email copied to clipboard!
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="bg-card/50 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:border-orange-500/40 hover:bg-card/60 transition-all duration-500">
              <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <Star className="h-4 sm:h-5 w-4 sm:w-5 text-orange-500" />Why Choose Me
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg hover:bg-background/50 transition-all duration-300"
                    whileHover={{ scale: 1.03, x: 4 }}
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-card/60 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:border-orange-500/40 transition-all duration-500">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm">Available</span>
                </div>
                <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-lg">Open to opportunities</span>
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground text-center bg-background/50 rounded-lg p-2">
                Response time: Under 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};