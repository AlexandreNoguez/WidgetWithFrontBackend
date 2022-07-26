module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
        '2xl': {'max': '1535px'},
  
        'xl': {'max': '1279px'},
  
        'lg': {'max': '1023px'},
  
        'md': {'max': '767px'},
  
        'sm': {'max': '639px'},
        'smMin': {'min': '639px'},

        'xm': {'max': '500px'},
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/3745234/pexels-photo-3745234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      colors:{
        brand: {
          300: '#996DFF',
          500: '#8257e6',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
