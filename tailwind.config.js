/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1020': '1080px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}