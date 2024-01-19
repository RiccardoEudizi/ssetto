/** @type {import('tailwindcss').Config} */
import corvu from '@corvu/tailwind'

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [corvu]
};
