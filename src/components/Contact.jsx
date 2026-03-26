import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react';

const ContactItem = ({ icon, label, value, href }) => (
  <motion.a
    href={href}
    target={href.startsWith('http') ? '_blank' : '_self'}
    rel="noreferrer"
    whileHover={{ x: 10 }}
    className="flex items-center gap-4 group"
  >
    <div className="p-3 bg-white/5 rounded-lg text-primary group-hover:bg-primary/20 transition-all">
      {icon}
    </div>
    <div>
      <p className="text-xs font-mono text-text-dim uppercase tracking-widest">{label}</p>
      <p className="text-text-light font-bold group-hover:text-primary transition-colors">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto">
            Ready to collaborate or have a question? Feel free to reach out through any of the channels below or send a direct message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-text-light mb-6">Contact Information</h3>
            <div className="space-y-6">
              <ContactItem
                icon={<Mail />}
                label="Email"
                value="krushilprajapati.er@gmail.com"
                href="mailto:krushilprajapati.er@gmail.com"
              />
              <ContactItem
                icon={<Linkedin />}
                label="LinkedIn"
                value="in/krushil-prajapati"
                href="https://linkedin.com/in/krushil-prajapati"
              />
              <ContactItem
                icon={<Github />}
                label="GitHub"
                value="@krushiler-official"
                href="https://github.com/krushiler-official"
              />
              <ContactItem
                icon={<MapPin />}
                label="Location"
                value="Bopal,Ahmedabad, Gujarat, India"
                href="#"
              />
            </div>

            <div className="pt-8">
              <a href="/resume.pdf" download>
                <button className="flex items-center gap-2 bg-linear-to-r from-primary to-accent text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all">
                  Download My Resume <Download size={20} />
                </button>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-text-dim mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-light focus:border-primary outline-none transition-all"
                    placeholder=" "
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-text-dim mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-light focus:border-primary outline-none transition-all"
                    placeholder=" "
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-mono text-text-dim mb-2">Message</label>
                <textarea
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-light focus:border-primary outline-none transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
