import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center gap-6"
            >
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 text-white hover:text-primary transition-colors"
              >
                <div className="bg-white/10 p-3 rounded-full hover:bg-primary/20 transition-all">
                  <Github size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">View Code</span>
              </motion.a>
              
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 text-white hover:text-secondary transition-colors"
              >
                <div className="bg-white/10 p-3 rounded-full hover:bg-secondary/20 transition-all">
                  <ExternalLink size={24} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">Live Demo</span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-text-light mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-text-dim text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 text-primary border border-primary/20 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto">
            A selection of my recent works, ranging from full-stack web applications to data science systems and mobile apps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
