//imports
const Colors = require("./src/utils/Colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tabGrey: Colors.tabGrey,
        walletBlue: Colors.walletBlue,
        lightGrey: Colors.lightGrey,
        highlightOrangeBg: Colors.highlightOrangeBg,
        highlightOrangeText: Colors.highlightOrangeText,
      },
      width: {
        "11.4/12": "95%",
      },
      fontSize: {
        xxs: "0.7rem",
      },
    },
  },
  plugins: [],
};
