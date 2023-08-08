/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/components/**/*.jsx",
    "./src/views/**/*.jsx",
  
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#39b54a',
        'contrast':'#204C7D',
        'black':'#0C0C0C',
        'background':'#0F172A',
      },
      fontFamily:{
        montserrat: ['Montserrat','sans-serif'],
      },
      // backgroundImage: {
      //   'hero': "url('./src/views/Home/hero-bg.jpg')",
      //   'contact': "url('./src/views/Contact/contact-bg.jpg')"
      // }
  
    },

  },
  plugins: [],
}

