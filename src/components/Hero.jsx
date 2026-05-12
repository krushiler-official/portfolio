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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-aurora bg-grid"
    >
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-blob glow-blob-cyan opacity-60"></div>
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 glow-blob glow-blob-violet opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-3/4 left-1/2 w-64 h-64 glow-blob glow-blob-green opacity-30" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-mono text-sm mb-4 tracking-[0.2em] uppercase opacity-80">
            Hi, my name is
          </h2>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-text-light mb-4 tracking-tight">
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
            I build digital experiences that are not only visually impressive but also technically robust and secure. Currently focusing on Full stack Development (With Ai Integration).
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                View Projects <ExternalLink size={16} />
              </motion.button>
            </a>
            <a href="/resume.pdf" download="Krushil_Prajapati_Resume.pdf">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-ghost"
              >
                Resume <Download size={16} />
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
            style={{ rotateX: -tilt.y, rotateY: tilt.x }}
            className="relative w-64 h-64 md:w-80 md:h-80 hero-image-wrapper"
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-primary via-secondary to-accent animate-spin-slow blur-2xl opacity-30"></div>
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-surface">
              <img src={profile} alt="Krushil Prajapati" className="w-full h-full object-cover" />
            </div>
            {/* Glow ring */}
            <div className="absolute -inset-6 rounded-3xl border border-primary/10 animate-glow-pulse pointer-events-none"></div>
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
