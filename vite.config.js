import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'classic'
		})
	],
	build: {
		sourcemap: 'hidden',
		minify: true
	},
	resolve: {
		alias: {
			src: '/src',
			components: '/src/components'
		}
	}
});
