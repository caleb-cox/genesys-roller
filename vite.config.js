import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  // server: {
  //   strictPort: true,
  //   hmr: {
  //     port: 443 // Run the websocket server on the SSL port
  //   }
  // }
})
