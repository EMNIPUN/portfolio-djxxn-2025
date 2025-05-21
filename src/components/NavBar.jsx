import React, { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Sun, Moon,  Terminal } from "lucide-react";


function NavBar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });


    useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div>
            <motion.header 
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex justify-between items-center px-4">
            <motion.div 
              className="flex items-center gap-2 text-shadow-gray-900 dark:text-gray-300 font-bold text-xl"
              whileHover={{ scale: 1.05 }}
            >
              <Terminal className="h-6 w-6 text-primary" />
              <span>djxn</span>
            </motion.div>

            <div className="flex items-center gap-6">
                <nav className="hidden md:flex gap-6">
                <motion.a 
                    href="#about" 
                    className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    whileHover={{ y: -2 }}
                >
                    About
                </motion.a>
                <motion.a 
                    href="#projects" 
                    className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    whileHover={{ y: -2 }}
                >
                    Projects
                </motion.a>
                <motion.a 
                    href="#skills" 
                    className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    whileHover={{ y: -2 }}
                >
                    Skills
                </motion.a>
                <motion.a 
                    href="#contact" 
                    className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    whileHover={{ y: -2 }}
                >
                    Contact
                </motion.a>
                </nav>

                <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full"
                >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
            </div>
            </div>
        </motion.header>
    </div>
  )
}

export default NavBar