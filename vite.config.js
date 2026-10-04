import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.PNG', '**/*.png', '**/*.gif', '**/*.webp']
})
