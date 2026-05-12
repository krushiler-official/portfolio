import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar transition-all duration-300 ${scrolled ? 'navbar-scrolled py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gradient font-heading cursor-pointer tracking-tight"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            KP.
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://github.com/krushiler-official" target="_blank" rel="noreferrer" className="btn-icon">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com/in/krushil-prajapati" target="_blank" rel="noreferrer" className="btn-icon">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-light focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-elevated"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-text-dim hover:text-primary hover:bg-primary/5 rounded-lg transition-all font-medium font-body"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-4 px-3 pt-4 border-t border-white/5 mt-4">
                <a href="https://github.com/krushiler-official" target="_blank" rel="noreferrer" className="btn-icon"><Github size={16} /></a>
                <a href="https://linkedin.com/in/krushil-prajapati" target="_blank" rel="noreferrer" className="btn-icon"><Linkedin size={16} /></a>
                <a href="mailto:krushilprajapati.er@gmail.com" className="btn-icon"><Mail size={16} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
