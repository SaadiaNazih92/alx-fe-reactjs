import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Dice a esbuild di trattare i file come JSX
    include: /src\/.*\.jsx?$/, // Applica questa regola ai file .js e .jsx dentro src
    exclude: [],
  }
})
