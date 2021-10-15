module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gif-tick": "url('/src/assets/checked.gif')",
      }),
      colors: {
        navbar: "#1b232e",
        darkshade:"#222d3d"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
