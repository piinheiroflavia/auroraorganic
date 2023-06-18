import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/auroraorganic',
  // server: {
  //   host: true,
  //   port: 80,
  // },
  plugins: [react()]
})