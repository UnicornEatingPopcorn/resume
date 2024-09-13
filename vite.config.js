import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"

const options = { }
const locals = { name: "My Pug" }

export default defineConfig({
  plugins: [pugPlugin(options, locals)],
  build: {outDir: "docs"},
  base: 'https://unicorneatingpopcorn.github.io/resume/',
  host: '0.0.0.0'
})
