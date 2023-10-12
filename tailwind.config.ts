/** @type {import('tailwindcss').Config} */
/** @type {import('daisyui').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    daisyui: {
      themes: [
        "synthwave",
      ],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("daisyui")
  ],
}
