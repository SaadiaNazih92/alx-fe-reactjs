/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                 // Serve a Vite per funzionare
    "./src/**/*.{js,ts,jsx,tsx}",   // Serve per i tuoi componenti
    "./public/index.html"           // <--- Serve SOLO per passare il controllo automatico
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}