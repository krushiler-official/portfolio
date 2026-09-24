/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── Quantum Slate Color System ──────────────────────────────────────
      colors: {
        dark:      '#060816',
        surface:   '#0F172A',
        primary:   '#00F5FF',
        secondary: '#8B5CF6',
        accent:    '#22C55E',
        danger:    '#F43F5E',
        "text-light": '#F8FAFC',
        "text-dim":   '#94A3B8',
        "text-muted": '#64748B',
        // Semantic glass tints
        "glass-border": 'rgba(0, 245, 255, 0.12)',
        "glass-bg":     'rgba(15, 23, 42, 0.65)',
      },

      // ── Typography ──────────────────────────────────────────────────────
      fontFamily: {
        heading: ['"Outfit"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        body:    ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        sans:    ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },

      // ── Spacing extras ──────────────────────────────────────────────────
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },

      // ── Border radius ───────────────────────────────────────────────────
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // ── Box shadows ─────────────────────────────────────────────────────
      boxShadow: {
        'glow-cyan':    '0 0 20px rgba(0, 245, 255, 0.25), 0 0 60px rgba(0, 245, 255, 0.08)',
        'glow-violet':  '0 0 20px rgba(139, 92, 246, 0.30), 0 0 60px rgba(139, 92, 246, 0.10)',
        'glow-green':   '0 0 20px rgba(34, 197, 94, 0.25)',
        'card':         '0 4px 24px rgba(0, 0, 0, 0.40), 0 1px 0 rgba(255,255,255,0.04) inset',
        'card-hover':   '0 8px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(0, 245, 255, 0.18)',
        'navbar':       '0 1px 0 rgba(0, 245, 255, 0.06), 0 4px 32px rgba(0,0,0,0.5)',
      },

      // ── Backdrop blur ───────────────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },

      // ── Animations ──────────────────────────────────────────────────────
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'float-delayed':  'float 6s ease-in-out 2s infinite',
        'pulse-slow':     'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow':      'spin 12s linear infinite',
        'glow-pulse':     'glowPulse 3s ease-in-out infinite',
        'aurora':         'aurora 18s ease infinite',
        'grid-fade':      'gridFade 4s ease-in-out infinite',
        'slide-up':       'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':        'fadeIn 0.8s ease forwards',
        'shimmer':        'shimmer 2.5s linear infinite',
        'border-glow':    'borderGlow 3s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.05)' },
        },
        aurora: {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        gridFade: {
          '0%, 100%': { opacity: '0.03' },
          '50%':      { opacity: '0.07' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(0, 245, 255, 0.2)' },
          '50%':      { borderColor: 'rgba(0, 245, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
