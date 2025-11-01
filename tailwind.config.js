/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tiktok': ['TikTok Sans', 'sans-serif'],
      },
      colors: {
        // Add TikTok-like colors if needed
        'tiktok-primary': '#FE2C55',
        'tiktok-dark': '#121212',
      },
    },
  },
  plugins: [],
}