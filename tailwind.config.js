/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
      screens: {
        
        'sm': '770px',
        // => @media (min-width: 576px) { ... }
  
        'md': '1024px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1321px',
        // => @media (min-width: 1440px) { ... }
      },
  },
  plugins: [],
}

