/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}",
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
          bgFundoModal: '#fafafa1f',
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

