import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/images/profile.png';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4 text-center">
            About <span className="text-primary text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass p-4">
              <img
                src={profile}
                alt="Krushil Prajapati"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-text-light italic">
              "Turning ideas into reality through code."
            </h3>
            <p className="text-text-dim text-lg leading-relaxed">
              I am a passionate Computer Engineering student with a deep interest in building innovative digital solutions. My journey in tech is driven by curiosity and a commitment to excellence.
            </p>
            <p className="text-text-dim text-lg leading-relaxed">
              With a strong foundation in the <span className="text-primary font-bold">MERN stack</span>, I love creating web applications that are both functional and beautiful. My interests extend to <span className="text-secondary font-bold">Mobile App Development</span> and <span className="text-accent font-bold">Cybersecurity</span>, where I explore the intricacies of ethical hacking and secure coding.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Name', value: 'Krushil Prajapati' },
                { label: 'Role', value: 'Full Stack Developer, Frontend Developer' },
                { label: 'Location', value: 'Bopal, Ahmedabad, Gujarat, India' },
                { label: 'Interest', value: 'WebDevlopment, Frontend,Cybersecurity' }
              ].map((item) => (
                <div key={item.label} className="glass p-4 rounded-xl">
                  <p className="text-primary text-sm font-mono">{item.label}</p>
                  <p className="text-text-light font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
