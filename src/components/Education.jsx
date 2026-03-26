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

    <div className="z-10 bg-primary p-3 rounded-full border-4 border-dark shadow-[0_0_20px_rgba(59,130,246,0.5)]">
      <GraduationCap className="text-white" size={24} />
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
        <div className="glass mt-4 p-4 rounded-xl border border-white/5">
            <p className="text-text-dim text-sm leading-relaxed">
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
    <section id="education" className="py-24 bg-dark/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto">
            My educational background that shaped my technical skills and professional outlook.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-primary via-accent to-transparent"></div>

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
