import React from 'react';
import { motion } from 'framer-motion';
import { IconUser, IconCode, IconBriefcase } from 'lucide-react';

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I am a passionate developer with a background in web development and design. I love creating beautiful and functional applications that provide a great user experience.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <IconUser className="h-12 w-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold">Skills</h3>
            <p className="text-center">JavaScript, React, Tailwind CSS, Node.js</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <IconCode className="h-12 w-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold">Experience</h3>
            <p className="text-center">3+ years in web development, specializing in front-end technologies.</p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <IconBriefcase className="h-12 w-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold">Projects</h3>
            <p className="text-center">A variety of projects showcasing my skills and creativity.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;