/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playlist-script': ['"Playlist Script"', 'cursive'],
        'qwitchergryphen': ['QwitcherGryphen-Bold', 'cursive'],
      },
    },
  },
  plugins: [],
}
