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
        darkshade:"#222d3d",
        brightBlue: "#1539c8",
      },
      boxShadow:{
        '3xl':'0px 0px 10px 5px rgba(48, 237, 28, 1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
