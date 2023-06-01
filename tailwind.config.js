/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      screens: {
        xs: `375px`,
        '4k': `2560px`,
      },
      colors: {
        quartz: `#E4E2F4`,
      },
    },
  },
  plugins: [],
};
