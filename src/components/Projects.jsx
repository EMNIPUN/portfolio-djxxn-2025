import React, { useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowDown, 
  ExternalLink, 
  Code, 
  Moon, 
  Sun,
  Star,
  Calendar,
  Filter,
  Layers,
  ChevronRight,
  ChevronLeft,
  Search,
  Tag
} from 'lucide-react';
import { Button } from "@/components/ui/button";

function Projects() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const projectsPerPage = 6;

  // Enhanced projects array with more details and proper image URLs
  const projects = [
    {
      title: "Project Alpha",
      description: "A full-stack web application built with React and Node.js that enables real-time collaboration between teams. Features include user authentication, dashboard analytics, and interactive data visualization.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      github: "https://github.com/yourusername/project-alpha",
      live: "https://project-alpha.com",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: true,
      date: "May 2025",
      stars: 42
    },
    {
      title: "Project Beta",
      description: "A responsive mobile-first design for e-commerce platforms with custom checkout flow and real-time inventory management.",
      tech: ["React Native", "Firebase", "Stripe", "Redux"],
      github: "https://github.com/yourusername/project-beta",
      live: "https://project-beta.com",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: true,
      date: "April 2025",
      stars: 37
    },
    {
      title: "Project Gamma",
      description: "An AI-powered data visualization dashboard that transforms complex datasets into intuitive, interactive visual representations.",
      tech: ["Python", "TensorFlow", "D3.js", "Flask"],
      github: "https://github.com/yourusername/project-gamma",
      live: "https://project-gamma.com",
      image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: true,
      date: "March 2025",
      stars: 56
    },
    {
      title: "DevOps Toolkit",
      description: "A comprehensive suite of DevOps tools to streamline deployment pipelines and improve development workflows.",
      tech: ["Docker", "Kubernetes", "GitHub Actions", "AWS"],
      github: "https://github.com/yourusername/devops-toolkit",
      live: "https://devops-toolkit.dev",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: false,
      date: "February 2025",
      stars: 28
    },
    {
      title: "Smart Home Dashboard",
      description: "A centralized IoT control interface for managing smart home devices with beautiful visualizations and automation tools.",
      tech: ["Vue.js", "GraphQL", "MQTT", "Raspberry Pi"],
      github: "https://github.com/yourusername/smart-home",
      live: "https://smart-home-dashboard.io",
      image: "https://images.unsplash.com/photo-1558002038-bb0237f4de6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: false,
      date: "January 2025",
      stars: 31
    },
    {
      title: "Crypto Analytics Platform",
      description: "Real-time cryptocurrency market analytics with predictive modeling and portfolio management features.",
      tech: ["React", "Node.js", "Web3.js", "TailwindCSS"],
      github: "https://github.com/yourusername/crypto-analytics",
      live: "https://crypto-analytics.dev",
      image: "https://images.unsplash.com/photo-1621501103258-3e135c8c1753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: false,
      date: "December 2024",
      stars: 45
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered tool that helps create high-quality blog posts, marketing copy, and social media content.",
      tech: ["Python", "Flask", "OpenAI API", "React"],
      github: "https://github.com/yourusername/ai-content-gen",
      live: "https://ai-content-generator.app",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: false,
      date: "November 2024",
      stars: 39
    },
    {
      title: "Health Tracker",
      description: "A comprehensive health and fitness tracking application with custom workout plans and nutrition monitoring.",
      tech: ["Flutter", "Firebase", "HealthKit", "Google Fit API"],
      github: "https://github.com/yourusername/health-tracker",
      live: "https://health-tracker-app.com",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      featured: false,
      date: "October 2024",
      stars: 24
    }
  ];

  // Get all unique tags from projects
  const allTags = [...new Set(projects.flatMap(project => project.tech))];

  // Filter projects based on search query and selected tag
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? project.tech.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag, searchQuery]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Featured projects section
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Projects Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A curated selection of my work showcasing my skills and passion for building innovative solutions.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center">
              <Star className="mr-2 text-yellow-500" size={20} />
              Featured Projects
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={`featured-${index}`}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('image-fallback');
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <Code size={48} className="opacity-30" />
                    </div>
                  )}
                  
                  {/* Semi-transparent overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full p-1 z-10">
                    <div className="flex items-center text-yellow-400 px-2 text-xs">
                      <Star size={12} className="mr-1" />
                      {project.stars}
                    </div>
                  </div>
                  
                  {/* Add project title overlay at bottom for list mode */}
                  {viewMode === 'grid' && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                      <h3 className="text-white text-lg font-bold truncate">{project.title}</h3>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Github size={18} />
                      </motion.a>
                      <motion.a 
                        href={project.live} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                    <Button variant="link" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium p-0">
                      Details
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter and Search Bar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-auto flex flex-wrap gap-2 items-center">
            <span className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
              <Filter size={16} className="mr-2" />
              Filter:
            </span>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={selectedTag === null ? "default" : "outline"} 
                size="sm"
                className="text-xs"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Button>
              {allTags.slice(0, 8).map((tag, index) => (
                <Button 
                  key={index}
                  variant={selectedTag === tag ? "default" : "outline"} 
                  size="sm"
                  className="text-xs"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-auto flex gap-4 items-center">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full py-2 pl-9 pr-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="hidden md:flex gap-1">
              <Button 
                variant={viewMode === 'grid' ? "default" : "outline"} 
                size="icon" 
                onClick={() => setViewMode('grid')}
                className="h-9 w-9"
              >
                <Layers size={16} />
              </Button>
              <Button 
                variant={viewMode === 'list' ? "default" : "outline"} 
                size="icon" 
                onClick={() => setViewMode('list')}
                className="h-9 w-9"
              >
                <Layers size={16} />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={viewMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length > 0 ? (
              <>
                {viewMode === 'grid' ? (
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {currentProjects.map((project, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                      >
                        <div className="h-40 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                            <Code size={32} className="opacity-50" />
                          </div>
                          {project.featured && (
                            <div className="absolute top-2 left-2 bg-yellow-500 text-yellow-900 text-xs font-bold px-2 py-1 rounded-md">
                              Featured
                            </div>
                          )}
                          <div className="absolute bottom-2 right-2 flex items-center bg-black bg-opacity-50 rounded-full px-2 py-0.5">
                            <Star size={12} className="text-yellow-400 mr-1" />
                            <span className="text-white text-xs">{project.stars}</span>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold">{project.title}</h3>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                              <Calendar size={12} className="mr-1" />
                              {project.date}
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {project.tech.slice(0, 3).map((tech, i) => (
                              <span 
                                key={i} 
                                className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                                +{project.tech.length - 3}
                              </span>
                            )}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                              <motion.a 
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                whileHover={{ scale: 1.1 }}
                              >
                                <Github size={16} />
                              </motion.a>
                              <motion.a 
                                href={project.live} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                whileHover={{ scale: 1.1 }}
                              >
                                <ExternalLink size={16} />
                              </motion.a>
                            </div>
                            <Button variant="ghost" size="sm" className="text-xs">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div 
                    className="flex flex-col gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {currentProjects.map((project, index) => (
                      <motion.div 
                        key={index}
                        className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row"
                        variants={cardVariants}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-full md:w-56 h-32 md:h-auto bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 relative">
                          <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                            <Code size={32} className="opacity-50" />
                          </div>
                          {project.featured && (
                            <div className="absolute top-2 left-2 bg-yellow-500 text-yellow-900 text-xs font-bold px-2 py-1 rounded-md">
                              Featured
                            </div>
                          )}
                        </div>
                        <div className="p-5 flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <h3 className="text-lg font-bold mr-3">{project.title}</h3>
                              <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                                <Calendar size={12} className="mr-1" />
                                {project.date}
                              </div>
                            </div>
                            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5">
                              <Star size={12} className="text-yellow-500 mr-1" />
                              <span className="text-gray-700 dark:text-gray-300 text-xs">{project.stars}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.tech.map((tech, i) => (
                              <span 
                                key={i} 
                                className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                              <motion.a 
                                href={project.github} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                whileHover={{ scale: 1.1 }}
                              >
                                <Github size={16} />
                              </motion.a>
                              <motion.a 
                                href={project.live} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                                whileHover={{ scale: 1.1 }}
                              >
                                <ExternalLink size={16} />
                              </motion.a>
                            </div>
                            <Button variant="ghost" size="sm" className="text-xs">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </>
            ) : (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Search size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">No projects found</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedTag(null);
                  }}
                >
                  Clear filters
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {filteredProjects.length > projectsPerPage && (
          <motion.div 
            className="flex justify-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon"
                disabled={currentPage === 1}
                onClick={() => paginate(currentPage - 1)}
                className="h-8 w-8"
              >
                <ChevronLeft size={16} />
              </Button>
              
              {Array.from({ length: totalPages }).map((_, index) => {
                // Only show limited page numbers with ellipsis
                if (
                  index === 0 || 
                  index === totalPages - 1 || 
                  (index >= currentPage - 2 && index <= currentPage)
                ) {
                  return (
                    <Button 
                      key={index}
                      variant={currentPage === index + 1 ? "default" : "outline"}
                      onClick={() => paginate(index + 1)}
                      className="h-8 w-8 p-0"
                    >
                      {index + 1}
                    </Button>
                  );
                } else if (
                  (index === 1 && currentPage > 3) ||
                  (index === totalPages - 2 && currentPage < totalPages - 2)
                ) {
                  return (
                    <Button 
                      key={index}
                      variant="outline"
                      disabled
                      className="h-8 w-8 p-0"
                    >
                      ...
                    </Button>
                  );
                }
                return null;
              })}
              
              <Button 
                variant="outline" 
                size="icon"
                disabled={currentPage === totalPages}
                onClick={() => paginate(currentPage + 1)}
                className="h-8 w-8"
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          </motion.div>
        )}

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            View All Projects on GitHub
            <Github size={16} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects