import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CertificationsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="certifications" className="relative py-32 px-4 bg-background overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs font-bold tracking-[4px] text-orange-500 mb-4">ACHIEVEMENTS</p>

        <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
          Certifications &{" "}
          <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-400 bg-clip-text text-transparent">
            Credentials
          </span>
        </h2>

        <p className="text-muted-foreground mb-4 text-lg">
          10 certifications across AI, Cloud, Programming and Industry.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Oracle", "IBM", "NPTEL", "Deloitte", "Simplilearn"].map((issuer, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-500 border border-orange-500/20"
            >
              {issuer}
            </motion.span>
          ))}
        </div>

        <motion.button
          onClick={() => navigate("/certifications")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/30 text-lg"
        >
          <Award className="w-5 h-5" />
          Explore Certifications
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};