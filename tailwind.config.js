module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
