import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: '0.0.0.0', // listen on all network interface
    port: 5173, // port vite runs on inside the container
  },
})
