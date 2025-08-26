/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: 
    {
       colors:{
        activeInputBorderColor : 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)',
        inputErrorsColorRed :'hsl(0, 100%, 66%)',
        gray200:'hsl(270, 3%, 87%)',
        gray400:'hsl(212, 12%, 71%)',
        purple950:'hsl(278, 68%, 11%)',
       },
       fontSize:{
        fontBasic: '18 px'
       },
       backgroundImage:{
        mainMobile:"url(./src/images/bg-main-mobile.png)",
        mainDesktop:"url(./src/images/bg-main-desktop.png)",
       },
       fontFamily:
       {
        SpaceGrotesk:"SpaceGrotesk",
      }
    },

  },
  plugins: [],
}

