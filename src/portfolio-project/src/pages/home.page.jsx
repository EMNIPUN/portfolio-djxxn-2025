import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-20"
      >
        <h1 className="text-5xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg mb-8">
          Discover my projects and skills.
        </p>
        <Button>Get Started</Button>
      </motion.div>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default HomePage