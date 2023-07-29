/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
      },
      backgroundImage: {
        "mobile-light": "url('./src/assets/images/bg-mobile-light.jpg')",
        "mobile-dark": "url('./src/assets/images/bg-mobile-dark.jpg')",
        "desktop-light": "url('./src/assets/images/bg-desktop-light.jpg')",
        "desktop-dark": "url('./src/assets/images/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
};
