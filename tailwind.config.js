/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        selectGrey: 'hsl(216, 12%, 92%)',
        darkPurple: 'hsl(315, 48%, 40%)',
        buttonBlue: 'hsl(243, 53%, 55%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        bgPale: 'hsl(230, 37%, 97%)',
        sideBarGray: 'hsl(210, 14%, 97%)',
        profileBlue: 'hsl(210, 14%, 97%)',
        navBarDark: 'hsl(225, 5%, 35%)'
      }
    },
  },
  plugins: [],
}

