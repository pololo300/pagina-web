// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PolServer',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pololo300' }],
			sidebar: [
				    {
					label: 'Inici',
					link: '/',
				    },
				    {
					label: 'Configuració',
					items: [
					    { label: 'Arquitectura del Sistema', link: '/arquitectura/' },
					],
				    },
				],
			customCss: [
				'./src/styles/custom.css', // <-- Afegeix exactament aquesta línia
			],
		}),
	],
	vite: {
		preview: {
		  allowedHosts: ['pros.ddns.net']
		}
	  }
});
