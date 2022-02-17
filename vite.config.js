import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
const path = require("path");

export default defineConfig({
  plugins: [react()]
})
