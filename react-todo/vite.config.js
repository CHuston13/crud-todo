import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir:'dist',
    base:'crud-fixed/crud-todo/react-todo',
  plugins: [react()],
}})
