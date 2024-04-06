import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), viteTsConfigPaths(), dts()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/main.tsx'),
			name: 'AverlistUI',
			formats: ['es'],
			fileName: 'averlist-ui'
		}
	}
})
