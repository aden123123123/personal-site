// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 上线后把这里改成你在 Vercel 获得的正式网址。
	site: 'https://personal-site.vercel.app',
	integrations: [mdx(), sitemap()],
});
