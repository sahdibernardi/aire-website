/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'calistoga': ['var(--font-calistoga)'],
        'sora': ['var(--font-sora)'],
      },
      colors: {
        'aire': {
          'black': '#000000',
          'slate': '#60757A',
          'purple': '#77355B',
          'blue': '#81A3AA',
          'pink': '#A06088',
          'light-blue': '#AEC6CC',
          'beige': '#DBBBA9',
          'white': '#FBFBFB',
          'cream': '#FCE9E0',
        }
      },
    },
  },
  plugins: [],
}
