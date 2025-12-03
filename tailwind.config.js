/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3D2817', // Marron Riche
          light: '#5A3D26',
        },
        secondary: {
          DEFAULT: '#1A9B8E', // Turquoise
          light: '#23B5A6',
        },
        accent: {
          gold: '#D4AF37', // Or Brossé
          coral: '#FF6B4A', // Corail
        },
        neutral: {
          offWhite: '#F8F6F1',
          softBlack: '#2C2C2C',
          gray: '#E5E5E5',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Crimson Text', 'serif'],
        sans: ['Manrope', 'Lexend', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(45, 40, 35, 0.06)',
        'medium': '0 2px 4px rgba(45, 40, 35, 0.05), 0 8px 16px rgba(45, 40, 35, 0.08), 0 20px 40px rgba(45, 40, 35, 0.12)',
        'deep': '0 5px 10px rgba(45, 40, 35, 0.1), 0 20px 30px rgba(45, 40, 35, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
