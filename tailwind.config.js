/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors : {
        primary : "#fea928",
        secondary: "#ed8900",
      },
          keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
        animation: {
        "gradient-x": "gradient-x 10s ease infinite",
      },
        backgroundSize: {
        "size-200": "200% 200%",
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