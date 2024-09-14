import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"

const options = { }
const locals = { name: "My Pug" }

let baseUrl

if (process.env.PROD) {
  baseUrl = 'https://unicorneatingpopcorn.github.io/resume/'
} else {
  baseUrl = '/'
}
export default defineConfig({
  plugins: [pugPlugin(options, locals)],
  build: {outDir: "docs"},
  base: baseUrl,
  host: '0.0.0.0'
})
