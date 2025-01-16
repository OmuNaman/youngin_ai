/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#18181b',
        'dark-secondary': '#27272a',
        'accent-primary': '#a855f7',
        'accent-secondary': '#8b5cf6',
        'text-primary': '#fafafa',
        'text-secondary': '#d4d4d8',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};