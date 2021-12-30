import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$theme: path.resolve('./theme'),
					$types: path.resolve('./src/types'),
					$components: path.resolve('./src/components')
				}
			},
			server: {
				fs: {
					allow: ['theme']
				}
			}
		}
	}
};

export default config;
