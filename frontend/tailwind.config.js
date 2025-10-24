/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sua nova paleta de cores
        'brand-primary': '#F4A64E', // Laranja/Mostarda (para botões e destaques)
        'brand-secondary': '#7C4A2D', // Marrom Escuro (para textos e títulos)
        'brand-accent': '#9C9B7A',   // Verde Oliva (para detalhes e links)
        'brand-light': '#FFE2C8',   // Bege/Pêssego (para fundos leves)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
