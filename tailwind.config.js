/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  plugins: [
    require('@tailwindcss/aspect-ratio'),
<<<<<<< HEAD
    require("tw-elements/dist/plugin.cjs")
=======
>>>>>>> 8d889c6394564da19c11637305e36c4ac69974e8
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
<<<<<<< HEAD
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
=======
>>>>>>> 8d889c6394564da19c11637305e36c4ac69974e8
  ],
  //pré-defino os temas que vou usar
  theme: {
    extend:{
      backgroundImage: {
        
      },
      colors:{
        dark:{
          fundoEscuroDark: '#DEDFDD',
          900: '#475569'
        },
        aurora:{
          fontErroRosa: '#F0DCC4',
          fundoErro: '#1a1a1a',
          branco: '#fff',
          fundoBody: '#F9FAFB',
          tomNeutro: '#EDA37D',
          //cor clara
          fundoClaro: '#e2e8f0',
          //cor escura
          fundoEscuro: '#000'

        }
      }
    }
   
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    
  ],
}

