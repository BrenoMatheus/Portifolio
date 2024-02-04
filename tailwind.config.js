/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': 'url("./breno.jpeg")',
        'project-1': 'url("../public/image1.jpeg")',
      }),
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
};
