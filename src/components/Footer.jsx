import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 glass-elevated accent-line-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-heading font-bold text-gradient tracking-tight">KP.</div>
          <div className="text-text-muted text-sm text-center md:text-left flex items-center gap-2">
            Built with <Heart size={14} className="text-danger fill-danger" /> using React & Tailwind CSS
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://github.com/krushiler-official" target="_blank" rel="noreferrer" className="btn-icon">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/krushil-prajapati" target="_blank" rel="noreferrer" className="btn-icon">
              <Linkedin size={16} />
            </a>
            <a href="mailto:krushilprajapati.er@gmail.com" className="btn-icon">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
