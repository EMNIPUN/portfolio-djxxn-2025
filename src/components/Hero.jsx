import React from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Code, Moon, Sun } from 'lucide-react';
import { Canvas } from '@react-three/fiber';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.span 
                className="text-indigo-500 dark:text-indigo-400 font-medium mb-2 block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I'm
              </motion.span>
              <motion.h1 
                className="text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                John Doe
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400 font-light mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="relative">
                  <span className="absolute -z-10 bottom-1 left-0 w-full h-3 bg-indigo-500/20 dark:bg-indigo-400/20"></span>
                  Full Stack Developer
                </span> &amp; UX Designer
              </motion.h2>
              <motion.p 
                className="text-lg max-w-2xl mb-10 text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's create something amazing together.
              </motion.p>
            </div>

            <motion.div 
              className="flex gap-4 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transform hover:scale-105 transition-transform">
                Get in touch
              </Button>
              <Button variant="outline" className="border-gray-300 dark:border-gray-700 transform hover:scale-105 transition-transform">
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
          </motion.div>

            <motion.div
                className="relative flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.img 
                src="https://img.freepik.com/free-photo/laptop-cup-table-dark-room-with-blank-screen-night_169016-47420.jpg?ga=GA1.1.354948533.1732556959&semt=ais_hybrid&w=740" 
                alt="Professional workspace" 
                className="w-[800px] h-[500px] rounded-2xl object-cover shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 animate-gradient" />
      </div>
    </section>
  )
}

export default Hero