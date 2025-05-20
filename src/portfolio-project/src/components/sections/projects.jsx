import React from 'react';
import { motion } from 'framer-motion';
import { IconProject } from 'lucide-react'; // Ensure you have lucide-react installed

const projectsData = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Description of project three.',
    link: '#',
  },
];

function Projects() {
  return (
    <section className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-5 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <IconProject className="w-6 h-6 mb-2 text-blue-500" />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;