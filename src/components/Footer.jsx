import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 glass border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold text-gradient">KP.</div>
          
          <div className="text-text-dim text-center md:text-left flex items-center gap-2">
            Built with <Heart size={16} className="text-red-500 fill-red-500" /> using React & Tailwind CSS
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://github.com/krushiler-official" target="_blank" rel="noreferrer" className="text-text-dim hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/krushil-prajapati" target="_blank" rel="noreferrer" className="text-text-dim hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:krushilprajapati.er@gmail.com" className="text-text-dim hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
