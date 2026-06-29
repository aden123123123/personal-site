// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://aden123123123.github.io',
	base: '/personal-site',
	integrations: [mdx(), sitemap()],
});