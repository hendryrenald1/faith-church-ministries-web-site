import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#651c78',
        'primary-light': '#8a3ca3',
        'primary-bg': '#fcf5fd',
        'background-light': '#fcfcfc',
        'background-dark': '#1a1625',
        'text-main': '#2a1c3d',
        'text-muted': '#6b5b7b',
      },
      fontFamily: {
        sans: ['var(--font-spline)', 'Spline Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 60px rgba(101,28,120,0.1)',
      },
    },
  },
  plugins: [forms, containerQueries],
};

export default config;
