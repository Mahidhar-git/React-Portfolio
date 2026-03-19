import { Linkedin, Mail, MapPin, Phone, Send, Github, Instagram, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({ title: "Valid email is required", variant: "destructive" });
      return false;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      toast({ title: "Message must be at least 10 characters", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mbdzqgjw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent! 🎉",
          description: "I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch {
      toast({
        title: "Something went wrong!",
        description: "Please email me directly at mahidharreddy750@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Email",
      text: "mahidharreddy750@gmail.com",
      href: "mailto:mahidharreddy750@gmail.com",
    },
    {
      icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Phone",
      text: "+91 9573058849",
      href: "tel:+919573058849",
    },
    {
      icon: <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Location",
      text: "Tirupati, Andhra Pradesh",
      href: null,
    },
  ];

  const socials = [
    {
      icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/g-mahidhar-reddy/",
    },
    {
      icon: <Github className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "GitHub",
      url: "https://github.com/Mahidhar-git",
    },
    {
      icon: <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Instagram",
      url: "https://www.instagram.com/mahidharreddy750/",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 relative bg-background">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[4px] text-orange-500 mb-3">GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-foreground">
            Contact{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have an opportunity or just want to say hi? My inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

          {/* LEFT — CONTACT INFO */}
          <motion.div
            className="space-y-6 p-6 sm:p-8 rounded-2xl bg-card border border-orange-500/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              Contact Details
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-3 sm:p-4 hover:bg-orange-500/5 rounded-xl transition-all duration-300 group"
                  whileHover={{ x: 4 }}
                >
                  {/* Icon */}
                  <div className="p-2 sm:p-3 rounded-xl bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20 transition-colors">
                    {info.icon}
                  </div>

                  {/* Text */}
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">{info.label}</p>

                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-sm font-medium hover:text-orange-500 transition-colors break-words"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-sm font-medium break-words">
                        {info.text}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <div className="pt-4 border-t border-orange-500/10">
              <p className="text-xs font-bold tracking-[2px] text-muted-foreground mb-4">
                FIND ME ON
              </p>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <motion.button
                    key={i}
                    onClick={() => window.open(social.url, "_blank")}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-orange-500/10 text-orange-500 hover:bg-orange-500 hover:text-white border border-orange-500/20 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="pt-4 border-t border-orange-500/10">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <div>
                  <p className="text-sm font-bold text-green-500">
                    Available for opportunities
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Response time: Under 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            className="p-6 sm:p-8 rounded-2xl bg-card border border-orange-500/20 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-orange-500/20 bg-background focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500/50 transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-orange-500/20 bg-background focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500/50 transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-orange-500/20 bg-background focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500/50 transition-all resize-none text-sm"
                  placeholder="Hey, I'd love to connect about..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20 text-sm",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};