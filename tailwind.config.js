//imports
const Colors = require("./src/utils/Colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tabGrey: Colors.tabGrey,
        walletBlue: Colors.walletBlue,
      },
      fontSize: {
        xxs: "0.7rem",
      },
    },
  },
  plugins: [],
};
