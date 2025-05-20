import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react'; // Adjust the import based on the specific icon you want to use
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I am a passionate developer with a knack for creating beautiful and functional web applications.
      </motion.p>
      <Button>
        <LucideIcon name="arrow-right" className="mr-2" />
        Get Started
      </Button>
    </div>
  );
};

export default Hero;