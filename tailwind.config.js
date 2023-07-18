/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-white': 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(219,219,219,1) 100%)',
        'gradient-black': 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(219,219,219,1) 100%)'
      },
      darkMode: ['class'],
    },
  },
  plugins: [],
}
