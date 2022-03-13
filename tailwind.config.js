module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        tracking: {
          '0%': {
            letterSpacing: '1em',
            opacity: 0,
          },
          '40%': {
            opacity: 0.6,
          },
          '100%': {
            letterSpacing: 'normal',
            opacity: 1,
          },
        },
        mobileLoading: {
          '0%': {
            filter: 'blur(12px)',
            opacity: 0,
          },
          '100%': {
            filter: 'blur(0px)',
            opacity: 1
          }
        }
      },
      animation: {
        'textAnimation': 'tracking 1s linear both',
        'mobileAnimation': 'mobileLoading 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
      },
      colors: {
        custompurple: '#635bff',
        custompurplehover: '#0a2540',
        customblue: '#03045E',
        custombluehover: '#CAF0F8',
      },
      screens: {
        'xs': '300px'
      }
    },
  },
  plugins: [],
}