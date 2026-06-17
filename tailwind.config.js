/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f4f6f9',
          100: '#e9eef2',
          200: '#cbd7e2',
          300: '#9cb5cb',
          400: '#688eae',
          500: '#486e8f',
          600: '#385672',
          700: '#2e475d',
          800: '#1b2a38',
          900: '#0F1E36', // Luxury Deep Royal Navy
          950: '#0a1424',
        },
        secondary: {
          50:  '#f2f7f6',
          100: '#e0edea',
          200: '#bcd7d0',
          300: '#8fbaba',
          400: '#5e9999',
          500: '#417d7b',
          600: '#326361',
          700: '#1E3F3B', // Medical Sage Emerald
          800: '#193330',
          900: '#112220',
        },
        accent: {
          50:  '#faf8f5',
          100: '#f5efe3',
          200: '#eadeca',
          300: '#dcc6a8',
          400: '#cbb085',
          500: '#BCA374', // Luxury Muted Brass Gold
          600: '#a3875a',
          700: '#876e47',
          800: '#6d5739',
          950: '#3b2f1f',
        },
        gold: {
          400: '#E6C687',
          500: '#BCA374',
          600: '#947D54',
        },
      },
      fontFamily: {
        sans:    ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      animation: {
        'fade-in':         'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up':         'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up':        'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left':   'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right':  'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow':      'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':           'float 6s ease-in-out infinite',
        'float-delayed':   'float 6s ease-in-out infinite 2s',
        'shimmer':         'shimmer 3s linear infinite',
        'bounce-subtle':   'bounceSubtle 2s ease-in-out infinite',
        'width-expand':    'widthExpand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-4px)' },
        },
        widthExpand: {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      boxShadow: {
        'card':           '0 4px 20px rgba(15, 30, 54, 0.03)',
        'card-hover':     '0 12px 30px rgba(15, 30, 54, 0.08)',
        'card-premium':   '0 10px 40px rgba(188, 163, 116, 0.06)',
        'elegant':        '0 20px 50px rgba(15, 30, 54, 0.05)',
        'glow-primary':   '0 4px 20px rgba(188, 163, 116, 0.15)',
        'glow-secondary': '0 4px 20px rgba(30, 63, 59, 0.1)',
        'glow-accent':    '0 4px 20px rgba(188, 163, 116, 0.2)',
        'glass':          '0 8px 32px rgba(15, 30, 54, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
        'premium':        '0 25px 50px -12px rgba(15, 30, 54, 0.06)',
      },
    },
  },
  plugins: [],
}
