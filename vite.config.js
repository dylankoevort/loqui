import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
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
				components: '/src/components',
				assets: '/src/assets',
				helpers: '/src/helpers',
				store: '/src/store'
			}
		},
		define: {
			'process.env': env
		}
	};
});
