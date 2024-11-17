import aspectRatio from '@tailwindcss/aspect-ratio';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
		}
	},

	plugins: [aspectRatio]
} satisfies Config;
