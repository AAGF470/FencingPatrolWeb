import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standalone FencingPatrol site. Component library consumed as @aagf470/ui.
export default defineConfig({
  plugins: [react()],
})
