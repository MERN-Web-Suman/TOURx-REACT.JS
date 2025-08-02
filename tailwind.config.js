/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors : {
        primary : "#fea928",
        secondary: "#ed8900",
      },
        animation: {
        gradientX: "gradientX 8s ease infinite",
      },
       keyframes: {
        gradientX: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      fontFamily : {
        sans : ["poppins","sans-serif"],
      },
      container : {
          center :true,
          padding:{
             DEFAULT : "1rem",
             sm:"2rem",
             lg:"4rem",
             xl:"5rem",
             "2xl" : "6rem",
          },
      },
    },
  },
  plugins: [],
}