/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#1e1e1e", //black for majority
        primaryGray: "#444549", //text-color for label
        secondaryGray: "#949494",
        lightGray: "#4e4f51",
        White: "#fcfefb", //properties white
        lightBlack: "#252525",
        textGray: "#666769", //for text
        primaryBlue: "#307aff",
      },
      boxShadow: {
        box_Shadow: "0px 0px 20px 10px rgb(0 0 0 / .15)",
      },
    },
  },
  plugins: [],
}
