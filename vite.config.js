import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr'

export default defineConfig({
    base: './',
    define: {
        global: 'globalThis',
    },
    plugins: [
        svgr(),
        react(),
    ],
})