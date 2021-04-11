module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["Oxygen", "ui-sans-serif", "system-ui"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
