import React from 'react';
import { motion } from 'framer-motion';
import SkillRadar from './SkillRadar';
import skillsData from '../data/skills.json';
import { Code2, Monitor, Database, Terminal, Shield } from 'lucide-react';

const SkillCard = ({ name, level }) => (
  <motion.div
    whileHover={{ scale: 1.03, translateY: -3 }}
    className="card-stat group transition-all"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-text-dim font-body text-sm group-hover:text-text-light transition-colors">{name}</span>
      <span className="text-primary font-mono text-xs">{level}%</span>
    </div>
    <div className="progress-track">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="progress-fill"
      />
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    { title: 'Frontend', icon: <Monitor className="text-primary" />, skills: skillsData.frontend },
    { title: 'Backend / DB', icon: <Database className="text-secondary" />, skills: skillsData.backend },
    { title: 'Languages', icon: <Code2 className="text-accent" />, skills: skillsData.languages },
    { title: 'Tools & Security', icon: <Shield className="text-red-400" />, skills: skillsData.tools },
  ];

  return (
    <section id="skills" className="py-24 section-surface relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-80 h-80 glow-blob glow-blob-cyan opacity-15"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 glow-blob glow-blob-violet opacity-15"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-light mb-4">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <div className="divider mb-4"></div>
          <p className="text-text-dim max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and proficiency levels across various domains of software engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <SkillRadar />
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 order-1 lg:order-2">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  {cat.icon}
                  <h3 className="text-lg font-heading font-bold text-text-light">{cat.title}</h3>
                </div>
                <div className="space-y-3">
                  {cat.skills.map(skill => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
