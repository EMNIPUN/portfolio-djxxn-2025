import React, { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Code, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';


const skills = [
  "JavaScript", "React", "Node.js", "TypeScript", 
  "Python", "Tailwind CSS", "GraphQL", "Next.js",
  "MongoDB", "PostgreSQL", "Docker", "AWS"
];

function HomePage() {

  return (
    <>
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 min-h-screen transition-colors duration-300">
        
        {/* Fixed Header */}
        <div>
            <NavBar/>
        </div>


        {/* Hero Section */}
        <div>
            <Hero/>
        </div>

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills &amp; Technologies</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I've worked with a variety of technologies in the web development world.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                <motion.div 
                    key={index}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5, backgroundColor: "#4F46E5", color: "#FFFFFF" }}
                >
                    {skill}
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I'm currently available for freelance work and full-time positions. 
                If you're interested in working together, please get in touch.
                </p>
            </motion.div>

            <motion.div 
                className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    ></textarea>
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                    Send Message
                </Button>
                </form>
            </motion.div>
            </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
                <motion.a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ y: -3, color: "#6366F1" }}
                className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                <Github size={20} />
                </motion.a>
                <motion.a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ y: -3, color: "#6366F1" }}
                className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                <Linkedin size={20} />
                </motion.a>
                <motion.a 
                href="mailto:your.email@example.com" 
                whileHover={{ y: -3, color: "#6366F1" }}
                className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                <Mail size={20} />
                </motion.a>
            </div>
            </div>
        </footer>
        </div>
    </>
  );
}

export default HomePage;