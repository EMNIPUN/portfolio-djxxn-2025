import React, { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowDown, 
  ExternalLink, 
  Code, 
  Moon, 
  Sun, 
  Briefcase,
  BookOpen,
  Award,
  Coffee,
  MessageSquare,
  ChevronRight,
  Download,
  Globe,
  Terminal,
  Music,
  Volume2,
  SkipBack,
  SkipForward,
  Pause,
  Play
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
// import { Scene3D } from './Scene3D'; // Import your enhanced 3D laptop component

function Hero() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollY } = useScroll();

  // Handle theme toggling
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  // Handle scroll progress
  useMotionValueEvent(scrollY, "change", (latest) => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const progress = Math.min(latest / (documentHeight - windowHeight), 1);
    setScrollProgress(progress);
  });

  // Technologies array
  const technologies = [
    { name: "React", icon: <Code size={18} /> },
    { name: "Node.js", icon: <Terminal size={18} /> },
    { name: "TypeScript", icon: <Code size={18} /> },
    { name: "AI Integration", icon: <Globe size={18} /> },
    { name: "Responsive Design", icon: <ExternalLink size={18} /> },
  ];

  // Quick stats
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects" },
    { value: "15+", label: "Clients" },
    { value: "99%", label: "Satisfaction" }
  ];

  // New state for music player
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({
    title: "Lofi Beats",
    artist: "Chill Vibes",
    duration: "3:45"
  });

  // Toggle play/pause function
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, you would start/stop actual audio here
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white to-indigo-50 dark:from-gray-950 dark:to-gray-700 transition-colors duration-300 px-20">


      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-indigo-600 dark:bg-indigo-400 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main content - left column */}
          <motion.div
            className="lg:col-span-7 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.div 
                className="inline-flex items-center gap-2 text-indigo-50 dark:text-indigo-400 font-medium px-4 py-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-full mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Coffee size={16} />
                <span>Available for freelance work</span>
              </motion.div>
              

              {/* Name and title */}
              <div className='flex items-center justify-between gap-2 mb-4'>
                <div>
                  <motion.h1 
                    className=" text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="block text-2xl">Hi, I'm</span>
                    <span className="bg-clip-text text-5xl text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-100 dark:to-purple-200 dark:font-medium">
                      Nipun Dhananjaya
                    </span>
                  </motion.h1>
                </div>
                <div className='mt-10'>
                    <motion.div 
                    className="flex gap-6 text-gray-600 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  >
                    <motion.a 
                      href="https://github.com/EMNIPUN" 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ y: -3, color: "#6366F1" }}
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 shadow-md transition-all"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/nipun-dhananjaya-9a6446280/" 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ y: -3, color: "#6366F1" }}
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 shadow-md transition-all"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a 
                      href="mailto:your.email@example.com" 
                      whileHover={{ y: -3, color: "#6366F1" }}
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 shadow-md transition-all"
                    >
                      <Mail size={20} />
                    </motion.a>
                    <motion.a 
                      href="https://yourwebsite.com" 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ y: -3, color: "#6366F1" }}
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 shadow-md transition-all"
                    >
                      <Globe size={20} />
                    </motion.a>
                  </motion.div>
                </div>
              </div>

              <motion.p
                className=" text-gray-900 dark:text-white mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="font-thin text-xl text-gray-800 dark:text-gray-200">Full-Stack Developer | AI-Powered Web App</span>
              </motion.p>
              
              <motion.div
                className="flex items-center gap-2 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {["web applications", "user interfaces", "AI solutions", "digital experiences"].map((text, index) => (
                      <motion.div
                        key={text}
                        className="absolute font-medium text-xl md:text-2xl text-indigo-600 dark:text-indigo-400"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {text}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-lg max-w-2xl mb-10 text-gray-600 dark:text-gray-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                I'm a <span className="font-medium text-gray-800 dark:text-gray-200">Full Stack Developer</span> specializing in 
                creating exceptional digital experiences that are fast, accessible, and user-friendly.
                With expertise in AI-powered web applications, I transform complex problems into elegant solutions.
              </motion.p>
              
              {/* Quick stats */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Action buttons */}
            <div className='flex gap-18'>
              <div>
                <motion.div 
                  className="flex flex-wrap gap-4 mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transform hover:scale-105 transition-transform text-white shadow-lg shadow-indigo-500/20">
                    <MessageSquare className="mr-2 h-4 w-4" /> Get in touch
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-300 dark:border-gray-700 transform hover:scale-105 transition-transform shadow-lg">
                    <Briefcase className="mr-2 h-4 w-4" /> View Projects
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Technology tags */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Tech I work with:</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    whileHover={{ y: -2, backgroundColor: "#EEF2FF", color: "#4F46E5" }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {tech.icon}
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>



            
          </motion.div>

          {/* Right column - profile pic and 3D model */}
          <motion.div
            className="lg:col-span-5 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="relative h-full">
              {/* Background effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Profile picture */}
              <motion.div 
                className="absolute -top-6 -right-6 z-20 rounded-full border-4 border-white dark:border-gray-800 shadow-xl overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <img 
                  src="https://img.freepik.com/premium-photo/men-design-logo-avatar_665280-69427.jpg?ga=GA1.1.354948533.1732556959&semt=ais_hybrid&w=740" 
                  alt="Nipun Dhananjaya" 
                  className="w-28 h-28 object-cover"
                />
              </motion.div>
              
              {/* 3D model container */}
              <motion.div
                className="relative w-full h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br from-indigo-100/80 to-white/50 dark:from-gray-800/80 dark:to-gray-900/50 shadow-xl overflow-hidden backdrop-blur-sm border border-white/20 z-10"
                whileHover={{ scale: 1.02 }}
                initial={{ rotateY: 15 }}
                animate={{ rotateY: [15, 0, 15] }}
                transition={{ duration: 20, repeat: Infinity }}
              >
                <div className="absolute inset-0">
                  <img 
                    src="https://img.freepik.com/free-photo/sunset-beach-tablet_23-2151947346.jpg?ga=GA1.1.354948533.1732556959&semt=ais_hybrid&w=740" 
                    alt="Nipun Dhananjaya" 
                    className="w-[550px] h-[700px] "
                  />
                </div>
                
                {/* Feature callouts */}
                <div className="absolute bottom-6 right-6 left-6 z-20">
                  <motion.div 
                    className="flex flex-wrap gap-3 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs text-gray-800 dark:text-gray-200 shadow-lg flex items-center gap-1">
                      <Award size={12} /> Award Winning
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs text-gray-800 dark:text-gray-200 shadow-lg flex items-center gap-1">
                      <BookOpen size={12} /> Open Source
                    </span>
                    <span className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs text-gray-800 dark:text-gray-200 shadow-lg flex items-center gap-1">
                      <Terminal size={12} /> AI Expert
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 opacity-70">Scroll to explore</span>
          <ArrowDown size={20} />
        </div>
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10" />
        
        {/* Animated circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              scale: [1, Math.random() * 0.3 + 0.8, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Music player UI - new addition */}
      <motion.div
        className="absolute top-[350px] left-[1050px] z-30 "
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div 
          className="bg-white/90 dark:bg-transparent backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          whileHover={{ scale: 1.05 }}
          animate={isPlaying ? { 
            boxShadow: ["0px 0px 0px rgba(99, 102, 241, 0.5)", "0px 0px 15px rgba(99, 102, 241, 0.7)", "0px 0px 0px rgba(99, 102, 241, 0.5)"]
          } : {}}
          transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
        >
          <div className="flex flex-col gap-3 w-[180px]">
            <div className="flex items-center gap-2">
              <Music size={16} className="text-indigo-500" />
              <span className="text-xs font-medium text-gray-800 dark:text-gray-200">Now Playing</span>
            </div>
            
            <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
              {currentTrack.title}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {currentTrack.artist}
            </div>
            
            {/* Animated waveform */}
            <div className="flex items-center justify-center gap-1 h-4 my-1">
              {isPlaying && [...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-indigo-500 dark:bg-indigo-400 w-1 rounded-full"
                  animate={{ 
                    height: [4, 12, 8, 16, 4][i % 5],
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    delay: i * 0.1 
                  }}
                />
              ))}
              {!isPlaying && [...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-300 dark:bg-gray-600 w-1 h-2 rounded-full"
                />
              ))}
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-1 rounded-full overflow-hidden">
              <motion.div 
                className="bg-indigo-500 dark:bg-indigo-400 h-full"
                initial={{ width: "30%" }}
                animate={isPlaying ? { width: ["30%", "100%"] } : { width: "30%" }}
                transition={isPlaying ? { 
                  duration: 30, 
                  ease: "linear",
                } : {}}
              />
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-between mt-1">
              <button className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                <SkipBack size={16} />
              </button>
              <button 
                className="w-8 h-8 bg-indigo-500 dark:bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                <SkipForward size={16} />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                <Volume2 size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;