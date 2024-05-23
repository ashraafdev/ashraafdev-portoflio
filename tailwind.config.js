/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        profile: "url('/public/profile.jpg')",
        "logo-white": "url('/public/ashraafdev-black.png')",
        "logo-dark": "url('/public/ashraafdev-white.png')",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
