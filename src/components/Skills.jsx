import React from 'react';
import { motion } from 'framer-motion';
import SkillRadar from './SkillRadar';
import skillsData from '../data/skills.json';
import { Code2, Monitor, Database, Terminal, Shield } from 'lucide-react';

const SkillCard = ({ name, level }) => (
  <motion.div
    whileHover={{ scale: 1.05, translateY: -5 }}
    className="glass p-4 rounded-xl flex flex-col gap-2 group transition-all"
  >
    <div className="flex justify-between items-center">
      <span className="text-text-light font-medium group-hover:text-primary transition-colors">{name}</span>
      <span className="text-primary font-mono text-sm">{level}%</span>
    </div>
    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full bg-linear-to-r from-primary to-accent"
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
    <section id="skills" className="py-24 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
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
                <div className="flex items-center gap-2 mb-2">
                  {cat.icon}
                  <h3 className="text-xl font-bold text-text-light">{cat.title}</h3>
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
