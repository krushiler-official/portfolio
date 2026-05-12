import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationItem = ({ degree, institution, period, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative flex items-center justify-between mb-12 w-full"
  >
    <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'order-1 text-left pl-8'}`}>
        {index % 2 === 0 ? (
            <div>
                <h3 className="text-xl font-bold text-text-light">{degree}</h3>
                <p className="text-primary font-medium">{institution}</p>
                <div className="flex items-center justify-end gap-2 text-text-dim mt-2 italic text-sm">
                    <Calendar size={14} /> {period}
                </div>
            </div>
        ) : null}
    </div>

    <div className="z-10 bg-surface p-3 rounded-full border border-primary/30 shadow-glow-cyan">
      <GraduationCap className="text-primary" size={22} />
    </div>

    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'order-1 pl-8 md:pl-0' : 'pl-8'}`}>
        {index % 2 !== 0 ? (
            <div>
                 <h3 className="text-xl font-bold text-text-light">{degree}</h3>
                 <p className="text-primary font-medium">{institution}</p>
                 <div className="flex items-center gap-2 text-text-dim mt-2 italic text-sm">
                     <Calendar size={14} /> {period}
                 </div>
            </div>
        ) : (
             <div className="md:hidden">
                <h3 className="text-xl font-bold text-text-light">{degree}</h3>
                <p className="text-primary font-medium">{institution}</p>
                <div className="flex items-center gap-2 text-text-dim mt-2 italic text-sm">
                    <Calendar size={14} /> {period}
                </div>
            </div>
        )}
        <div className="glass-glow mt-4 p-4 rounded-xl">
            <p className="text-text-dim text-sm leading-relaxed font-body">
                {description}
            </p>
        </div>
    </div>
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering",
      institution: "Computer Engineering",
      period: "2022 - 2026 (Expected)",
      description: "Focusing on fundamental computer science principles, software engineering, and data structures. Actively participating in technical workshops and hackathons."
    }
  ];

  return (
    <section id="education" className="py-24 section-surface overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-80 h-80 glow-blob glow-blob-green opacity-10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-light mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="divider mb-4"></div>
          <p className="text-text-dim max-w-2xl mx-auto">
            My educational background that shaped my technical skills and professional outlook.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-linear-to-b from-primary via-secondary to-transparent opacity-30"></div>

          <div className="relative">
            {educationData.map((edu, index) => (
              <EducationItem key={index} {...edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
