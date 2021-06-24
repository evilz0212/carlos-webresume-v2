import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const fs = require("fs")
const dotenv = require("dotenv")


// 讀取 .env.development .env.production
const envFiles = [
	// /** default file */ `.env`,
	/** mode file */ `.env.${process.env.NODE_ENV}`,
]

for (const file of envFiles) {
	const envConfig = dotenv.parse(fs.readFileSync(file))
	for (const k in envConfig) {
		process.env[k] = envConfig[k]
	}
}


// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_PROJECT_NAME,
  plugins: [vue()]
})
