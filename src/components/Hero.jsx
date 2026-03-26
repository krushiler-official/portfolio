import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ExternalLink, Send } from 'lucide-react';
import profile from '../assets/images/profile.png';

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 25;
    const y = (clientY - innerHeight / 2) / 25;
    setTilt({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-mono mb-4 text-lg">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-text-light mb-4">
            Krushil Prajapati
          </h1>
          <div className="text-2xl md:text-4xl font-semibold text-text-dim mb-8 h-12">
            <Typewriter
              words={['Computer Engineering Student', 'Full Stack Web Developer', 'Cybersecurity Enthusiast']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
          <p className="text-lg text-text-dim max-w-lg mb-10 leading-relaxed">
            I build digital experiences that are not only visually impressive but also technically robust and secure. Currently focusing on Full stack Development (With Ai Integration)and  Cybersecurity.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-primary/25"
              >
                View Projects <ExternalLink size={20} />
              </motion.button>
            </a>
            <a href="/resume.pdf" download="Krushil_Prajapati_Resume.pdf">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border border-white/20 hover:border-primary px-8 py-3 rounded-full font-bold transition-all"
              >
                Resume <Download size={20} />
              </motion.button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
          style={{
            perspective: '1000px'
          }}
        >
          <motion.div
            style={{
              rotateX: -tilt.y,
              rotateY: tilt.x,
            }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent animate-spin-slow blur-xl opacity-50"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 animate-float bg-dark">
              {/* Profile Placeholder - will use a generated image or generic avatar icon if none exists */}
              <div className="w-full h-full flex items-center justify-center bg-slate-800">
                <img
                  src={profile}
                  alt="Krushil Prajapati"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Subtle glow effect around image */}
            <div className="absolute -inset-4 rounded-3xl bg-primary/20 blur-2xl -z-10 group-hover:bg-primary/40 transition-all duration-500"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <a href="#about" aria-label="Scroll to About Section">
          <div className="w-6 h-10 border-2 border-text-dim/30 hover:border-text-dim/60 transition-colors rounded-full flex justify-center p-1 cursor-pointer">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
