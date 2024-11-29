import aspectRatio from '@tailwindcss/aspect-ratio';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
			gridTemplateColumns: {

        '16': 'repeat(16, minmax(0, 1fr))',
      }
		}
	},

	plugins: [aspectRatio]
} satisfies Config;
