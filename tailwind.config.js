module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gif-tick": "url('/src/assets/checked.gif')",
      }),
      colors: {
        lightBlue: "#0091EA",
        brightBlue: "#1539c8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
