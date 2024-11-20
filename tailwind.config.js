/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbit: ['Orbit'],
        alien: ['Gasoek One']
      },
      colors: {
        myCyan: '#4ECAF1'
      },
      boxShadow: {
        inTop: '0px 24px 58px 5px rgba(0,0,0,1) inset',
        inBottom: '0px -24px 58px 5px rgba(0,0,0,1) inset'

      }
    },
  },
  plugins: [],
}

