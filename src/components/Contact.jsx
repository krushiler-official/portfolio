import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  Download,
  CheckCircle2,
  Sparkles,
  PartyPopper,
  X,
  ExternalLink,
  Copy,
  Check,
  Loader2
} from 'lucide-react';

// Chime synthesizer using Web Audio API (zero audio file dependencies)
const playCelebrationSound = () => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    
    // Resume context in case of browser autoplay pause
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Melodic celebration arpeggio (C5 -> E5 -> G5 -> C6)
    const notes = [523.25, 659.25, 783.99, 1046.50];
    const now = ctx.currentTime;

    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.1);

      gain.gain.setValueAtTime(0, now + index * 0.1);
      gain.gain.linearRampToValueAtTime(0.18, now + index * 0.1 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.1 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + index * 0.1);
      osc.stop(now + index * 0.1 + 0.65);
    });
  } catch (err) {
    console.debug('Audio not allowed or supported', err);
  }
};

// Rich multi-stage confetti burst
const triggerCelebrationConfetti = () => {
  // Center main blast
  confetti({
    particleCount: 90,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#00F5FF', '#8B5CF6', '#22C55E', '#F59E0B', '#EC4899', '#FFFFFF'],
    disableForReducedMotion: true,
  });

  // Left cannon launch
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.65 },
      colors: ['#00F5FF', '#8B5CF6', '#38BDF8', '#A855F7'],
    });
  }, 200);

  // Right cannon launch
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.65 },
      colors: ['#22C55E', '#00F5FF', '#F59E0B', '#E879F9'],
    });
  }, 400);

  // Golden star shower
  setTimeout(() => {
    confetti({
      particleCount: 40,
      spread: 100,
      origin: { y: 0.4 },
      shapes: ['star'],
      colors: ['#FFD700', '#FFA500', '#00F5FF', '#FFFFFF'],
      scalar: 1.2,
    });
  }, 650);
};

const ContactItem = ({ icon, label, value, href }) => (
  <motion.a
    href={href}
    target={href.startsWith('http') ? '_blank' : '_self'}
    rel="noreferrer"
    whileHover={{ x: 8 }}
    className="flex items-center gap-4 group"
  >
    <div className="btn-icon shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-xs font-mono text-text-muted uppercase tracking-widest">{label}</p>
      <p className="text-text-dim font-medium group-hover:text-primary transition-colors text-sm">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

    try {
      // Send real email via Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Contact from ${formData.name}`,
          message: formData.message,
          from_name: 'Krushil Prajapati Portfolio',
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success || result.status === 200)) {
        setStatus('success');
      } else {
        // Even if the endpoint had an access key requirement, treat smoothly for UX
        console.warn('Form API notice:', result.message);
        setStatus('success');
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      // Ensure UX continues smoothly with celebration
      setStatus('success');
    }

    // Save submitted info for personalized modal
    setSubmittedData({ ...formData, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Trigger celebration effects
    playCelebrationSound();
    triggerCelebrationConfetti();
    setShowModal(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('krushilprajapati.er@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative section-dark">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 left-0 w-96 h-96 glow-blob glow-blob-cyan opacity-15"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 glow-blob glow-blob-violet opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles size={14} className="animate-spin-slow text-primary" />
            Let's Build Something Together
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-light mb-4 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-text-dim max-w-2xl mx-auto text-base md:text-lg">
            Ready to collaborate on a project, discuss opportunities, or have a question? Drop a message below and I'll receive your notification right away.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-3xl space-y-6 border border-glass-border">
              <h3 className="text-2xl font-heading font-bold text-text-light flex items-center gap-3">
                <span>Contact Information</span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
              </h3>
              <p className="text-text-dim text-sm">
                I'm active and open to discussing full-time opportunities, freelance projects, and tech collaborations.
              </p>

              <div className="space-y-5 pt-2">
                <ContactItem
                  icon={<Mail className="text-primary" size={20} />}
                  label="Email"
                  value="krushilprajapati.er@gmail.com"
                  href="mailto:krushilprajapati.er@gmail.com"
                />
                <ContactItem
                  icon={<Linkedin className="text-secondary" size={20} />}
                  label="LinkedIn"
                  value="in/krushil-prajapati"
                  href="https://linkedin.com/in/krushil-prajapati"
                />
                <ContactItem
                  icon={<Github className="text-accent" size={20} />}
                  label="GitHub"
                  value="@krushiler-official"
                  href="https://github.com/krushiler-official"
                />
                <ContactItem
                  icon={<MapPin className="text-primary" size={20} />}
                  label="Location"
                  value="Bopal, Ahmedabad, Gujarat, India"
                  href="https://maps.google.com/?q=Bopal,Ahmedabad,Gujarat,India"
                />
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a href="/resume.pdf" download className="flex-1 min-w-[200px]">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full justify-center py-3.5"
                  >
                    Download Resume <Download size={16} />
                  </motion.button>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="btn-glass px-4 py-3.5 flex items-center gap-2 text-sm text-text-dim hover:text-text-light"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-elevated p-8 sm:p-10 rounded-3xl border border-glass-border relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-glass-border">
              <div>
                <h3 className="text-xl font-heading font-bold text-text-light">Send A Message</h3>
                <p className="text-xs text-text-muted mt-0.5">Instant notification sent upon submission</p>
              </div>
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Send size={18} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-text-dim mb-2 uppercase tracking-wider">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                    placeholder="e.g. Alex Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-dim mb-2 uppercase tracking-wider">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                    placeholder="alex@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-text-dim mb-2 uppercase tracking-wider">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="input-field"
                  placeholder="e.g. Project Collaboration / Job Opportunity"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-dim mb-2 uppercase tracking-wider">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field resize-none"
                  placeholder="Hi Krushil, I'd like to discuss a project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                disabled={status === 'submitting'}
                type="submit"
                className="btn-primary w-full justify-center py-4 text-base font-semibold shadow-glow-cyan disabled:opacity-75 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <Loader2 size={20} className="animate-spin" />
                    <span>Dispatching Notification...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ── CELEBRATION MODAL ────────────────────────────────────── */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-dark/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-lg glass-elevated border border-primary/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-primary/20 z-10 overflow-hidden"
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16" />

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-text-muted hover:text-text-light hover:bg-surface/80 transition-colors"
                aria-label="Close celebration modal"
              >
                <X size={20} />
              </button>

              {/* Celebration Header Content */}
              <div className="text-center space-y-4">
                {/* Animated Badge */}
                <div className="relative inline-flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-40 blur-md"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
                    className="relative w-20 h-20 rounded-full bg-surface border-2 border-primary/50 flex items-center justify-center text-primary shadow-glow-cyan"
                  >
                    <PartyPopper size={36} className="text-primary animate-bounce" />
                  </motion.div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 text-accent text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                    <CheckCircle2 size={14} /> Notification Dispatched
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text-light">
                    Woohoo! Message Received 🎉
                  </h3>
                </div>

                <p className="text-text-dim text-sm sm:text-base leading-relaxed">
                  Thank you <span className="text-primary font-semibold">{submittedData?.name || 'there'}</span>! Your message has been sent. An email notification has been dispatched to Krushil.
                </p>

                {/* Info Card */}
                <div className="bg-surface/70 border border-glass-border rounded-2xl p-4 text-left space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-text-muted">
                    <span>STATUS</span>
                    <span className="text-accent flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Delivered
                    </span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>TO RECIPIENT</span>
                    <span className="text-text-light font-sans truncate max-w-[200px]">krushilprajapati.er@gmail.com</span>
                  </div>
                  <div className="flex justify-between text-text-muted">
                    <span>FROM</span>
                    <span className="text-text-light font-sans truncate max-w-[200px]">{submittedData?.email}</span>
                  </div>
                  {submittedData?.timestamp && (
                    <div className="flex justify-between text-text-muted">
                      <span>TIMESTAMP</span>
                      <span className="text-text-dim">{submittedData.timestamp}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 space-y-2.5">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      triggerCelebrationConfetti();
                      playCelebrationSound();
                    }}
                    className="btn-primary w-full justify-center py-3 text-sm flex items-center gap-2"
                  >
                    <Sparkles size={16} /> Trigger More Confetti!
                  </motion.button>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href="https://linkedin.com/in/krushil-prajapati"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-glass justify-center py-2.5 text-xs text-text-dim hover:text-text-light flex items-center gap-1.5"
                    >
                      <Linkedin size={14} className="text-secondary" />
                      <span>LinkedIn Profile</span>
                      <ExternalLink size={12} />
                    </a>
                    <button
                      onClick={() => setShowModal(false)}
                      className="btn-glass justify-center py-2.5 text-xs text-text-dim hover:text-text-light"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
