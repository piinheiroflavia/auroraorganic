/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
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

