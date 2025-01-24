import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1300px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1536px'
    },
    extend: {
      fontFamily: {
        robotoslab: ["Roboto Slab", 'serif'],
        roboto: ["Roboto", 'serif'],
        poppins: ["Poppins",  'serif'],
        mono: ["Roboto Mono", 'serif']

      }, 
      colors: {
        "primary": "#37b7f0",
        "secondary": "#248fef",
        "dark-gray": "#222A39",
        "light-orange": "#D17842",
        "background": "#131820",
        "background-2": "#0C0F14",

        "shadow": "#0A0617"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
    },
    animation: {
      'border-spin': 'spin 7s linear infinite',
      'border-spin-offset': 'spin-offset 7s linear infinite',
      blob: "blob 7s infinite"
    },
    keyframes: {
      spin: {
        '0%': { transform: 'rotate(360deg)' },
        '100%': { transform: 'rotate(0deg)' },
      },
      'spin-offset': {
        '0%': { transform: 'rotate(540deg)' },
        '100%': { transform: 'rotate(180deg)' },
      },
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(30px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        }
      }
    },
  },
  plugins: [],
}


