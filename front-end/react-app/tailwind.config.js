/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'cat-primary':'#E6842C',
        'cat-secondary':'#FFD6B0',
        'cat-darker-primary':'#ba681e'

      },
      fontFamily:{
        'main':'Lilita One'
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
}


