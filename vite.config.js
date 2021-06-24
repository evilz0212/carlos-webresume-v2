import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const fs = require("fs")
const dotenv = require("dotenv")
const path = require("path");


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
	resolve: {
		alias: {
			// JS import 取代為絕對路徑
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
			open: true,
	},
	css: {
		preprocessorOptions: {
			// helpers->載入到所有 sass(包含vue組件)
			// helpers 不放入任何class以免重複載入
			sass: {    
				additionalData: `@import ./src/styles/_prepend.scss`,
			},
			scss: {
				additionalData: `@import "./src/styles/_prepend.scss";`,
			},
		},
	},
	base: process.env.VITE_PROJECT_NAME,
	plugins: [vue()]
})
