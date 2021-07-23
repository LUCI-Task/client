module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "access-cat": "url('/src/ginger-cat-access-blocked.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
