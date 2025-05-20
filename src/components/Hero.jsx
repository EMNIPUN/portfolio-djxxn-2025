import React from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Code, Moon, Sun } from 'lucide-react';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative            overflow-hidden pt-20">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <div>
                <span className="text-indigo-500 dark:text-indigo-400 font-medium mb-2 block">
                    Hello, I'm
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    John Doe
                </h1>
                <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400 font-light mb-8">
                    <span className="relative">
                        <span className="absolute -z-10 bottom-1 left-0 w-full h-3 bg-indigo-500/20 dark:bg-indigo-400/20"></span>
                        Full Stack Developer
                    </span> &amp; UX Designer
                </h2>
                <p className="text-lg max-w-2xl mb-10 text-gray-700 dark:text-gray-300">
                    I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's create something amazing together.
                </p>
            </div>
            <img src='https://onedertech.com/wp-content/uploads/2025/02/Untitled-1300-x-900-px-500-x-500-px-3.jpg' alt='John Doe'/>
        </motion.div>

        <motion.div 
            className="flex gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            <Button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                Get in touch
            </Button>
            <Button variant="outline" className="border-gray-300 dark:border-gray-700">
                View Projects
            </Button>
        </motion.div>

            <motion.div 
                className="flex gap-6 text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >
                <motion.a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ y: -3, color: "#6366F1" }}
                className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                <Github size={24} />
                </motion.a>
                <motion.a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ y: -3, color: "#6366F1" }}
                className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                <Linkedin size={24} />
                </motion.a>
                <motion.a 
                href="mailto:your.email@example.com" 
                whileHover={{ y: -3, color: "#6366F1" }}
                className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                <Mail size={24} />
                </motion.a>
            </motion.div>
            </div>

            <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            >
            <ArrowDown size={24} />
            </motion.div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 -z-10 opacity-10 dark:opacity-[0.03]">
            <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="300" cy="300" r="300" fill="url(#paint0_radial)" />
                <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) rotate(90) scale(300)">
                    <stop stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#4F46E5" stopOpacity="0" />
                </radialGradient>
                </defs>
            </svg>
            </div>
    </section>
  )
}

export default Hero