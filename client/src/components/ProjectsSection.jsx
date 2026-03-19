import { ArrowRight, Github, ChevronUp, Star, Code, Sparkles, Zap, Play, Eye, X } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
  id: 1,
  title: "ShopEase",
  category: "Full Stack",
  description: "A real-world e-commerce app with role-based access, JWT security, cart system, order tracking and admin dashboard — fully deployed.",
  image: "/projects/shopease.png",
  demoUrl: "https://shopease-mahidhar.netlify.app/",
  videoUrl: "https://www.youtube.com/watch?v=6c-2j5mEzGg",
  githubUrl: "https://github.com/Mahidhar-git/shopease-fullstack",
  featured: true,
  accentColor: "from-orange-500 to-amber-500",
  status: "Live",
  tags: ["React", "Spring Boot", "PostgreSQL", "Docker", "JWT"],
  highlights: ["Role-based access control", "JWT security", "Admin dashboard"],
},
  
 {
  id: 2,
  title: "Shortly",
  category: "Full Stack",
  description: "A full-stack URL shortener with JWT auth, click tracking and analytics — built with Spring Boot, React, PostgreSQL, deployed on Render and Netlify.",
  image: "/projects/shortly.png",
  demoUrl: "https://chopurl-shortly.netlify.app/",
  videoUrl: "https://drive.google.com/file/d/1G4UgXQU_h0o2sak5VLvKONJLEqywLW4P/view?usp=sharing",
  githubUrl: "https://github.com/Mahidhar-git/Shortly-",
  featured: true,
  accentColor: "from-amber-400 to-orange-500",
  status: "Live",
  tags: ["React", "Spring Boot", "PostgreSQL", "JWT", "Netlify"],
  highlights: ["URL shortening", "Click analytics", "JWT authentication"],
},
  {
    id: 3,
    title: "Resolve Now",
    category: "Full Stack",
    description: "A full-stack MERN complaint management system with user submission, real-time status tracking and admin dashboard.",
    image: "/projects/resolve-now.png",
    demoUrl: "#",
    githubUrl: "https://github.com/Mahidhar-git/Resolve-Now",
    featured: false,
    accentColor: "from-orange-400 to-rose-500",
    status: "Local",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    highlights: ["Complaint submission", "Status tracking", "Admin dashboard"],
  },
  {
    id: 4,
    title: "Brain Tumor Detection",
    category: "AI / ML",
    description: "An AI-powered brain tumor detection system using Convolutional Neural Networks (CNN) to classify MRI scans with high accuracy.",
    image: "/projects/brain-tumor.png",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    accentColor: "from-amber-500 to-orange-600",
    status: "Coming Soon",
    tags: ["Python", "CNN", "TensorFlow", "Machine Learning"],
    highlights: ["MRI scan classification", "CNN architecture", "High accuracy model"],
  },
  {
    id: 5,
    title: "Weather App",
    category: "Frontend",
    description: "A responsive real-time weather dashboard fetching data from WeatherAPI. Displays temperature, condition, humidity, wind speed and location.",
    image: "/projects/weather.png",
    demoUrl: "https://mahidhar-git.github.io/Weather-Website/",
    githubUrl: "https://github.com/Mahidhar-git/Weather-Website",
    featured: false,
    accentColor: "from-orange-300 to-amber-400",
    status: "Live",
    tags: ["HTML", "CSS", "JavaScript", "WeatherAPI"],
    highlights: ["Real-time weather data", "Responsive design", "Location search"],
  },
  {
    id: 6,
    title: "Campus Placement Quiz",
    category: "Frontend",
    description: "A web-based timed MCQ quiz system with secure login, automated scoring and progress dashboards to simulate campus placement exams.",
    image: "/projects/exam-website.png",
    demoUrl: "https://mahidhar-git.github.io/Campus-Placement-Quiz-Website/",
    githubUrl: "https://github.com/Mahidhar-git/Campus-Placement-Quiz-Website",
    featured: false,
    accentColor: "from-amber-400 to-orange-500",
    status: "Live",
    tags: ["HTML", "CSS", "JavaScript"],
    highlights: ["Timed MCQ system", "Secure login", "Progress tracking"],
  },
  {
    id: 7,
    title: "Todo List",
    category: "Frontend",
    description: "Responsive To-Do List web app with task management, progress tracking, and local storage — built using HTML, CSS, and JavaScript.",
    image: "/projects/todolist.png",
    demoUrl: "https://mahidhar-git.github.io/To-Do-List-Website/",
    githubUrl: "https://github.com/Mahidhar-git/To-Do-List-Website",
    featured: false,
    accentColor: "from-orange-300 to-amber-500",
    status: "Live",
    tags: ["HTML", "CSS", "JavaScript"],
    highlights: ["Task management", "Local storage", "Progress tracking"],
  },
];

const categoryColors = {
  "Full Stack": "bg-orange-500/10 text-orange-500 border-orange-500/30",
  "AI / ML": "bg-amber-500/10 text-amber-600 border-amber-500/30",
  "Frontend": "bg-orange-400/10 text-orange-400 border-orange-400/30",
};

const ProjectHighlights = ({ highlights }) => (
  <div className="space-y-1.5">
    {highlights.map((highlight, index) => (
      <div key={index} className="flex items-center gap-2 text-sm">
        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
        <span className="text-muted-foreground">{highlight}</span>
      </div>
    ))}
  </div>
);

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const categories = ["All", "Full Stack", "AI / ML", "Frontend"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
  };

  const handleVideoPlay = (project) => setSelectedVideo(project);

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-orange-500/5"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6 border border-orange-500/20"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            My Projects
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-foreground">Project </span>
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real-world projects I've built using Java, Spring Boot, React and more.
          </motion.p>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleFilterChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 border ${
                  activeFilter === category
                    ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/30"
                    : "bg-background text-muted-foreground border-border hover:border-orange-500/50 hover:text-orange-500"
                }`}
                style={{ borderRadius: "999px" }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-card border border-orange-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/10 hover:shadow-xl hover:border-orange-500/50 transition-all duration-500 h-full flex flex-col">

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-500 border-green-500/30"
                          : project.status === "Local"
                          ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                          : "bg-amber-500/20 text-amber-500 border-amber-500/30"
                      }`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${categoryColors[project.category]}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Actions */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.demoUrl !== "#" && (
                        <motion.button
                         onClick={() => window.open(project.videoUrl || project.demoUrl, "_blank")}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 rounded-full bg-orange-500/80 text-white hover:bg-orange-500 transition-all duration-300"
                        >
                          <Play size={20} />
                        </motion.button>
                      )}
                      {project.githubUrl !== "#" && (
                        <motion.button
                          onClick={() => window.open(project.githubUrl, "_blank")}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 rounded-full bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300"
                        >
                          <Code size={20} />
                        </motion.button>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-orange-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-medium border border-orange-500/20 flex-shrink-0 ml-2">
                          <Star size={10} className="fill-orange-500" />
                          Featured
                        </div>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <ProjectHighlights highlights={project.highlights} />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-lg bg-orange-500/10 text-orange-500 text-xs font-medium border border-orange-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-orange-500/10">
                      <motion.button
                        onClick={() => project.demoUrl !== "#" && window.open(project.demoUrl, "_blank")}
                        whileHover={{ scale: project.demoUrl !== "#" ? 1.02 : 1 }}
                        whileTap={{ scale: project.demoUrl !== "#" ? 0.98 : 1 }}
                        className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                          project.demoUrl === "#"
                            ? "bg-muted text-muted-foreground cursor-not-allowed"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                        }`}
                      >
                        <Eye size={16} />
                        {project.demoUrl === "#" ? "Coming Soon" : "Live Demo"}
                      </motion.button>

                      <motion.button
                        onClick={() => project.githubUrl !== "#" && window.open(project.githubUrl, "_blank")}
                        whileHover={{ scale: project.githubUrl !== "#" ? 1.02 : 1 }}
                        whileTap={{ scale: project.githubUrl !== "#" ? 0.98 : 1 }}
                        className={`inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium border transition-all duration-300 ${
                          project.githubUrl === "#"
                            ? "bg-muted text-muted-foreground cursor-not-allowed border-border"
                            : "bg-background text-foreground border-orange-500/20 hover:border-orange-500 hover:text-orange-500"
                        }`}
                      >
                        <Github size={16} />
                        Code
                      </motion.button>
                    </div>
                  </div>

                  {/* Accent Border Bottom */}
                  <div className={`h-1 bg-gradient-to-r ${project.accentColor}`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {filteredProjects.length > 3 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
                showAll
                  ? "bg-card text-foreground border border-orange-500/20"
                  : "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30"
              }`}
            >
              {showAll ? (
                <><ChevronUp size={18} /> Show Less</>
              ) : (
                <>View More Projects <ArrowRight size={18} /></>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-orange-500/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6 border border-orange-500/20">
              <Zap className="h-4 w-4" />
              Get In Touch
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Like what you see?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                onClick={() => { const el = document.getElementById('contact'); if(el) el.scrollIntoView({behavior:'smooth'}); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300"
              >
                Contact Me <ArrowRight size={18} />
              </motion.button>
              <motion.button
                onClick={() => window.open("https://github.com/Mahidhar-git", "_blank")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium border border-orange-500/20 text-foreground hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                <Github size={18} /> View GitHub
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};