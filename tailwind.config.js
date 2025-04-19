/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        glow: {
          "0%, 100%": { textShadow: "0 0 5px rgba(255,255,255,0.8)" },
          "50%": { textShadow: "0 0 18px rgba(255,255,255,1)" },
        },
      },
      animation: {
        glow: "glow 2.5s infinite alternate",
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
