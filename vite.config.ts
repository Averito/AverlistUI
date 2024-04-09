import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteTsConfigPaths(),
		dts({
			insertTypesEntry: true
		})
	],
	build: {
		cssCodeSplit: false,
		lib: {
			entry: './src/main.ts',
			fileName: (format, entryName) =>
				entryName === 'index'
					? `index.${format}.js`
					: `${entryName}/index.${format}.js`,
			name: 'averlist-ui',
			formats: ['es']
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
			output: {
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js'
			}
		},
		sourcemap: false
	}
})
