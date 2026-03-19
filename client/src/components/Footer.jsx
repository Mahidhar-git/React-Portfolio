import { ArrowUp, Linkedin, Github, Instagram, Mail, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const socialLinks = [
    { icon: "linkedin", href: "https://www.linkedin.com/in/g-mahidhar-reddy/", label: "LinkedIn" },
    { icon: "github", href: "https://github.com/Mahidhar-git", label: "GitHub" },
    { icon: "instagram", href: "https://www.instagram.com/mahidharreddy750/", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const getIcon = (name) => {
    if (name === "linkedin") return <Linkedin size={18} />;
    if (name === "github") return <Github size={18} />;
    if (name === "instagram") return <Instagram size={18} />;
    return null;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mahidharreddy750@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="px-4 sm:px-6 py-12 mt-10 border-t border-orange-500/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="rounded-2xl p-6 sm:p-8 border border-orange-500/20 bg-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* Branding */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-extrabold text-foreground">
                  G Mahidhar <span className="text-orange-500">Reddy</span>
                </h3>
                <p className="text-xs font-bold tracking-[2px] text-orange-500 mt-1">SOFTWARE ENGINEER</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fresher software engineer passionate about building real-world applications with Java, Spring Boot and React.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    onClick={() => window.open(social.href, "_blank")}
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-xl bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white border border-orange-500/20 transition-all duration-300"
                  >
                    {getIcon(social.icon)}
                  </motion.button>
                ))}
                {/* Mail — copy to clipboard */}
                <motion.button
                  onClick={handleCopyEmail}
                  aria-label="Copy Email"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-xl bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white border border-orange-500/20 transition-all duration-300"
                  title="Copy email address"
                >
                  {copied ? <Check size={18} /> : <Mail size={18} />}
                </motion.button>
              </div>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-orange-500 font-semibold"
                >
                  ✅ Email copied to clipboard!
                </motion.p>
              )}
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-bold tracking-[2px] text-muted-foreground mb-4">NAVIGATION</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 4 }}>
                    <button
                      onClick={() => {
                        const el = document.querySelector(link.href);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm text-muted-foreground hover:text-orange-500 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-orange-500/50" />
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold tracking-[2px] text-muted-foreground mb-4">CONTACT</h4>
              <ul className="space-y-3">
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <button
                    onClick={handleCopyEmail}
                    className="hover:text-orange-500 transition-colors break-all text-left flex items-center gap-1 group"
                    title="Click to copy"
                  >
                    mahidharreddy750@gmail.com
                    <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </button>
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-orange-500 font-bold text-xs">📍</span>
                  Tirupati, Andhra Pradesh
                </li>
                <li className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-orange-500 font-bold text-xs">🎓</span>
                  SVCE — B.Tech CSE 2026
                </li>
              </ul>
              <div className="mt-4 p-3 rounded-xl bg-green-500/5 border border-green-500/20 flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                </div>
                <p className="text-xs text-green-500 font-semibold">Open to opportunities</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-6 border-t border-orange-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} G Mahidhar Reddy. Built with React and Spring Boot.
            </p>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};